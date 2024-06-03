import React from 'react'
import logo from '../../assets/images/Logo.png'
import './Footer.css'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/x-twitter.svg'
import instagram from '../../assets/images/instagram.svg'
import linkedln from '../../assets/images/linkedin.svg'
const Footer = () => {
  return (
    <section>    <div className='footer'>
      <div className="sec1 container">
        <img src={logo} alt="" />
        <ul>
        <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
                 <li><a href="Expertises">Expertises and Services</a></li>   
                <li><a href="Insight">Insight and Resources</a></li>
                <li><a href="Community">Community and Engagement</a></li>
                <li><a href='Contact'>Contact Us</a></li>
        </ul>
      </div>

      <div className="sec2">
        <div className="sec2-content">
                <h1>Subscribe to our news letter to get <br /> latest updates and news</h1>
                <input type="email" placeholder='E-mail'/>
                <button type='submit' className='btns'>Submit</button>
        </div>
      </div>

      <div className="sec3">
        <div className="sec3_content container">
           <p>hello@seyiadisa.com</p>
           <p>+2348132412749</p>
           </div>
           <ul className='container'>
            <li><img src={facebook} alt="" /></li>
            <li><img src={twitter} alt="" /></li>
            <li><img src={instagram} alt="" /></li>
            <li><img src={linkedln} alt="" /></li>       </ul>
      </div>

      
    </div>
    </section>

  )
}

export default Footer
