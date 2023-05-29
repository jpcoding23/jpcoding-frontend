import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import axios from 'axios'
import useSWR from "swr"
import { useState, useEffect } from 'react'

export default function FirstPost() {
  const fetcher = url => axios.get(url).then(res => res.data)
  const { data, error, isLoading } = useSWR('http://localhost:8080/api/blogs/1', fetcher); 
 
  if (error) return <div>Failed to fetch blogs.</div>
  if (isLoading) return <h2>Loading...</h2>
    return (
        <Layout>
          <Head>
            <title>First Post</title>
          </Head>
          <h1>First Post</h1>
          <h2>
            <Link href="/">← Back to home</Link>
          </h2>
         <p>{data.title}</p> 
          

        </Layout>
      );
}
