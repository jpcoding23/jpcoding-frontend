import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import LightLayout from '@/components/Layouts/LightLayout';

export default function Home() {
  return (
    <LightLayout>
        {/* <section className='contact'> */}
        {/* <div className='row'> */}

            <div className='contact '>
            <h1 className='heading-form text-medium'>Contact Me</h1> 
            <div className='contact__container'>
                <ul className='contact__links'>
                    <Link href={process.env.LINKEDIN_URL} className='contact__link text-medium' target='_blank'>LinkedIn</Link> <br/>  <br/>   
                    <Link href={process.env.NEXT_PUBLIC_DISCORD_URL}  className='contact__link text-medium' target='_blank'>Discord</Link>  <br/>  <br/>  
                    <Link href={process.env.NEXT_PUBLIC_SLACK_URL} className='contact__link text-medium' target='_blank'>Slack</Link>
                   
                </ul>
            </div>
            <h3 className='heading heading-tertiary contact__email'>{process.env.EMAIL}</h3> 
            {/* <div className='contact'> */}
            {/* <form action="mailto:${process.env.EMAIL}" method="post" enctype="text/plain"
  className='form__contact'>  
        <div className="form__group">
            <input type="text" className="form__input" placeholder="Full name" id="name" required/>
            <label htmlFor="name" className="form__label">Full name</label>
        </div>

        <div className="form__group">
            <input type="text" className="form__input" placeholder="Subject" id="subject" required/>
            <label htmlFor="subject" className="form__label">Subject</label>
        </div>


        <div className="form__group">
            <input type="email" className="form__input" placeholder="Email address" id="email" required/>
            <label htmlFor="email" className="form__label">Email address</label>
        </div>
        <div className="form__group">
            <textarea type="text" className="form__input msg" placeholder="Message" id="message" required/>
            <label htmlFor="message" className="form__label">Message</label>
        </div>
            
                <button className='form__button' >Send</button>
            

        </form>*/}
            </div>
        
        {/* </div> */}
        {/* </div> */}
        {/* </section> */}
     
    </LightLayout>
  )
}
