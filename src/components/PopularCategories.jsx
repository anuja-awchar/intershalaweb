import styled from 'styled-components';
import { FaGraduationCap } from 'react-icons/fa';

const Section = styled.section`
  padding: 60px 0;
  background: white;
  margin-top: 40px;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #666;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
`;

const CourseCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
  }
`;

const CardImage = styled.div`
  height: 180px;
  background: ${props => props.gradient || 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CardContent = styled.div`
  padding: 24px;
`;

const Duration = styled.div`
  font-size: 13px;
  color: #666;
  background: #f8f8f8;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 12px;
  font-weight: 500;
`;

const CourseTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.4;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
`;

const Rating = styled.span`
  color: #FFB400;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const KnowMoreBtn = styled.span`
  color: #00A5EC;
  font-weight: 600;
  font-size: 14px;
`;

const PopularCategories = () => {
  const courses = [
    {
      title: 'Full Stack Web Development',
      duration: '8 weeks',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Data Science',
      duration: '10 weeks',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Digital Marketing',
      duration: '6 weeks',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Business Communication',
      duration: '4 weeks',
      rating: '4.5',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'UI/UX Design',
      duration: '6 weeks',
      rating: '4.5',
      image: 'https://reliasoftware.com/blog/ux-vs-ui-design-difference'
    },
    {
      title: 'Human Resource Management',
      duration: '4 weeks',
      rating: '4.4',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Stock Market Trading',
      duration: '6 weeks',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Graphic Design',
      duration: '6 weeks',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
  ];

  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionTitle>
            <FaGraduationCap color="#00A5EC" /> Certification Courses
          </SectionTitle>
          <SectionSubtitle>Fast-track your career with industry-recognized certifications</SectionSubtitle>
        </SectionHeader>

        <FeatureGrid>
          {courses.map((course, i) => (
            <CourseCard key={i}>
              <CardImage style={{ backgroundImage: `url(${course.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* Image is background */}
              </CardImage>
              <CardContent>
                <Duration>⏱ {course.duration}</Duration>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseMeta>
                  <Rating>★ {course.rating}</Rating>
                  <KnowMoreBtn>Know more &gt;</KnowMoreBtn>
                </CourseMeta>
              </CardContent>
            </CourseCard>
          ))}
        </FeatureGrid>
      </Container>
    </Section>
  );
};


export default PopularCategories;
