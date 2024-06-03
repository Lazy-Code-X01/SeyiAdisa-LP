import React from 'react'
import './Achievements.css'
import trophy from '../../assets/images/trophy-fill.svg'
import ta from '../../assets/images/T&A.gif'
import adetutu from '../../assets/images/adetutu.gif'
import a711 from '../../assets/images/711.jpg'
import sadi from '../../assets/images/SADI.png'
import AfricaG from '../../assets/images/AfricaG.svg'
import mipad from '../../assets/images/mipad.png'
import minflu from '../../assets/images/minflu.png'
import icsan from '../../assets/images/ICSAN.jpg'

const Achievements = () => {
  return (
    <div className='Achievements container'>
      <div className="title">
        <h2>  <img src={trophy} alt="" />  KEY ACHIEVEMENTS <img src={trophy} alt="" /> </h2>
      </div>
      <div className="contain">
      <div className="item">
      <img src={adetutu} alt="" />
      <h3> - Archbishop Desmond <br />Tutu Leadership Fellow</h3>
        
        
        </div>
      <div className="item">
      
        <img src={ta} alt="" />
        <h3>Co-Founder of T&A Legal</h3>
        </div>
      <div className="item">
        <img src={a711} alt=""/>
        <h3>Founder of 7:11 Empowerment Foundation (7ELEVEN)
</h3>
        </div>
      <div className="item">
        <img src={sadi} alt="" />

        <h3>Founder of Seyi Adisa Development Initiative (SADI)
</h3>

      </div>

      <div className="item">
        <img src={AfricaG} alt="" />

      <h3>Founder of African Governance Institute for Development (AGID)
</h3>

      </div>
      <div className="item">
        <img src={mipad} alt="" />

      <h3>Named among the top 100 most influential people of African descent under 40 by the UN-affiliated MIPAD 100 in Politics & Governance
</h3>
      </div>
      <div className="item">
        <img src={minflu} alt="" />
        <h3>Recognized as the Most Influential Young Person in Oyo State under the Governance category by the Oyo State Youth Awards
</h3>
      </div>
      <div className="item">
        <img src={icsan} alt="" /> 
        <h3>Fellow, Institute of Chartered Secretaries & Administrators
</h3>
      </div>
    </div>
     
     
    </div>
  )
}

export default Achievements
