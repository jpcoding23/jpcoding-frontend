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
  var res=null;
  var paths=[];
 try{
  res = await axios.get(process.env.BACKEND_URL);
  paths =await res.data.map((blog) => (
    {
    params: { 
      id: blog.id.toString(),
    },
  }));
  

 }catch(err ){
  console.log(err);
 }
  //  console.log(res.data)
  return { paths, fallback: false }

} 

export async function getStaticProps({ params }) {
  var blog=null;
  try{
   console.log(params.id)
  // const url=process.env.BACKEND_URL + "blogs/" + params.id
  const res = await axios.get(process.env.BACKEND_URL + params.id)
   blog=res.data
   return blog;
  
}catch(Exception ){
  console.log(e);
  throw new Error('Failed to fetch data');
}
}
 
