import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaHome, FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaHistory } from 'react-icons/fa';

const Section = styled.section`
  padding: 40px 0;
  background: ${props => props.background || '#fff'};
  position: relative;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    color: #00A5EC;
  }
`;

const ScrollerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  cursor: pointer;
  z-index: 2;
  transition: all 0.2s;

  &:hover {
    background: #00A5EC;
    color: white;
    border-color: #00A5EC;
  }

  &.left { left: -20px; }
  &.right { right: -20px; }

  @media (max-width: 768px) {
    display: none; /* Hide scroll buttons on mobile, rely on touch scroll */
  }
`;

const ScrollTrack = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 5px;
  width: 100%;
  
  /* Hide scrollbar but keep functionality */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  @media (max-width: 768px) {
    gap: 16px;
    padding-bottom: 20px; /* Space for touch scroll */
  }
`;

const Card = styled.div`
  min-width: 300px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  background: white;
  transition: all 0.2s;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }
`;

const ActiveHiringBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #333;
  border: 1px solid #ddd;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 12px;
  
  svg {
    color: #00A5EC;
  }
`;

const JobTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CompanyName = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 16px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
  
  svg {
    width: 14px;
    color: #888;
  }
`;

const TagsRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  background: #f8f8f8;
  color: #666;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
`;

const ViewDetailsBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: #00A5EC;
  font-weight: 500;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`;

const HorizontalScroller = ({ title, items, id }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 320;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Section id={id}>
            <Container>
                <SectionTitle>{title}</SectionTitle>
                <ScrollerContainer>
                    <ScrollButton className="left" onClick={() => scroll('left')}><FaChevronLeft /></ScrollButton>

                    <ScrollTrack ref={scrollRef}>
                        {items.map((item, index) => (
                            <Card key={index}>
                                <ActiveHiringBadge>
                                    <FaHistory /> Actively hiring
                                </ActiveHiringBadge>

                                <JobTitle>{item.position}</JobTitle>
                                <CompanyName>{item.company}</CompanyName>

                                <InfoRow>
                                    {item.location === 'Work From Home' ? <FaHome /> : <FaMapMarkerAlt />}
                                    {item.location}
                                </InfoRow>

                                <InfoRow>
                                    <FaMoneyBillWave /> {item.salary}
                                </InfoRow>

                                <InfoRow>
                                    <FaClock /> {item.duration || 'Start Date: Immediately'}
                                </InfoRow>

                                <TagsRow>
                                    {item.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                                </TagsRow>

                                <ViewDetailsBtn>
                                    View details &gt;
                                </ViewDetailsBtn>
                            </Card>
                        ))}
                    </ScrollTrack>

                    <ScrollButton className="right" onClick={() => scroll('right')}><FaChevronRight /></ScrollButton>
                </ScrollerContainer>
            </Container>
        </Section>
    );
};

export default HorizontalScroller;
