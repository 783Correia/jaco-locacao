export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: { heading: string; body: string }[]
  date: string
  read_time: string
  image_url: string
  category: string
  meta_title: string
  meta_description: string
  focus_keyword: string
  published: boolean
  created_at: string
  updated_at: string
}
