import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import BlogPostContent from './content'
import Script from 'next/script'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
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

  const baseUrl = 'https://jacolocadora.com.br'
  const ogImage = post.image_url?.startsWith('http')
    ? post.image_url
    : post.image_url
    ? `${baseUrl}${post.image_url}`
    : `${baseUrl}/logos/LOGO%20JAC%C3%93%20LOCA%C3%87%C3%83O.png`

  return {
    title: `${post.meta_title || post.title} | Blog Jaco Locação`,
    description: post.meta_description || post.excerpt,
    keywords: `${post.title}, ${post.category}, locação de equipamentos, Jaco Locação, aluguel de máquinas SC`,
    alternates: { canonical: `${baseUrl}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: 'Jaco Locação',
      locale: 'pt_BR',
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
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

  const baseUrl = 'https://jacolocadora.com.br'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image_url ? `${baseUrl}${post.image_url}` : undefined,
    datePublished: post.date,
    dateModified: post.updated_at,
    author: { '@type': 'Organization', name: 'Jaco Locação', url: baseUrl },
    publisher: {
      '@type': 'Organization',
      name: 'Jaco Locação',
      logo: { '@type': 'ImageObject', url: `${baseUrl}/logos/LOGO%20JAC%C3%93%20LOCA%C3%87%C3%83O.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/blog/${post.slug}` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${baseUrl}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <Script
        id={`article-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
