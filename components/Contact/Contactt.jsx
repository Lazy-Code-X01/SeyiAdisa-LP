import {useState} from 'react'
import './Contact.css'
import phone from '../../assets/images/phone.svg'
import mail from '../../assets/images/mail.svg'
import insta from '../../assets/images/square-instagram-dark.svg'
import twitter from '../../assets/images/x-twitter-dark.svg'
import linkedln from '../../assets/images/linkedin-in-dark.svg'
import facebook from '../../assets/images/facebook-dark.svg'
const Contactt = () => {
    
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    inquirySubject: '',
    message: '',
    contactMethod: '',
    hearAboutUs: '',
    subscribe: false,
    captcha: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
  }
  return (
    <div>
      <div className='head-text'>
<h4>CONTACT US</h4>
<h1>Connect with Seyi Today</h1>
<p>We would love to hear from you, reach out to us on the email address below or call the number</p>
<p>Do you have a question or need more information? Fill out the form below, and we’ll get back to you shortly."</p>
    </div>

      <div className="main-content">
        <div className="contact">
            <div className="phone-number">
            <div className="media-circle">
            <img src={phone} alt="" />
                </div>
                
                <h3>Call us</h3>
                <h4></h4>
            </div>
            <div className="mail
            ">
                <div className="media-circle">
                <img src={mail} alt="" />
                </div>
                <h3>Email Us</h3>
                <h4></h4>
            </div>

            <div className="insta">
                 <div className="media-circle">
                <img src={insta} alt="" />

                </div>
                <h3>Instagram</h3>
                <h4></h4>
            </div>

            <div className="twitter">
            <div className="media-circle">
                <img src={twitter} alt="" />
                </div>
                <h3>Twitter</h3>
                <h4></h4>
            </div>
          
            <div className="Linkedln">
            <div className="media-circle">
                <img src={linkedln} alt="" />
                </div>
                <h3>Linkedln</h3>
                <h4></h4>
            </div>

            <div className="Facebook">
            <div className="media-circle">
                <img src={facebook} alt="" />
                </div>
                <h3>Facebook</h3>
                <h4></h4>
            </div>
        </div>

        <div className="form">
        <div className="form-container">
      <h1>Inquiry Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Contact Information</h2>
          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </label>
          <label>
            Email Address:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone Number: (Optional)
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <label>
            Organization/Company: (Optional)
            <input type="text" name="organization" value={formData.organization} onChange={handleChange} />
          </label>
        </div>

        <div className="form-section">
          <h2>Inquiry Details</h2>
          <label>
            Subject of Inquiry:
            <select name="inquirySubject" value={formData.inquirySubject} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Consulting Services">Consulting Services</option>
              <option value="Speaking Engagements">Speaking Engagements</option>
              <option value="Workshops and Training">Workshops and Training</option>
              <option value="Media Requests">Media Requests</option>
              <option value="Partnership Opportunities">Partnership Opportunities</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </label>
        </div>

        <div className="form-section">
          <h2>Preferred Method of Contact</h2>
          <label>
            <input type="radio" name="contactMethod" value="Email" onChange={handleChange} required />
            Email
          </label>
          <label>
            <input type="radio" name="contactMethod" value="Phone" onChange={handleChange} />
            Phone
          </label>
          <label>
            <input type="radio" name="contactMethod" value="Either" onChange={handleChange} />
            Either
          </label>
        </div>

        <div className="form-section">
          <h2>Additional Information</h2>
          <label>
            How Did You Hear About Us?:
            <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Event/Conference">Event/Conference</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} />
            Yes, I would like to receive updates and newsletters.
          </label>
        </div>

        <div className="form-section">
          <h2>CAPTCHA</h2>
          {/* Add CAPTCHA or reCAPTCHA integration here */}
          <label>
            Verification:
            <input type="text" name="captcha" value={formData.captcha} onChange={handleChange} required />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>

        </div>
      </div>
    </div>
  )
}


export default Contactt
