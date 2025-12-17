import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes, FaSearch, FaCaretDown } from 'react-icons/fa';
import Button from './Button';
import LoginModal from './LoginModal';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  z-index: 1000;
  height: 72px;
  display: flex;
  align-items: center;

  .desktop-search {
    @media (max-width: 1024px) {
      display: none !important;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

// Internshala Logo SVG placeholder styled closer to real one
const Logo = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #333;
  display: flex;
  align-items: center;
  cursor: pointer;
  letter-spacing: -0.5px;
  
  img {
    height: 35px; // Approximate height of real logo
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 1024px) {
    display: none; /* Hidden by default on mobile, can be toggled via MobileMenu logic if extended */
  }
`;

const NavLinkContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  
  &:hover > div { // Show Mega Menu
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 5px;
  height: 100%;
  
  &:hover {
    color: #00A5EC;
  }

  svg {
    font-size: 10px;
    margin-top: 2px;
    color: #888;
  }
`;

// Mega Menu
const MegaMenu = styled.div`
  position: absolute;
  top: 72px;
  left: -20px;
  background: white;
  min-width: 500px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-radius: 0 0 8px 8px;
  padding: 24px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.2s ease;
  z-index: 999;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  border-top: 1px solid #f0f0f0;
`;

const MenuColumn = styled.div`
  h4 {
    font-size: 14px;
    color: #333;
    margin-bottom: 12px;
    font-weight: 600;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li a {
    font-size: 14px;
    color: #666;
    &:hover {
      color: #00A5EC;
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LoginButton = styled.button`
  background: transparent;
  color: #00A5EC;
  font-weight: 600;
  font-size: 15px;
  border: 1px solid #00A5EC;
  padding: 8px 24px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: #e5f6fd;
  }
`;

const RegisterButton = styled.button`
  background: #00A5EC;
  color: white;
  font-weight: 600;
  font-size: 15px;
  border: 1px solid #00A5EC;
  padding: 8px 24px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: #008cc9;
    box-shadow: 0 4px 8px rgba(0,165,236,0.3);
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  font-size: 24px;
  color: #333;
  background: none;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

// ... styled components ...

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1001;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s;
`;

const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  max-width: 80vw;
  background: white;
  z-index: 1002;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
`;

const MobileLink = styled.a`
  display: block;
  padding: 12px 0;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid #f9f9f9;
  
  &:hover {
    color: #00A5EC;
  }
`;

const MobileAuthSection = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 20px;
`;

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('login');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openLogin = () => {
    setModalType('login');
    setModalOpen(true);
    setMobileMenuOpen(false); // Close sidebar on action
  };

  const openRegister = () => {
    setModalType('register');
    setModalOpen(true);
    setMobileMenuOpen(false);
  };

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <HeaderWrapper>
        <Container>
          <LogoSection>
            <MobileMenuBtn onClick={() => setMobileMenuOpen(true)}><FaBars /></MobileMenuBtn>
            <Logo>
              <svg width="120" height="35" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="30" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="800" fill="#333">Internshala</text>
                <circle cx="145" cy="10" r="4" fill="#00A5EC" />
              </svg>
            </Logo>
          </LogoSection>

          <Nav>
            <NavLinkContainer>
              <NavLink>Internships <FaCaretDown /></NavLink>
              <MegaMenu>
                <MenuColumn>
                  <h4>Location</h4>
                  <ul>
                    <li><a href="#">Work from Home</a></li>
                    <li><a href="#">Internship in Bangalore</a></li>
                    <li><a href="#">Internship in Delhi</a></li>
                    <li><a href="#">Internship in Mumbai</a></li>
                  </ul>
                </MenuColumn>
                <MenuColumn>
                  <h4>Profile</h4>
                  <ul>
                    <li><a href="#">Computer Science</a></li>
                    <li><a href="#">Marketing</a></li>
                  </ul>
                </MenuColumn>
              </MegaMenu>
            </NavLinkContainer>

            <NavLinkContainer>
              <NavLink>Jobs <FaCaretDown /></NavLink>
              <MegaMenu>
                <MenuColumn>
                  <h4>Location</h4>
                  <ul>
                    <li><a href="#">Work from Home</a></li>
                    <li><a href="#">Jobs in Bangalore</a></li>
                  </ul>
                </MenuColumn>
              </MegaMenu>
            </NavLinkContainer>

            <NavLinkContainer><NavLink href="#">Courses</NavLink></NavLinkContainer>
          </Nav>

          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div className="desktop-search" style={{ display: 'flex', alignItems: 'center', background: '#f8f8f8', padding: '8px 12px', borderRadius: '4px', border: '1px solid #eee', width: '200px' }}>
              <FaSearch color="#999" />
              <input type="text" placeholder="Search..." style={{ border: 'none', background: 'transparent', marginLeft: '10px', outline: 'none', fontSize: '14px', width: '100%' }} />
            </div>

            <AuthButtons>
              <LoginButton onClick={openLogin}>Login</LoginButton>
              <RegisterButton onClick={openRegister}>Register</RegisterButton>
            </AuthButtons>
          </div>

        </Container>
      </HeaderWrapper>

      {/* Mobile Sidebar */}
      <Overlay isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} />
      <MobileSidebar isOpen={mobileMenuOpen}>
        <SidebarHeader>
          <h3>Menu</h3>
          <CloseBtn onClick={() => setMobileMenuOpen(false)}><FaTimes /></CloseBtn>
        </SidebarHeader>

        <MobileLink href="#">Internships</MobileLink>
        <MobileLink href="#">Jobs</MobileLink>
        <MobileLink href="#">Courses</MobileLink>
        <MobileLink href="#">Placement Guarantee</MobileLink>

        <MobileAuthSection>
          <LoginButton onClick={openLogin} style={{ textAlign: 'center', width: '100%' }}>Login</LoginButton>
          <RegisterButton onClick={openRegister} style={{ textAlign: 'center', width: '100%' }}>Register</RegisterButton>
        </MobileAuthSection>
      </MobileSidebar>

      <LoginModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </>
  );
};

export default Header;
