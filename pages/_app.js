import '@/styles/globals.css'
import "@/styles/page.css" 
import "@/styles/about.css" 
// import '@/sass/main.scss'
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
