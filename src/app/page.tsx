import Link from 'next/link'
const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click
      <Link href="/documents/1234">
        {' '}
        <span>&nbsp;here&nbsp;</span>
      </Link>
      to go to document id
    </div>
  )
}

export default Home
