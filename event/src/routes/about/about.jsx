import React from 'react';
import { BsLinkedin } from "react-icons/bs";

import placeholder from '../../assets/placeholder.png'
import img1 from '../../assets/ABOUT US/img1.png';
import img2 from '../../assets/ABOUT US/img2.png';
import img3 from '../../assets/ABOUT US/img3.png';
import img4 from '../../assets/ABOUT US/img4.png';
import img5 from '../../assets/FEEDING BELLIES/img4.png';
import img6 from '../../assets/JOY OF GIVING/img4.png';
import "./about.css";

const About = () => {
  return (
    <div className='about-container'>
     
        <div className="about-content">
            <h1 id='Unit_Prabhat'> About Unit Prabhat:</h1>
            <p>Unit Prabhat is one of the units among 25 units under the aegis of youth affairs and division of student welfare wing is a one of the active and well-known unit. Unit Prabhat mainly focuses on the growth of society and for that we are working on into many projects like Nari, Plantation drive, Gyandeep, Feeding bellies, Joy of giving and some more. We also do events like Run for Equality, Rivals on the pitch, Smash it! and more. Each event promotes a social cause, so we are working for the betterment of the community.</p>

			<h1 id='motto'>“NOT ME, NOT YOU, BUT WE”</h1>
        </div>
        <div className="team-members-container">
        <h1 className="team-members-title">Our Pillars</h1>
        <div className="team-member-image-container">
        <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            Lakshan Raghav J R{"   "}
              <a href="https://www.linkedin.com/in/lakshan-raghav-jr/">
                <BsLinkedin />
              </a>
            </h3>
            <p>Leader </p>
          </div>         
           <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            Harshavardhan{" "}
              <a href="https://www.linkedin.com/in/harshavardhanchava/">
                <BsLinkedin />
              </a>
            </h3>
            <p>Executive</p>
          </div>
         
          <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            Vishva V A{" "}
              <a href="https://www.linkedin.com/in/vishva-v-a-0734a928a/">
                <BsLinkedin />
              </a>
            </h3>
            <p>Executive</p>
          </div>
          <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            Sibi Raj{" "}
              <a href="https://www.linkedin.com/in/sibirajg/">
                <BsLinkedin />
              </a>
            </h3>
            <p>HR & Data management head</p>
          </div>
        </div>
        </div>
        <h1 id="team-members-title1">Team Leads</h1>
        <div className="vertical-line"></div>
        <div className="team-member-image-container">
        <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            Vikirthan T{"   "}
              <a href="https://www.linkedin.com/in/vikirthan/">
                <BsLinkedin />
              </a>
            </h3>
            <p>Technical Team </p>
          </div>         
           <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            CharvithaVijay R{" "}
              <a href="https://www.linkedin.com/in/charvithavijay-remalli-3b9808266/">
                <BsLinkedin />
              </a>
            </h3>
            <p> Regular Activities Management Team </p>
          </div>
         
          <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            Holy Dharshni S{" "}
              <a href="https://www.linkedin.com/in/holydharshni">
                <BsLinkedin />
              </a>
            </h3>
            <p>Content Writing Team</p>
          </div>
          <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            Aswath I K{" "}
              <a href="https://www.linkedin.com/in/aswath-ilango-072573152/">
                <BsLinkedin />
              </a>
            </h3>
            <p> Media Team</p>
          </div>
          <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            Sevitha Devineni {" "}
              <a href="https://www.linkedin.com/in/sevitha-devineni-855450289/">
                <BsLinkedin />
              </a>
            </h3>
            <p> Fine Arts Team</p>
          </div>
        </div>
        <h1 id="team-members-title2">Group Leads</h1>
        <div className="vertical-line"></div>
        <div className="team-member-image-container">
        <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            Sai Niranjan A{"   "}
              <a href="https://www.linkedin.com/in/sai-niranjan-496a2a289/">
                <BsLinkedin />
              </a>
            </h3>
            <p>Group pratham </p>
          </div>         
           <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            Nithesh Kambhampati{" "}
              <a href="https://www.linkedin.com/in/nithesh03">
                <BsLinkedin />
              </a>
            </h3>
            <p> Group Thalir </p>
          </div>
         
          <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            Naina kakati {" "}
              <a href="https://in.linkedin.com/in/naina-kakati-7782b6260">
                <BsLinkedin />
              </a>
            </h3>
            <p>Group Ektha</p>
          </div>
          <div className="tm-image-container">
            <img src={placeholder} alt="" className="team-member-image" />
            <h3>
            Mariraja S{" "}
              <a href="https://www.linkedin.com/in/mariraja/">
                <BsLinkedin />
              </a>
            </h3>
            <p>Group jeevan</p>
          </div>
          
        </div>
        <div className="about-gallery-container">
            <h1 >~ Gallery</h1>
            <div className="about-gallery">
              <img src={img1}alt="" />
              <img src={img2}alt="" />
              <img src={img3}alt="" />
              <img src={img4}alt="" />
              <img src={img5}alt="" />
              <img src={img6}alt="" />
            </div>
        </div>
    </div>
  )
}

export default About;