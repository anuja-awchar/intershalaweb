import styled from 'styled-components';
import { FaBriefcase, FaGraduationCap, FaRocket } from 'react-icons/fa';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ color }) => color};
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  background: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.normal};
  
  ${Card}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
`;

const SearchSection = () => {
  const cards = [
    {
      // icon: <FaBriefcase />,
      image: "https://cdn-icons-png.flaticon.com/512/3079/3079234.png", // Job Search Illustration
      title: 'Fresher Jobs',
      description: 'Find the best entry-level job opportunities across India',
      color: '#00A5EC',
    },
    {
      // icon: <FaGraduationCap />,
      image: "https://cdn-icons-png.flaticon.com/512/2997/2997295.png", // Internship Illustration
      title: 'Internships',
      description: 'Gain practical experience with top companies and startups',
      color: '#FF6B35',
    },
    {
      // icon: <FaRocket />,
      image: "https://cdn-icons-png.flaticon.com/512/4207/4207253.png", // Certification Illustration
      title: 'Placement Courses with AI',
      description: 'Get job-ready with AI-powered courses and guaranteed placements',
      color: '#4CAF50',
    },
  ];

  return (
    <Section id="search-section">
      <Container>
        <SectionTitle>What are you looking for today?</SectionTitle>

        <CardsGrid>
          {cards.map((card, index) => (
            <Card key={index} color={card.color}>
              <IconWrapper color={card.color} style={{ background: 'transparent', boxShadow: 'none' }}>
                <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </IconWrapper>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </CardsGrid>
      </Container>
    </Section>
  );
};

export default SearchSection;
