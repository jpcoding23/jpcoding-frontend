import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import axios from 'axios'
import useSWR from "swr"
import { getSortedPostsData } from '../../lib/posts';
import * as React from 'react';
import {useFormatter} from 'next-intl';
import LightLayout from '@/components/Layouts/LightLayout';


export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

export default function Home({ allPostsData }) {
  const config = {
    headers:{
      'Content-Type': 'application/json',
      "vary":"Access-Control-Request-Method",
      "vary":"Access-Control-Request-Headers",
      "vary":"origin"
    }
  };
    const fetcher = url => axios.get(url,config).then(res => res.data)

   
    const { data, error, isLoading } = useSWR(process.env.BACKEND_URL, fetcher); 
    //  console.log(data);
    if(error) console.log(error);
    
    if (error) return( 
      <LightLayout >
    <section className='blogs'>
      <div className='container'>
        <h1 className='heading blogs__heading'>Blogs</h1><br/>
         {allPostsData.map(({ id, date, title,description,link }) => (
          <div key={title}>
           <div  className='card__blogs'>
            <h2 className='card__heading'> <Link className='card__link' href={link}>{title}</Link></h2>
             <p className='card__heading--date'>{date}</p>
             <p className='card__heading--desc'> {description}</p>
           </div>
           <div  className='card__blogs'>
            <h2 className='card__heading'> <Link className='card__link' href={link}>{title}</Link></h2>
             <p className='card__heading--date'>{date}</p>
             <p className='card__heading--desc'> {description}</p>
           </div>
           
           </div>
           
         ))}
         </div>
            </section>
        </LightLayout>)
        
    if (isLoading) return <Layout className='blogs'><h2>Loading...</h2></Layout>
     
    return (
        <LightLayout >
        <section className='blogs'>
            <h1 className='heading blogs__heading'>Blogs</h1><br/>
             {data.map((blog) => (
              <div key={blog.id}>
               <div  className='card__blogs'>
                <h2 className='card__heading'> <Link className='card__link' href={"blogs/"+blog.id} >{blog.title}</Link></h2>
                 <p className='card__heading--date'>{Intl.DateTimeFormat('en-US').format(blog.dateCreated)}</p>
                 <p className='card__heading--desc'> {blog.description}</p>
               </div>  
               </div>
               
             ))}
                </section>
            </LightLayout>
      )
}
