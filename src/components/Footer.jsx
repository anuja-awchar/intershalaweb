import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.text};
  color: rgba(255, 255, 255, 0.8);
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FooterLink = styled.li`
  a {
    color: rgba(255, 255, 255, 0.7);
    font-size: ${({ theme }) => theme.fontSizes.sm};
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      padding-left: 5px;
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: ${({ theme }) => theme.spacing.xxl} 0;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column-reverse; /* Copyright at bottom on mobile usually better or not? Let's stick to column */
    flex-direction: column;
    text-align: center;
    gap: 24px;
  }
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.6);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <ColumnTitle>Internships by Location</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="#bangalore">Internship in Bangalore</a></FooterLink>
              <FooterLink><a href="#delhi">Internship in Delhi</a></FooterLink>
              <FooterLink><a href="#mumbai">Internship in Mumbai</a></FooterLink>
              <FooterLink><a href="#hyderabad">Internship in Hyderabad</a></FooterLink>
              <FooterLink><a href="#pune">Internship in Pune</a></FooterLink>
              <FooterLink><a href="#chennai">Internship in Chennai</a></FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Internships by Stream</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="#cs">Computer Science</a></FooterLink>
              <FooterLink><a href="#electronics">Electronics</a></FooterLink>
              <FooterLink><a href="#mechanical">Mechanical</a></FooterLink>
              <FooterLink><a href="#marketing">Marketing</a></FooterLink>
              <FooterLink><a href="#finance">Finance</a></FooterLink>
              <FooterLink><a href="#civil">Civil</a></FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Jobs by Location</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="#jobs-bangalore">Jobs in Bangalore</a></FooterLink>
              <FooterLink><a href="#jobs-delhi">Jobs in Delhi</a></FooterLink>
              <FooterLink><a href="#jobs-mumbai">Jobs in Mumbai</a></FooterLink>
              <FooterLink><a href="#jobs-pune">Jobs in Pune</a></FooterLink>
              <FooterLink><a href="#jobs-hyderabad">Jobs in Hyderabad</a></FooterLink>
              <FooterLink><a href="#jobs-noida">Jobs in Noida</a></FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Jobs by Profile</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="#data-entry">Data Entry</a></FooterLink>
              <FooterLink><a href="#content-writing">Content Writing</a></FooterLink>
              <FooterLink><a href="#digital-marketing">Digital Marketing</a></FooterLink>
              <FooterLink><a href="#data-science">Data Science</a></FooterLink>
              <FooterLink><a href="#teaching">Teaching</a></FooterLink>
              <FooterLink><a href="#hr">HR</a></FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Online Courses</ColumnTitle>
            <FooterLinks>
              <FooterLink><a href="#web-dev">Web Development</a></FooterLink>
              <FooterLink><a href="#programming">Programming with Python</a></FooterLink>
              <FooterLink><a href="#digital-marketing">Digital Marketing</a></FooterLink>
              <FooterLink><a href="#data-science">Data Science</a></FooterLink>
              <FooterLink><a href="#excel">Advanced Excel</a></FooterLink>
              <FooterLink><a href="#ui-ux">UI/UX Design</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterGrid>

        <Divider />

        <BottomSection>
          <Copyright>
            © 2024 Internshala. All rights reserved.
          </Copyright>

          <SocialLinks>
            <SocialIcon href="#facebook" aria-label="Facebook">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#twitter" aria-label="Twitter">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#linkedin" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="#instagram" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#youtube" aria-label="YouTube">
              <FaYoutube />
            </SocialIcon>
          </SocialLinks>
        </BottomSection>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
