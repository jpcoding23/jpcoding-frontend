
import * as React from 'react';

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import Navigation from '../Component/Navigation';
import Footer from '../Component/Footer';
//  import video from "../public/images/bird.mp4"
// import * as main from '../sass/main.scss'



export default function DarkLayout({ children, home }) {
 
  return (
    <>
    {/* <section className='container nav-border' > */}
      <Head />
      <Navigation/>   
            <div className="bg-video">
            <video className="bg-video__content scroll"  muted >
              <source src='/images/sunset.mp4' type="video/mp4"/>

              Browser not supported!
            </video>  
            <main className='dark scroll'>{children}</main>
          </div>
      <Footer/>
    </>
  

  );
}
