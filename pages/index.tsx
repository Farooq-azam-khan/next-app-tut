import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-3xl font-bold underline">Welcome to my First Next Page</h1>

      <h2> <Link href="/my-first-mdx-page"><a>Blog 1</a></Link></h2>

    </div>
  )
}

export default Home
