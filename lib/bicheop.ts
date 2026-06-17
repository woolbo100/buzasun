import fs from 'fs'
import path from 'path'

export interface BicheopPost {
  title: string;
  slug: string;
  category: string;
  categoryName: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  status: string;
  seoTitle: string;
  seoDescription: string;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content/bicheop')

// 안전하게 디렉토리를 보장하고 파일들을 불러옵니다
export function getBicheopPosts(): BicheopPost[] {
  try {
    // 만약 폴더가 없으면 에러를 내지 않고 알아서 새로 만들어줍니다
    if (!fs.existsSync(CONTENT_DIR)) {
      fs.mkdirSync(CONTENT_DIR, { recursive: true })
      return []
    }

    const files = fs.readdirSync(CONTENT_DIR)
    const posts: BicheopPost[] = []

    files.forEach(file => {
      if (file.endsWith('.md') || file.endsWith('.mdx')) {
        const filePath = path.join(CONTENT_DIR, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        
        const parsed = parseMarkdown(fileContent)
        // 공개된 글(published)만 노출합니다
        if (parsed && parsed.status === 'published') {
          posts.push(parsed)
        }
      }
    })

    // 날짜 최신순(역순)으로 자동 정렬합니다
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (e) {
    console.error('Failed to load bicheop posts', e)
    return []
  }
}

// 주소창의 slug를 대조하여 해당하는 단 하나의 글을 가져옵니다
export function getBicheopPostBySlug(slug: string): BicheopPost | null {
  const posts = getBicheopPosts()
  return posts.find(post => post.slug === slug) || null
}

// 마크다운 파일 내용 중 머리말(Frontmatter)과 본문을 갈라냅니다
function parseMarkdown(fileContent: string): BicheopPost | null {
  try {
    const trimmed = fileContent.trim()
    if (!trimmed.startsWith('---')) return null
    
    // 두 번째 '---' 로 앞뒤를 자릅니다
    const parts = trimmed.split('---')
    if (parts.length < 3) return null
    
    const frontmatterText = parts[1]
    const content = parts.slice(2).join('---').trim()
    
    const metadata: any = {}
    frontmatterText.split('\n').forEach(line => {
      const colonIdx = line.indexOf(':')
      if (colonIdx > -1) {
        const key = line.slice(0, colonIdx).trim()
        let val = line.slice(colonIdx + 1).trim()
        
        // 앞뒤 따옴표(" 또는 ')를 이쁘게 떼어냅니다
        val = val.replace(/^['"]|['"]$/g, '')
        metadata[key] = val
      }
    })
    
    return {
      title: metadata.title || '제목 없음',
      slug: metadata.slug || '',
      category: metadata.category || 'general',
      categoryName: metadata.categoryName || '기타',
      excerpt: metadata.excerpt || '',
      thumbnail: metadata.thumbnail || '',
      date: metadata.date || '',
      status: metadata.status || 'draft',
      seoTitle: metadata.seoTitle || metadata.title,
      seoDescription: metadata.seoDescription || metadata.excerpt,
      content: content
    }
  } catch (e) {
    console.error('Markdown frontmatter parsing error', e)
    return null
  }
}
