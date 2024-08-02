import React from 'react'
import './run_for_equality.css'
import img1 from '../../assets/RUN FOR EQUALITY/img1.jpg';
import img2 from '../../assets/RUN FOR EQUALITY/img2.jpg';
import img3 from '../../assets/RUN FOR EQUALITY/img3.jpg';
import img4 from '../../assets/RUN FOR EQUALITY/img4.jpg';
import img5 from '../../assets/RUN FOR EQUALITY/img5.jpg';
import img6 from '../../assets/RUN FOR EQUALITY/img6.jpg';

const Run = () => {
  return (
    <div className='run-for-equality-container'>
     
        <div className="run-for-equality-content">
            <h1 id='Run-for-equality'> About Run-for-Equality:</h1>
            <p>"Run for Equality" is a marathon dedicated to promoting gender equality and raising awareness about the importance of equal opportunities for all genders. Our first event in 2023 was a tremendous success, attracting over 600+ participants, including enthusiastic staff members who joined the cause. This event aims to bring together individuals from all walks of life to support the movement towards a more inclusive and equitable society. By participating in "Run for Equality," we not only emphasize the need for gender equality but also demonstrate our commitment to creating a world where everyone has the same opportunities and rights, regardless of gender. Join us in this movement and make a difference by supporting gender equality through action and solidarity.</p>
          </div>
          <div className="run-for-equality-gallery-container">
            <h1 >~ Gallery</h1>
            <div className="run-for-equality-gallery">
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

export default Run