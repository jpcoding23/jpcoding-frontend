
import Link from 'next/link';
import Head from 'next/head'

export default function Navigation(){

    return <nav className='navigation'>
          <ul className='navigation__links'>
            <Link href="/" className='navigation__link'>Home</Link>
              <Link href="/about" className='navigation__link'>Resume</Link>
              <Link href="/blogs" className='navigation__link'>Blogs</Link>
              <Link href="/projects" className='navigation__link'>Projects</Link>
              <Link href="https://github.com/jpcoding23" className='navigation__link' target='_blank'>Github</Link>
              </ul>
          </nav>
}