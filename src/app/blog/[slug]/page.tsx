import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import BlogPostContent from './content'
import Script from 'next/script'

// ISR: cache de 5 min — resolve o TTFB alto do force-dynamic
export const revalidate = 300

// Pré-renderiza todos os posts publicados no build; novos posts são gerados on-demand
export async function generateStaticParams() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('published', true)
  return (posts ?? []).map((p: { slug: string }) => ({ slug: p.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

const BASE_URL = 'https://www.jacolocadora.com.br'
const LOGO_URL = `${BASE_URL}/logos/LOGO%20JAC%C3%93%20LOCA%C3%87%C3%83O.png`

function resolveImageUrl(imageUrl: string | null | undefined): string {
  if (!imageUrl) return LOGO_URL
  return imageUrl.startsWith('http') ? imageUrl : `${BASE_URL}${imageUrl}`
}

function calcWordCount(content: { heading: string; body: string }[]): number {
  return content.reduce((acc, s) => {
    const words = `${s.heading} ${s.body}`.trim().split(/\s+/).filter(Boolean).length
    return acc + words
  }, 0)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!post) return { title: 'Post não encontrado' }

  const ogImage = resolveImageUrl(post.image_url)
  const keywords = [
    post.focus_keyword,
    post.title,
    post.category,
    'locação de equipamentos',
    'Jaco Locação',
    'aluguel de máquinas SC',
  ].filter(Boolean).join(', ')

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    keywords,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated_at,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: 'Jaco Locação',
      locale: 'pt_BR',
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!post) notFound()

  const { data: related } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .neq('id', post.id)
    .limit(3)

  const postUrl = `${BASE_URL}/blog/${post.slug}`
  const imageUrl = resolveImageUrl(post.image_url)
  const wordCount = calcWordCount(post.content ?? [])

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': postUrl,
    headline: post.title,
    description: post.meta_description || post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: post.date,
    dateModified: post.updated_at || post.date,
    inLanguage: 'pt-BR',
    wordCount,
    articleSection: post.category,
    keywords: post.focus_keyword || post.title,
    author: {
      '@type': 'Organization',
      name: 'Jaco Locação',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jaco Locação',
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-excerpt', 'h2'],
    },
    isPartOf: {
      '@type': 'Blog',
      '@id': `${BASE_URL}/blog`,
      name: 'Blog Jaco Locação',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
    ],
  }

  return (
    <>
      <Script
        id={`blogposting-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPostContent post={post} related={related ?? []} />
    </>
  )
}
