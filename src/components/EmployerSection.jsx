import styled from 'styled-components';
import { FaUsers, FaRocket, FaFilter } from 'react-icons/fa';
import Button from './Button';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xxxl};
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: pulse 4s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Badge = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Stats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  flex-wrap: wrap;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.white};
`;

const StatText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
`;

const EmployerSection = () => {
    return (
        <Section id="employer">
            <Container>
                <Content>
                    <Badge>🎯 For Employers</Badge>

                    <Title>Looking to hire freshers and interns?</Title>

                    <Description>
                        Access India's largest talent pool of 3.2 crore+ candidates with AI-powered tools
                        and smart filters to hire faster.
                    </Description>

                    <Stats>
                        <Stat>
                            <StatIcon><FaUsers /></StatIcon>
                            <StatText>3.2 Cr+ Candidates</StatText>
                        </Stat>
                        <Stat>
                            <StatIcon><FaRocket /></StatIcon>
                            <StatText>Instant Shortlisting</StatText>
                        </Stat>
                        <Stat>
                            <StatIcon><FaFilter /></StatIcon>
                            <StatText>Smart Filters</StatText>
                        </Stat>
                    </Stats>

                    <Button variant="white" size="large">
                        Post now for free
                    </Button>
                </Content>
            </Container>
        </Section>
    );
};

export default EmployerSection;
