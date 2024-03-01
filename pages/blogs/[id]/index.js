import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import Link from 'next/link';
import axios from 'axios'
import useSWR from "swr"
import LightLayout from '@/components/Layouts/LightLayout';

export default function Post({ blog }) {
  // Render post...
  return(
    
    <LightLayout>
      <section className='blogs'>
      <h1 className='heading blogs__heading'>{blog.title}</h1>
      <div className='blogs__box'>
          
          <h3 className='card__heading--date'>Date Published: {Intl.DateTimeFormat('en-US').format(blog.dateCreated)}  </h3>
          <p className='blogs__p'>
            {blog.article}
          </p>
        </div>
      </section>
    
    </LightLayout>
  )
}
 
export const getStaticPaths = async () => {
  const res = await axios.get(process.env.BACKEND_URL)
 
  //  console.log(res.data)
  if (!res) {
    // console.log(res)
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const paths =await res.data.map((blog) => (
    {
    params: { 
      id: blog.id.toString(),
    },
  }));

  return { paths, fallback: false }

} 

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
   console.log(params.id)
  const url=process.env.BACKEND_URL + "blogs/" + params.id
  const res = await axios.get(process.env.BACKEND_URL + params.id)
  const blog=res.data
 
  // if (!res) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
 
  // Pass post data to the page via props
  return { props: { blog} }
}
 
