import React from 'react';
import './Commune.css';
import circle from '../../assets/images/circle.svg'

function CommunityEngagement() {
    return (
        <div className="commune">
        <div className="bg">
            <h1>Community and Engagement</h1>
        </div>
  
  <section className='first-sec'>
    <h1>
        "Engaging with the community is at the heart of my mission. I believe in creating platforms that encourage the development of people and communities through active participation, fostering a sense of belonging among individuals and groups. My initiatives are designed to empower people, enhance civic responsibility, and promote collaborative problem-solving.
"
    </h1>
    <h3>- SEYI ADISA</h3>

    <h2>Key Engagement Initiaves</h2>
    <hr />
  </section>

  <section className='second-sec'>

         <div className="comm">
            <div className="comm-text">
            <h2> Community Forums and Dialogues </h2>
            <li> <p>
            <img src={circle} alt="" className='circle'/>

Facilitating forums where community members can discuss issues, share ideas, and collaborate on solutions.</p> </li>
            <li> <p>
            <img src={circle} alt="" className='circle'/>

                Encouraging active participation in governance by ensuring every voice is heard.
Join our Community on Facebook
</p> </li>

</div>
<div className="comm-img"></div>
         </div>

         <div className="sadi">
         <div className="sadi-img"></div>
            <div className="sadi-text">
            
            <h2> 
Seyi Adisa Development Initiative (SADI)
 </h2>

            <li> <p>
            <img src={circle} alt="" className='circle'/>
            Providing initiatives to develop women and youth in education, healthcare, infrastructure, and empowerment through sports, ICT, and technical and vocational skill acquisition programs.
</p> </li>
            <li> <p>
            <img src={circle} alt="" className='circle'/>
                
                Offering workshops and training sessions aimed at developing leadership skills and fostering a mindset of good governance among young people.
</p> </li>
            <li> <p>
            <img src={circle} alt="" className='circle'/>
                
                Running the John Maxwell iLead leadership programs in schools across Oyo State to guide the next generation of leaders in their personal and professional development.
</p> </li>

<h3><a href=''>Visit SADI</a>
</h3>
            </div>
         </div>

            <div className="agid">
            <div className="agid-text">
            
            <h2> 
            African Governance Institute for Development (AGID)

 </h2>

            <li> <p>
            <img src={circle} alt="" className='circle'/>
Creating an ecosystem of governance initiatives from primary school to tertiary institutions, including local organizations, grassroots groups, and online platforms to foster a knowledge economy of good governance.

</p> </li>
            <li> <p>
            <img src={circle} alt="" className='circle'/>
                
                Promoting initiatives that address the lack of interest in politics and governance, creating awareness and an active drive to participate.

</p> </li>

<h3><a href=''>Visit AGID</a>
</h3>
            </div>
         <div className="agid-img"></div>

         </div>


         <div className="seven">
         <div className="seven-img"></div>

            <div className="seven-text">
            
            <h2> 
            7Eleven Foundation

 </h2>

            <li> <p>
            <img src={circle} alt="" className='circle'/>

            Creating an ecosystem of governance initiatives from primary school to tertiary institutions, including local organizations, grassroots groups, and online platforms to foster a knowledge economy of good governance.

</p> </li>
            <li> <p>
            <img src={circle} alt="" className='circle'/>
                
                Promoting initiatives that address the lack of interest in politics and governance, creating awareness and an active drive to participate.

</p> </li>

<h3><a href=''>Visit AGID</a>
</h3>
            </div>
        
                
         </div>


         <div className="Volunteer">
            <div className="Volunteer-text">
            
            <h2> 
            Volunteer and Internship Opportunities


 </h2>

            <li> <p>
            <img src={circle} alt="" className='circle'/>
                
            Providing opportunities for individuals to volunteer or intern with my various initiatives and programs.


</p> </li>
            <li> <p>
            <img src={circle} alt="" className='circle'/>

            Encouraging community involvement and hands-on experience in governance and leadership projects.

</p> </li>


            </div>
   
         <div className="Volunteer-img"></div>
                
         </div>


  </section>
        
            
           <section className='third-sec'>
            <h1>How to get involved</h1>
            <p>We welcome you to join our efforts in making a difference. Whether you are interested in attending a forum, participating in a workshop, or volunteering for a community project, there are numerous ways to get involved and contribute to our shared vision of a thriving, engaged society.

For more information on upcoming events, volunteer opportunities, or how to participate in our initiatives, please fill out the contact form below. Together, we can drive positive change and build a brighter future for our communities.</p>
           </section>
        </div>
        
    );
}

export default CommunityEngagement;
