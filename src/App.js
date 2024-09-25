// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Exams from './components/Exams';
import ExamTypes from './components/ExamTypes';
import SrichaitanyaReportCards from './components/SrichaitanyaReportCards';
import StudentList from './components/StudentList'
import AddExam from './components/ExamInstance'
import StudentsList from './components/StudentsList'
import DualListBox from './components/DualListBox'
import ExamList from './components/ExamList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginSuccess = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <Router>
        <div style={{ display: 'flex', height: '100vh' }}>
          {isLoggedIn && <Sidebar />} {/* Render sidebar only if logged in */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
            <Routes>
              <Route path="/login" element={<LoginForm onLoginSuccess={this.handleLoginSuccess} />} />
              <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
              <Route path="/add-exam" element={isLoggedIn ? <AddExam /> : <Navigate to="/login" />} />
              <Route path="/students-list" element={isLoggedIn ? <StudentsList /> : <Navigate to="/login" />} />
              <Route path="/exams" element={isLoggedIn ? <ExamList /> : <Navigate to="/login" />} />
              <Route path="/duallist-box" element={isLoggedIn ? <DualListBox /> : <Navigate to="/login" />} />
              <Route path="/exam-types" element={isLoggedIn ? <ExamTypes /> : <Navigate to="/login" />} />
              <Route path="/report-cards" element={isLoggedIn ? <SrichaitanyaReportCards /> : <Navigate to="/login" />} />
              <Route path="/student-list" element={isLoggedIn ? <StudentList /> : <Navigate to="/login" />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;