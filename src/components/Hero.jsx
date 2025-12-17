import styled from 'styled-components';
import { FaGoogle, FaEnvelope } from 'react-icons/fa';
import Button from './Button';

// Exact Internshala Hero Gradient approximate
const HeroSection = styled.section`
  background: white;
  padding: 150px 0 100px;
  position: relative;
  overflow: hidden;
  
  /* Background Image with Overlay */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.50; /* Increased opacity for clear visibility */
    z-index: 1;
  }

  /* Keep the wave pattern on top if needed or remove depending on preference. Let's keep it subtle mixing */
  background-image: 
    radial-gradient(at 0% 0%, rgba(0, 165, 236, 0.05) 0px, transparent 40%),
    radial-gradient(at 100% 0%, rgba(255, 107, 53, 0.05) 0px, transparent 40%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const MainTitle = styled.h1`
  font-size: 56px;
  font-weight: 800;
  color: #333;
  margin-bottom: 24px;
  line-height: 1.1;
  letter-spacing: -1px;

  span {
    color: #00A5EC;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background: rgba(0, 165, 236, 0.1);
      z-index: -1;
    }
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #555;
  margin-bottom: 40px;
  font-weight: 500;
  max-width: 800px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// Internshala style search bar in hero
const SearchBar = styled.div`
  width: 100%;
  max-width: 700px;
  background: white;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08); // Soft shadow
  display: flex;
  padding: 8px;
  border: 1px solid #eee;
  margin-bottom: 40px;
  transition: all 0.3s;

  &:focus-within {
    box-shadow: 0 8px 30px rgba(0, 165, 236, 0.15);
    border-color: rgba(0, 165, 236, 0.3);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px;
    border-radius: 16px;
    gap: 12px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 16px 24px;
  font-size: 16px;
  background: transparent;
  outline: none;
  color: #333;
  
  &::placeholder {
    color: #888;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    width: 100%;
    text-align: center;
  }
`;

const SearchButton = styled.button`
  background: #00A5EC;
  color: white;
  border: none;
  border-radius: 40px;
  padding: 0 32px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #008cc9;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;

const TrendingTags = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 14px;
  color: #666;
  
  span {
    background: #f8f8f8;
    padding: 6px 14px;
    border-radius: 20px;
    border: 1px solid #eee;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      background: white;
      border-color: #00A5EC;
      color: #00A5EC;
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
  }
`;

const WaveDivider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 60px;
  }

  .shape-fill {
    fill: #FAFBFC; // Matches next section background
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <MainTitle>
          Make your dream career a reality
        </MainTitle>
        <Subtitle>
          Trending on Internshala: 🔥 10,000+ new openings today!
        </Subtitle>

        <SearchBar>
          <SearchInput placeholder="What are you looking for? (e.g. 'work from home', 'marketing')" />
          <SearchButton>Search</SearchButton>
        </SearchBar>

        <TrendingTags>
          <strong>Trending:</strong>
          <span>Work from Home</span>
          <span>Part-time</span>
          <span>MBA</span>
          <span>Engineering</span>
          <span>Media</span>
          <span>Data Science</span>
        </TrendingTags>
      </Container>

      <WaveDivider>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </WaveDivider>
    </HeroSection>
  );
};

export default Hero;
