import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import BlogPostContent from "./content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post não encontrado" };

  return {
    title: `${post.title} | Blog Jaco Locação`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return <BlogPostContent post={post} related={related} />;
}
