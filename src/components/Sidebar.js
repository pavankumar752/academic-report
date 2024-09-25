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
        <NavItem onClick={toggleDropdown}>
          <IconWrapper color="#28a745"><FaClipboardList /></IconWrapper>
          Exams
        </NavItem>
        <DropdownContainer isOpen={isDropdownOpen}>
          <NavItem>
            <Link to="/exams">
            <IconWrapper color="#28a745"><FaClipboardList /></IconWrapper>
              Exams
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/add-exam">
              <IconWrapper color="#28a745"><FaPlus /></IconWrapper>
              Add Exams
            </Link>
          </NavItem>
        </DropdownContainer>
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
          <Link to="/student-list">
            <IconWrapper color="#17a2b8"><FaPlus /></IconWrapper>
            Student List
          </Link>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;
