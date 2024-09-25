// src/components/ExamTypes.js
import React from 'react';
import styled from 'styled-components';

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

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
  padding: 8px;
  width: 48%; /* Adjust to fit side by side */
  box-sizing: border-box;
`;

class ExamTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolFilter: '',
      examFilter: '',
      schools: [
        {
          name: "Srichaitanya School - Hyderabad",
          examTypes: ["JEE Main", "JEE Advanced", "NEET"]
        },
        {
          name: "Srichaitanya School - Vijayawada",
          examTypes: ["ICSE Board Exams", "JEE Main", "NEET"]
        },
        {
          name: "Srichaitanya School - Tirupati",
          examTypes: ["CBSE Board Exams", "JEE Advanced", "A-Level Exams"]
        },
        {
          name: "Srichaitanya School - Bangalore",
          examTypes: ["ICSE Board Exams", "CBSE Board Exams", "JEE Main"]
        },
        {
          name: "Srichaitanya School - Visakhapatnam",
          examTypes: ["AP Board Exams", "JEE Main", "NEET"]
        }
      ],
    };
  }

  handleSchoolFilterChange = (event) => {
    this.setState({ schoolFilter: event.target.value });
  };

  handleExamFilterChange = (event) => {
    this.setState({ examFilter: event.target.value });
  };

  render() {
    const { schoolFilter, examFilter, schools } = this.state;

    return (
      <div>
        <h1>Srichaitanya Schools and Their Exam Types</h1>
        <FilterContainer>
          <FilterInput
            type="text"
            placeholder="Filter by school name..."
            value={schoolFilter}
            onChange={this.handleSchoolFilterChange}
          />
          <FilterInput
            type="text"
            placeholder="Filter by exam type..."
            value={examFilter}
            onChange={this.handleExamFilterChange}
          />
        </FilterContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>School Name</TableHeader>
              <TableHeader>Exam Types</TableHeader>
            </tr>
          </thead>
          <tbody>
            {schools
              .filter((school) =>
                school.name.toLowerCase().includes(schoolFilter.toLowerCase())
              )
              .map((school, index) => {
                // Filter exam types based on examFilter
                const filteredExamTypes = school.examTypes.filter((exam) =>
                  exam.toLowerCase().includes(examFilter.toLowerCase())
                );

                // Only render the row if there are filtered exam types
                if (filteredExamTypes.length > 0) {
                  return (
                    <tr key={index}>
                      <TableCell>
                        <strong>{school.name}</strong>
                      </TableCell>
                      <TableCell>
                        {filteredExamTypes.map((exam, idx) => (
                          <div key={idx}>{exam}</div>
                        ))}
                      </TableCell>
                    </tr>
                  );
                }
                return null; // Skip rows with no matching exam types
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ExamTypes;
