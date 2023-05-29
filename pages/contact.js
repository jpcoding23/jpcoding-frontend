import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout >
        <section className='contact'>
        {/* <div className='row'> */}

            <div className='container'>
            <h1 className='heading-form'>Contact Me</h1> 
            <div className='contact'>
            <form action="#" className='form__contact'>  
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
            

        </form>
            </div>
       
        </div>
        {/* </div> */}
        </section>
     
    </Layout>
  )
}
