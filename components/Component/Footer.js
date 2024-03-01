import Link from 'next/link';

export default function Footer(){
    return  <footer>
    {/* <div className='container'> */}
      <ul className='footer__links'>
      <Link href="/" className='footer__link'>Home</Link>
      <Link href="/about" className='footer__link'>About</Link>
      <Link href="/contact" className='footer__link'>Contact</Link>
    
      </ul>
    {/* </div> */}
    
   </footer>
}