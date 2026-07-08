import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { supabaseAdmin } from '@/lib/supabase-admin'

// Allowlist: só os posts do plano editorial (jul-ago/2026) podem ser
// publicados pelo cron — rascunhos em edição no /seoblog nunca são tocados.
const SCHEDULED_SLUGS = [
  'como-escolher-altura-plataforma-elevatoria',
  'locacao-diaria-semanal-mensal-plataforma-elevatoria',
  'plataforma-articulada-eletrica-ou-diesel',
  'alcance-horizontal-plataforma-articulada',
  'plataforma-articulada-manutencao-fachadas',
  'plataforma-articulada-manutencao-industrial',
  'plataforma-tesoura-eletrica-onde-usar',
  'plataforma-tesoura-ou-andaime',
  'plataforma-elevatoria-para-galpoes-industriais',
  'locacao-plataforma-elevatoria-florianopolis',
]

export async function GET(request: Request) {
  const auth = request.headers.get('authorization')
  if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  // data de hoje em horário de Brasília (UTC-3, sem horário de verão desde 2019)
  const today = new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString().slice(0, 10)

  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .update({ published: true })
    .in('slug', SCHEDULED_SLUGS)
    .eq('published', false)
    .lte('date', today)
    .select('slug')

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const published = (data ?? []).map(p => p.slug)
  if (published.length > 0) {
    revalidatePath('/blog')
    for (const slug of published) revalidatePath(`/blog/${slug}`)
  }

  return NextResponse.json({ today, published })
}
