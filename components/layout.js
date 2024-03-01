
import * as React from 'react';

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import Navigation from './Component/Navigation';
import Footer from './Component/Footer';
//  import video from "../public/images/bird.mp4"
// import * as main from '../sass/main.scss'



export default function Layout({ children, home }) {
 
  return (
    <>
    {/* <section className='container nav-border' > */}
    <Head />
      <Navigation />  
        <div className="bg-video normal">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={('/images/sunset.mp4')} type="video/mp4" />
            
            Browser not supported!
          </video>  
        
          <section className='container heading__home'>  
            <h1 className='heading heading-primary'>Full Stack Web Developer</h1>
            <h2 className='heading  heading-secondary'>{process.env.FULLNAME}</h2>
            <h3 className='heading  heading-tertiary'>{process.env.EMAIL}</h3>
            <img
                src="images/profile.jpeg"
                className="home-profile-img"
                alt="Profile Image"
              />
              </section>
          </div>
       <Footer />
    </>
  

  );
}
