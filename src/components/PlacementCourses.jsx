import React from 'react';
import { FaCheck, FaStar, FaClock, FaRupeeSign, FaBolt, FaArrowRight } from 'react-icons/fa';
import { GoogleLogo, MicrosoftLogo, AmazonLogo } from './CompanyLogos';
import './PlacementCourses.css';

const PlacementCourses = () => {
  const courses = [
    {
      role: 'Full Stack Developer',
      color: '#0284c7', // Sky 600
      gradient: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)', // Vibrant Blue
      title: 'Full Stack Development Course',
      duration: '6 months course with LIVE sessions',
      salary: 'Highest salary offered: ₹18 LPA',
      rating: '4.5',
      partners: [<GoogleLogo />, <AmazonLogo />]
    },
    {
      role: 'Data Scientist',
      color: '#7c3aed', // Violet 600
      gradient: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)', // Periwinkle
      title: 'Data Science Course',
      duration: '8 months course with LIVE sessions',
      salary: 'Highest salary offered: ₹9 LPA',
      rating: '4.5',
      partners: [<MicrosoftLogo />, <GoogleLogo />]
    },
    {
      role: 'HR Manager',
      color: '#db2777', // Pink 600
      gradient: 'linear-gradient(120deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)', // Warm Pink
      title: 'Human Resource Management Course',
      duration: '3 months course with LIVE sessions',
      salary: 'Highest salary offered: ₹11.5 LPA',
      rating: '4.4',
      partners: [<AmazonLogo />, <MicrosoftLogo />]
    },
    {
      role: 'Digital Marketer',
      color: '#059669', // Emerald 600
      gradient: 'linear-gradient(120deg, #43e97b 0%, #38f9d7 100%)', // Vibrant Mint
      title: 'Digital Marketing Course',
      duration: '5 months course with LIVE sessions',
      salary: 'Highest salary offered: ₹10 LPA',
      rating: '4.4',
      partners: [<GoogleLogo />, <AmazonLogo />]
    },
  ];

  return (
    <section className="placement-section">
      <div className="placement-container">
        <div className="placement-header-group">
          <h2 className="placement-title">Placement Courses with AI</h2>
          <div className="placement-features-row">
            <div className="placement-feature-pill"><FaCheck /> Exclusive placement opportunities</div>
            <div className="placement-feature-pill"><FaCheck /> Course fee refund if not hired</div>
            <div className="placement-feature-pill"><FaCheck /> Get placed in top brands</div>
          </div>
        </div>

        <div className="placement-cards-grid">
          {courses.map((course, index) => (
            <div className="placement-card" key={index} style={{ '--card-theme': course.color }}>
              <div
                className="placement-card-header"
                style={{ background: course.gradient }}
              >
                <div className="placement-badge"><FaStar /> {course.rating}</div>
                <div className="placement-role-title">Become a</div>
                <h3 className="placement-role-name" style={{ color: course.color }}>{course.role}</h3>
              </div>

              <div className="placement-card-body">
                <div className="placement-tag-line">
                  <FaBolt style={{ color: '#ffd700' }} /> Placement Course with AI
                </div>

                <h4 className="placement-course-name">{course.title}</h4>

                <ul className="placement-info-list">
                  <li className="placement-info-item">
                    <div className="placement-icon-circle"><FaClock /></div>
                    {course.duration}
                  </li>
                  <li className="placement-info-item">
                    <div className="placement-icon-circle"><FaRupeeSign /></div>
                    {course.salary}
                  </li>
                </ul>

                <div className="placement-partner-section">
                  <p className="placement-partner-text">Learn from industry experts of</p>
                  <div className="placement-partner-logos">
                    {course.partners.map((Icon, i) => (
                      <span key={i} className="partner-logo">{Icon}</span>
                    ))}
                    <span className="partner-more">& more</span>
                  </div>
                </div>

                <div className="placement-know-more">
                  <span>Know more</span>
                  <FaArrowRight className="know-more-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementCourses;
