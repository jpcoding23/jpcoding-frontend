import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

// require("dotenv").config();

export default function Home() {
  return (
    <Layout >
      
        <section className='about'>
          <div className='container'>
            
          <h2 className='heading__about about--h2'>Resume: {process.env.FULLNAME}</h2>
          <h3 className='heading__about about--h3'> {process.env.EMAIL} - <a href= {process.env.LINKEDIN_URL}>LinkendIn</a> - Irvington, NJ</h3><br/>
          <h3 className='heading__about about--h3'>Summary</h3>
          <p className='about--p'>Graduated from the University of Bridgeport <br/>
Completed General Assembly’s coding Bootcamp<br/>
Freelance Developer

</p>
          <h3 className='heading__about about--h3'>Skills</h3>
          <p className='about--p'>Frontend NextJs React Node <br/>
Backend Java/SpringBoot<br/>
Languages Java Javascript SQL Python<br/> 
Devops Heroku Netlify<br/>
Productivity Slack Zoom Service-Now Trello<br/> Microsoft Office Google Docs<br/>
</p>
          <h3 className='heading__about about--h3'>Work Expiereince</h3>
          <p className='about--p'>Actively searching for Jr. Java Developer Role / Jr. Software Engineer
</p>
          <h3 className='heading__about about--h3'>Education</h3>
          <p className='about--p'>General Assembly: Web Development Immersive program, 26 Week Coding Bootcamp <br/>  February, 2022 - August, 2022<br/> <br/>
University of Bridgeport: Bachelors of Science Computer Science, minor in Mathematics <br/> August, 2013 - August, 2018 
</p>
</div>
        </section>
     
    </Layout>
  )
}
