import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: ${props => props.bgColor || '#fff'};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Divv = styled.div`
   flex-grow: 1;
  background-image: url('https://assets.ccbp.in/frontend/react-js/ipl-dashboard-sm-bg.png');
  height:100vh
`;

const CardTitle = styled.h3`
  margin-top: 0;
`;

class Home extends React.Component {
  render() {
    return (
      <Divv>
      <MainContainer>
        <Link to="/exams">
        <Card bgColor="#f8d7da">
          <CardTitle>Exams</CardTitle>
          <p>List of all exams</p>
        </Card>
        </Link>
        <Link to="/exam-types">
        <Card bgColor="#d4edda">
          <CardTitle>Exam Types</CardTitle>
          <p>List of exam types</p>
        </Card>
        </Link>
        <Link to="/report-cards">
        <Card bgColor="#e2e3e5">
          <CardTitle>Report Cards</CardTitle>
          <p>List of report cards</p>
        </Card>
        </Link>
        <Link to="/student-list">
        <Card bgColor="#e2e3e5">
          <CardTitle>Student List</CardTitle>
          <p>List of students</p>
        </Card>
        </Link>
        <Link to="/students-list">
        <Card bgColor="#e2e3e5">
          <CardTitle>Students List</CardTitle>
          <p>List of students</p>
        </Card>
        </Link>
      </MainContainer>
      </Divv>
    );
  }
}

export default Home;
