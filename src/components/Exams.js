// src/components/Exams.js
import React from 'react';
import styled from 'styled-components';
import { Button } from './StyledComponents';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const FilterInput = styled.input`
  margin-bottom: 20px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

class Exams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      exams: [
        "SAT - Scholastic Assessment Test",     
        "ACT - American College Testing",
        "GRE - Graduate Record Examination",
        "GMAT - Graduate Management Admission Test",
        "LSAT - Law School Admission Test",
        "MCAT - Medical College Admission Test",
        "TOEFL - Test of English as a Foreign Language",
        "IELTS - International English Language Testing System",
        "CPA - Certified Public Accountant Exam",
        "CFA - Chartered Financial Analyst Exam",
        "PMP - Project Management Professional Exam",
        "CISSP - Certified Information Systems Security Professional",
        "AWS Certified Solutions Architect",
        "CCNA - Cisco Certified Network Associate",
        "Microsoft Certified: Azure Fundamentals",
        "Final Exams",
        "Midterm Exams",
        "A-Level Exams - Advanced Level",
        "IB Exams - International Baccalaureate",
        "State Board Exams",
        "DELE - Diplomas de Español como Lengua Extranjera",
        "JLPT - Japanese-Language Proficiency Test",
        "CELI - Certificato di Conoscenza della Lingua Italiana",
        "DALF - Diplôme Approfondi de Langue Française",
        "NCLEX-RN - National Council Licensure Examination for Registered Nurses",
        "BAR Exam - for legal professionals",
        "USMLE - United States Medical Licensing Examination",
        "Entrance Exams",
        "Certification in Digital Marketing",
        "Real Estate Licensing Exam"
      ],
    };
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, exams } = this.state;

    const filteredExams = exams.filter((exam) =>
      exam.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>List of Exams</h1>
        <div style={ { padding: '20px', overflowY: 'auto' }}>
        <FilterInput
          type="text"
          placeholder="Filter exams..."
          value={filter}
          onChange={this.handleFilterChange}
        />
        <Link to = '/add-exam'>
        <Button>Add Exam</Button></Link>
        </div>
        <Table>
          <thead>
            <tr>
              <TableHeader>Exam Name</TableHeader>
            </tr>
          </thead>
          <tbody>
            {filteredExams.length > 0 ? (
              filteredExams.map((exam, index) => (
                <tr key={index}>
                  <TableCell>{exam}</TableCell>
                </tr>
              ))
            ) : (
              <tr>
                <TableCell colSpan="1">No exams found.</TableCell>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Exams;
