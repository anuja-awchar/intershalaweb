import styled from 'styled-components';
import { FaRobot, FaChartBar, FaCheckCircle } from 'react-icons/fa';
import Button from './Button';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.lightGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

const Content = styled.div`
  animation: slideInLeft 0.8s ease;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  line-height: 1.6;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  flex-shrink: 0;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text};
`;

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.5;
`;

const ImagePlaceholder = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 100px;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  animation: slideInRight 0.8s ease, float 3s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 300px;
    font-size: 80px;
  }
`;

const ResumeBuilder = () => {
    const features = [
        {
            icon: <FaRobot />,
            title: 'AI-powered resume builder',
            description: 'Create professional resumes with intelligent AI suggestions tailored to your industry',
        },
        {
            icon: <FaChartBar />,
            title: 'Intelligent feedback engine',
            description: 'Get real-time feedback on how to improve your resume and make it stand out',
        },
        {
            icon: <FaCheckCircle />,
            title: 'Optimized for freshers',
            description: 'Templates and formats specifically designed for entry-level job seekers',
        },
    ];

    return (
        <Section>
            <Container>
                <Content>
                    <Title>No resume? No problem.</Title>
                    <Subtitle>
                        Let us help you create one or improve the one you've got.
                    </Subtitle>

                    <FeaturesList>
                        {features.map((feature, index) => (
                            <Feature key={index}>
                                <FeatureIcon>{feature.icon}</FeatureIcon>
                                <FeatureContent>
                                    <FeatureTitle>{feature.title}</FeatureTitle>
                                    <FeatureDescription>{feature.description}</FeatureDescription>
                                </FeatureContent>
                            </Feature>
                        ))}
                    </FeaturesList>

                    <Button variant="primary" size="large">
                        Build my resume
                    </Button>
                </Content>

                <ImagePlaceholder>
                    📝
                </ImagePlaceholder>
            </Container>
        </Section>
    );
};

export default ResumeBuilder;
