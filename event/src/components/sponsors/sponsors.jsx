import React from 'react';
import './sponsors.css'; // Ensure you have the necessary styles
import benefits from '../../assets/benefits.png';
const Sponsors = () => {
  return (
    <div className="sponsors-container">
        <div className="sponsors-header">
            <h1>Benefits for sponsors</h1>
        </div>
        <div className="sponsors-benefits-content">
            <div className="sponsors-benefits-image">
                <img src="" alt="" className='sponsors' />
            </div>
            <div className="sponsors-benefits-content-item">
                <p>Brand Exposure: Logo on promotional materials, event banners, t-shirts, and website</p>
                <p>Corporate Social Responsibility: Position your brand as a supporter of gender equality and community wellness.</p>
                <p>Community Engagement: Direct engagement with the local community and participants</p>
                <p>Brand reach: One of the biggest university is Lovely professional university with diverse culture</p>
            </div>
        </div>
    </div>
  );
}
export default Sponsors;