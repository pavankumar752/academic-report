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

const sidebarItems = [
  {
    path: "/home",
    label: "Home",
    icon: <FaHome color="#007bff" />,
  },
  {
    path: "/home",
    label: "Exams",
    icon: <FaClipboardList color="#28a745" />,
    subItems: [
      { path: "/exams/first-term", label: "First Term" },
      { path: "/exams/second-term", label: "Second Term" },
    ],
  },
  {
    path: "/exam-types",
    label: "Exam Types",
    icon: <FaFileAlt color="#ffc107" />,
  },
  {
    path: "/report-cards",
    label: "Report Cards",
    icon: <FaFileAlt color="#dc3545" />,
  },
  {
    path: "/students-list",
    label: "Student List",
    icon: <FaPlus color="#17a2b8" />,
  },
  {
    path: "/duallist-box",
    label: "Dual List Box",
    icon: <FaPlus color="#17a2b8" />,
  },
  {
    path: "/marks-entry",
    label: "Marks Entry",
    icon: <FaPlus color="#17a2b8" />,
  },
];

const Sidebar = () => {
  const [openSubItem, setOpenSubItem] = useState(null);

  const toggleSubItems = (index) => {
    setOpenSubItem(openSubItem === index ? null : index);
  };

  return (
    <SidebarContainer>
      <Link to="/home"><Heading>Sri Chaitanya School</Heading></Link>
      <NavList>
        {sidebarItems.map((item, index) => (
          <div key={index}>
            <NavItem onClick={() => toggleSubItems(index)}>
              <Link to={item.path}>
                <IconWrapper>{item.icon}</IconWrapper>
                {item.label}
              </Link>
            </NavItem>
            {item.subItems && openSubItem === index && (
              <DropdownContainer isOpen={openSubItem === index}>
                {item.subItems.map((subItem, subIndex) => (
                  <NavItem key={subIndex}>
                    <Link to={subItem.path}>
                      <IconWrapper color="#6c757d">-</IconWrapper>
                      {subItem.label}
                    </Link>
                  </NavItem>
                ))}
              </DropdownContainer>
            )}
          </div>
        ))}
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;