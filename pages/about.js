import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="title">
      About Me <br/> 
        <Link href="/"> return back!</Link>
      </h1>
    </>
  )
}
