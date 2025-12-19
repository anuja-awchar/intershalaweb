import React from 'react';
import { FaCheck, FaStar, FaClock, FaRupeeSign, FaBolt, FaArrowRight } from 'react-icons/fa';
import { GoogleLogo, MicrosoftLogo, AmazonLogo } from './CompanyLogos';
import './PlacementCourses.css';

const PlacementCourses = () => {
  const courses = [
    {
      role: 'Full Stack Developer',
      color: '#1F78E9', // Strong Blue
      gradient: 'linear-gradient(135deg, #E6F0FC 0%, #FFFFFF 100%)',
      title: 'Full Stack Development Course',
      duration: '6 months course with LIVE sessions',
      salary: 'Highest salary offered: ₹18 LPA',
      rating: '4.5',
      partners: [<GoogleLogo />, <AmazonLogo />]
    },
    {
      role: 'Data Scientist',
      color: '#1F78E9', // Blue
      gradient: 'linear-gradient(135deg, #E6F0FC 0%, #FFFFFF 100%)',
      title: 'Data Science Course',
      duration: '8 months course with LIVE sessions',
      salary: 'Highest salary offered: ₹9 LPA',
      rating: '4.5',
      partners: [<MicrosoftLogo />, <GoogleLogo />]
    },
    {
      role: 'HR Manager',
      color: '#E02D7A', // Pink/Magenta
      gradient: 'linear-gradient(135deg, #FDEDF3 0%, #FFFFFF 100%)',
      title: 'Human Resource Management Course',
      duration: '3 months course with LIVE sessions',
      salary: 'Highest salary offered: ₹11.5 LPA',
      rating: '4.4',
      partners: [<AmazonLogo />, <MicrosoftLogo />]
    },
    {
      role: 'Digital Marketer',
      color: '#1F78E9', // Blue
      gradient: 'linear-gradient(135deg, #E6F0FC 0%, #FFFFFF 100%)',
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
            <div className="placement-card" key={index}>
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
