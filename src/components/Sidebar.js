import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaClipboardList, FaFileAlt, FaPlus } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: pink;
  padding: 20px;
`;

const Heading = styled.h1`
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
  color: black;
  pointer: cursour;
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  color: ${props => props.color || '#000'};
`;

const DropdownContainer = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  padding-left: 20px;
`;

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const StudentIcon = ({ size = 24, color = '#000' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-5.52-4.48-10-10-10zm0 16c-4.41 0-8-3.59-8-8 0-1.65.5-3.18 1.36-4.44l5.27 5.27a3 3 0 0 0 4.24 0l5.27-5.27C19.5 6.82 20 8.35 20 10c0 4.41-3.59 8-8 8zm-1-11h2v4h-2zm0 6h2v2h-2z"/></svg>;
  return (
    <SidebarContainer>
      <Link to="/home"><Heading>Sri Chaitanya School</Heading></Link>
      <NavList>
        <NavItem>
          <Link to="/home">
            <IconWrapper color="#007bff"><FaHome /></IconWrapper>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to = "/exams">
          <IconWrapper color="#28a745"><FaClipboardList /></IconWrapper>
          Exams
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/exam-types">
            <IconWrapper color="#ffc107"><FaFileAlt /></IconWrapper>
            Exam Types
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/report-cards">
            <IconWrapper color="#dc3545"><FaFileAlt /></IconWrapper>
            Report Cards
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/students-list">
            <IconWrapper color="#17a2b8"><FaPlus /></IconWrapper>
            Student List
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/duallist-box">
            <IconWrapper color="#17a2b8"><FaPlus /></IconWrapper>
            Dual List Box
          </Link>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;
