import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layout';
import axios from 'axios'
import useSWR from "swr"
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

export default function Home({ allPostsData }) {
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error, isLoading } = useSWR(process.env.BACKEND_URL, fetcher); 
    
    
    if (error) return( 
      <Layout >
    <section className='blogs'>
        <h1 className='heading blogs__heading'>Blogs</h1><br/>
         {allPostsData.map(({ id, date, title,description,link }) => (
          <>
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
           
           </>
           
         ))}
            </section>
        </Layout>)
        
    if (isLoading) return <Layout className='blogs'><h2>Loading...</h2></Layout>
      return (
          <Layout className='blogs'>
           <p>{data.title}</p> 
           <p>{data.description}</p> 
           <p>{data.article}</p> 
           <p>{data.dateCreated}</p> 

            
  
          </Layout>
      )
}
