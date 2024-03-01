import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layout';
import axios from 'axios'
import useSWR from "swr"
import utilStyles from '../styles/utils.module.css';
import { getSortedProjectsData } from '../lib/projects';
import LightLayout from '@/components/Layouts/LightLayout';


export async function getStaticProps() {
    const allPostsData = getSortedProjectsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

export default function Home({ allPostsData }) {
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error, isLoading } = useSWR('http://localhost:8080/api/projects/1', fetcher); 
    
    if (error) return( 
        <LightLayout >
            <section className='projects'>
        <h1 className='heading blogs__heading'>Projects</h1><br/>
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
        </LightLayout>)
    if (isLoading) return <Layout className='blogs'><h2>Loading...</h2></Layout>
      return (
          <LightLayout>
           <p>{data.title}</p> 
           <p>{data.description}</p> 
           <p>{data.article}</p> 
           <p>{data.dateCreated}</p> 

            
  
          </LightLayout>
      )
}
