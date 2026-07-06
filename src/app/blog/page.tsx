import SectionHeading from '@/components/SectionHeading'
import { supabase } from '@/lib/supabase'
import PostsGrid from './posts-grid'

// ISR: cache de 5 min — resolve o TTFB de ~2s do force-dynamic
export const revalidate = 300

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('date', { ascending: false })

  return (
    <main className="font-sans antialiased text-dark">
      <section className="bg-forest pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-[15%] w-[400px] h-[400px] bg-lime/10 rounded-full blur-[120px] -translate-y-1/2" />
          <div className="absolute top-1/2 right-[10%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
        </div>
        <div className="container-main relative text-center">
          <SectionHeading
            as="h1"
            tag="Blog"
            title="Blog da Jaco Locação"
            description="Artigos, dicas e novidades sobre equipamentos, segurança e o mundo da construção."
            light
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <PostsGrid posts={posts ?? []} />
        </div>
      </section>
    </main>
  )
}
