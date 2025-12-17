import React from 'react';
import styled from 'styled-components';
import { FaCheck, FaStar, FaGoogle, FaMicrosoft, FaAmazon } from 'react-icons/fa';

const Section = styled.section`
  padding: 60px 0;
  background-color: #f8fcdb;
  background: linear-gradient(180deg, #FDFEFF 0%, #F5FAFF 100%);
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeaderGroup = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1f1f1f;
  margin-bottom: 20px;
`;

const FeaturesRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const FeaturePill = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #d0e7f7;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 14px;
  color: #333;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  
  svg {
    color: #4CAF50;
    font-size: 14px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.div`
  background: white;
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smooth robust transition */
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px); /* Higher lift */
    box-shadow: 0 20px 40px rgba(0,0,0,0.12); /* Deeper shadow */
    border-color: transparent;
  }
`;

const CardHeader = styled.div`
  background: ${props => props.gradient || 'linear-gradient(135deg, #efeaff 0%, #ffffff 100%)'};
  padding: 24px;
  position: relative;
  height: 120px;
`;

const Badge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: #ff8c00;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RoleTitle = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
`;

const RoleName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.color || '#333'};
`;

const CardBody = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TagLine = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #8a6e00;
  background: #fffbf0;
  border: 1px solid #fceeb5;
  padding: 4px 8px;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 16px;
  font-weight: 500;
`;

const CourseName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: #555;
  margin-bottom: 8px;

  svg {
    color: #888;
    margin-top: 3px;
  }
`;

const PartnerSection = styled.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 16px;
`;

const PartnerText = styled.p`
  font-size: 12px;
  color: #888;
  margin-bottom: 8px;
`;

const PartnerLogos = styled.div`
  display: flex;
  gap: 12px;
  color: #666;
  font-size: 20px;
`;

const KnowMoreLink = styled.div`
  margin-top: 16px;
  color: #00A5EC;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

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
      partners: [<FaGoogle />, <FaAmazon />]
    },
    {
      role: 'Data Scientist',
      color: '#1F78E9', // Blue
      gradient: 'linear-gradient(135deg, #E6F0FC 0%, #FFFFFF 100%)',
      title: 'Data Science Course',
      duration: '8 months course with LIVE sessions',
      salary: 'Highest salary offered: ₹9 LPA',
      rating: '4.5',
      partners: [<FaMicrosoft />, <FaGoogle />]
    },
    {
      role: 'HR Manager',
      color: '#E02D7A', // Pink/Magenta
      gradient: 'linear-gradient(135deg, #FDEDF3 0%, #FFFFFF 100%)',
      title: 'Human Resource Management Course',
      duration: '3 months course with LIVE sessions',
      salary: 'Highest salary offered: ₹11.5 LPA',
      rating: '4.4',
      partners: [<FaAmazon />, <FaMicrosoft />]
    },
    {
      role: 'Digital Marketer',
      color: '#1F78E9', // Blue
      gradient: 'linear-gradient(135deg, #E6F0FC 0%, #FFFFFF 100%)',
      title: 'Digital Marketing Course',
      duration: '5 months course with LIVE sessions',
      salary: 'Highest salary offered: ₹10 LPA',
      rating: '4.4',
      partners: [<FaGoogle />, <FaAmazon />]
    },
  ];

  return (
    <Section>
      <Container>
        <HeaderGroup>
          <Title>Placement Courses with AI</Title>
          <FeaturesRow>
            <FeaturePill><FaCheck /> Exclusive placement opportunities</FeaturePill>
            <FeaturePill><FaCheck /> Course fee refund if not hired</FeaturePill>
            <FeaturePill><FaCheck /> Get placed in top brands</FeaturePill>
          </FeaturesRow>
        </HeaderGroup>

        <CardsGrid>
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader gradient={course.gradient}>
                <Badge><FaStar /> {course.rating}</Badge>
                <RoleTitle>Become a</RoleTitle>
                <RoleName color={course.color}>{course.role}</RoleName>
              </CardHeader>

              <CardBody>
                <TagLine>
                  <span style={{ color: '#ffd700' }}>✦</span> Placement Course with AI
                </TagLine>

                <CourseName>{course.title}</CourseName>

                <InfoList>
                  <InfoItem>
                    <span>⏱</span> {course.duration}
                  </InfoItem>
                  <InfoItem>
                    <span>📈</span> {course.salary}
                  </InfoItem>
                </InfoList>

                <PartnerSection>
                  <PartnerText>Learn from industry experts of</PartnerText>
                  <PartnerLogos>
                    {course.partners.map((Icon, i) => (
                      <span key={i}>{Icon}</span>
                    ))}
                    <span style={{ fontSize: '12px', alignSelf: 'center' }}>& more</span>
                  </PartnerLogos>
                </PartnerSection>

                <KnowMoreLink>Know more &gt;</KnowMoreLink>
              </CardBody>
            </Card>
          ))}
        </CardsGrid>
      </Container>
    </Section>
  );
};

export default PlacementCourses;
