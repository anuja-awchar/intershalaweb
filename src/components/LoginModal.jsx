import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGoogle } from 'react-icons/fa';
import Button from './Button';

const Overhead = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled(motion.div)`
  background: white;
  width: 100%;
  max-width: 900px;
  height: 550px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    max-width: 90%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  font-size: 20px;
  color: #666;
  z-index: 10;
  
  &:hover {
    color: #333;
  }
`;

const InfoSide = styled.div`
  flex: 1;
  background: #f8f8f8;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const InfoTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 16px;
  font-weight: 700;
`;

const InfoDescription = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.5;
`;

const FormSide = styled.div`
  flex: 1.2; // Slightly wider
  padding: 40px 60px;
  background: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
`;

const Tab = styled.button`
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.active ? '#00A5EC' : '#666'};
  padding-bottom: 12px;
  border-bottom: 2px solid ${props => props.active ? '#00A5EC' : 'transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    color: #00A5EC;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #00A5EC;
  }
`;

const ForgotPassword = styled.a`
  font-size: 14px;
  color: #00A5EC;
  text-align: right;
  margin-top: -10px;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #999;
  font-size: 12px;
  
  &:before, &:after {
    content: '';
    flex: 1;
    height: 1px;
    background: #eee;
  }
  
  span {
    padding: 0 10px;
  }
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: all 0.2s;
  
  &:hover {
    background: #f8f8f8;
    border-color: #ccc;
  }
`;

const ToggleText = styled.p`
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  color: #333;
  
  span {
    color: #00A5EC;
    cursor: pointer;
    font-weight: 600;
    margin-left: 5px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginModal = ({ isOpen, onClose, type = 'login' }) => {
    const [activeTab, setActiveTab] = useState(type === 'register' ? 'student' : 'login');

    // Reset tab when modal opens with specific type
    React.useEffect(() => {
        setActiveTab(type === 'register' ? 'student' : 'login');
    }, [type, isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <Overhead
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <ModalContainer
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <CloseButton onClick={onClose}><FaTimes /></CloseButton>

                        <InfoSide>
                            {activeTab === 'login' ? (
                                <>
                                    <InfoTitle>Login</InfoTitle>
                                    <InfoDescription>
                                        Get access to the best internships and jobs.
                                    </InfoDescription>
                                </>
                            ) : (
                                <>
                                    <InfoTitle>Sign Up</InfoTitle>
                                    <InfoDescription>
                                        Join 10 million+ students and get your dream career.
                                    </InfoDescription>
                                </>
                            )}
                            {/* Illustration placeholder */}
                            <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: '100px', opacity: 0.5 }}>
                                🚀
                            </div>
                        </InfoSide>

                        <FormSide>
                            <Tabs>
                                <Tab
                                    active={activeTab === 'student' || activeTab === 'register'}
                                    onClick={() => setActiveTab('student')}
                                >
                                    Student
                                </Tab>
                                <Tab
                                    active={activeTab === 'employer'}
                                    onClick={() => setActiveTab('employer')}
                                >
                                    Employer
                                </Tab>
                            </Tabs>

                            {activeTab === 'login' ? (
                                <Form>
                                    <GoogleButton type="button">
                                        <FaGoogle color="#DB4437" /> Login with Google
                                    </GoogleButton>

                                    <Divider><span>OR</span></Divider>

                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input type="email" placeholder="john@example.com" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input type="password" placeholder="Must be at least 6 characters" />
                                    </FormGroup>

                                    <ForgotPassword>Forgot Password?</ForgotPassword>

                                    <Button variant="primary" size="large" style={{ width: '100%' }}>Login</Button>

                                    <ToggleText>
                                        New to Internshala? <span onClick={() => setActiveTab('student')}>Register</span>
                                    </ToggleText>
                                </Form>
                            ) : (
                                <Form>
                                    <GoogleButton type="button">
                                        <FaGoogle color="#DB4437" /> Sign up with Google
                                    </GoogleButton>

                                    <Divider><span>OR</span></Divider>

                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <FormGroup style={{ flex: 1 }}>
                                            <Label>First Name</Label>
                                            <Input type="text" placeholder="John" />
                                        </FormGroup>
                                        <FormGroup style={{ flex: 1 }}>
                                            <Label>Last Name</Label>
                                            <Input type="text" placeholder="Doe" />
                                        </FormGroup>
                                    </div>

                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input type="email" placeholder="john@example.com" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input type="password" placeholder="Must be at least 6 characters" />
                                    </FormGroup>

                                    <Button variant="primary" size="large" style={{ width: '100%' }}>Sign Up</Button>

                                    <ToggleText>
                                        Already registered? <span onClick={() => setActiveTab('login')}>Login</span>
                                    </ToggleText>
                                </Form>
                            )}
                        </FormSide>
                    </ModalContainer>
                </Overhead>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;
