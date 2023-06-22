
import * as React from 'react';

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
//  import video from "../public/images/bird.mp4"
// import * as main from '../sass/main.scss'



export default function Layout({ children, home }) {
 
  return (
    <>
      <Head>
        <title>JPCoding: Web Developer</title>
        <meta property="og:title" content="jpcoding" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
      </Head>
       <nav className='navigation'>
          <ul className='navigation__links'>
            <Link href="/" className='navigation__link'>Home</Link>
              <Link href="/about" className='navigation__link'>Resume</Link>
              <Link href="/blogs" className='navigation__link'>Blogs</Link>
              <Link href="/projects" className='navigation__link'>Projects</Link>
              <Link href="https://github.com/jpcoding23" className='navigation__link' target='_blank'>Github</Link>
              </ul>
          </nav>
       {home ? (<>
          <div className='container'>
          <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={('/images/sunset.mp4')} type="video/mp4" />
            
            Browser not supported!
          </video>  
        </div>
        </div>
        <header className='header__home'>
         
          <h1 className='heading heading-primary'>Full Stack Web Developer</h1>
          <h2 className='heading  heading-secondary'>{process.env.FULLNAME}</h2>
          <h3 className='heading  heading-tertiary'>{process.env.EMAIL}</h3>
          <img
              src="images/profile.jpeg"
              className="home-profile-img"
              alt="Profile Image"
            />
         
          </header>
          
         
        </>
       ) : (<>
          <div className='container'>
              <div className="bg-video-light">
              <video className="bg-video__content"  muted >
                <source src='/images/sunset.mp4' type="video/mp4" />
                
                Browser not supported!
              </video>  
            </div>
              <main>{children}</main>
            </div>
          </>
          
       )}
       <footer>
        <div className='container'>
          <ul className='footer__links'>
          <Link href="/" className='footer__link'>Home</Link>
          <Link href="/about" className='footer__link'>About</Link>
          <Link href="/contact" className='footer__link'>Contact</Link>
        
          </ul>
        </div>
        
       </footer>
    </>
  

  );
}
