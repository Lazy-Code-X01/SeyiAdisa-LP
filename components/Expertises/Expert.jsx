import React from 'react'
import './Expertises.css'
import BookingForm from './Form/BookingForm';

const Expert = () => {


  return (

    <div className='E-div'>
          <div className='Bg'>
      
      <h1>SPEAKING ENGAGEMENTS</h1>
      </div>
      <div className="speak_text container">
        <div className="img"></div>
        <p>I deliver impactful speeches on topics related to Governance, Leadership, and National Development. As an avid nation builder committed to transforming people and communities across Africa, I am passionate about promoting participatory governance, fostering active citizenship, and inspiring the next generation. I firmly believe in the power of entrepreneurship and strive to instill an entrepreneurial and excellent spirit in youth and emerging leaders.


<br /><span>For more information on my speaking topics, leadership training sessions, past engagements, or to book me for conferences and events, please fill out the booking form below.</span>
</p>


      </div>
    
 
<div className="contact">

        <BookingForm />
      
    </div>

    <div className='work-sec'>
      <div className="Bg2">
      <h1>WORKSHOPS AND TRAINING</h1>
      </div>
      <div className="Bg2-text">
   
      <p>As a certified John Maxwell Leadership Coach, I offer comprehensive John Maxwell leadership training programs tailored for teams and organisations, particularly those operating within the public sector. My training equips young aspiring leaders with the values and skills needed to lead effectively. I facilitate Change Your World transformation tables and host Lunch and Learn programs, providing group coaching sessions designed to foster personal and professional growth. In addition, I conduct governance workshops that help young leaders understand the fundamentals of public governance. Using biblical principles, I aim to educate, equip, and transform mindsets, building the skillsets necessary for kingdom transformation.
 </p>
      </div>
      </div>

      <div className="event">
<div className="event-title">
  <h2>JOIN OUR UPCOMING EVENTS</h2>
</div>
<div className="event-text">
  <h2>
Join our upcoming events:

Lunch & Learn – July 6
Governance Workshop – July 13
Change Your World – October 19
</h2>
</div>
    </div>
    </div>

  



    
  );
}

export default Expert
