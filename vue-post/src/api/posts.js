// axios
const posts = [
  { id: 1, title: '제목1', content: '내용1', createdAt: '2021-01-11' },
  { id: 2, title: '제목2', content: '내용2', createdAt: '2022-02-22' },
  { id: 3, title: '제목3', content: '내용3', createdAt: '2023-03-33' },
  { id: 4, title: '제목4', content: '내용4', createdAt: '2024-04-44' },
  { id: 5, title: '제목5', content: '내용5', createdAt: '2025-05-55' },
  { id: 6, title: '제목6', content: '내용6', createdAt: '2026-06-66' },
  { id: 7, title: '제목7', content: '내용7', createdAt: '2027-07-77' }
]

export function getPosts() {
  return posts
}
