import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Input = styled.input`
  width: 60px;
  padding: 5px;
`;

const StudentsMarksEntry = () => {
  const subjects = ['English', 'Telugu', 'Hindi', 'Maths', 'Physics', 'Chemistry', 'Social'];
  
  const studentsData = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' },
    { id: '4', name: 'Bob Brown' },
  ];

  const [students, setStudents] = useState(
    studentsData.map(student => ({ ...student, marks: {} }))
  );

  const handleChange = (index, subject, value) => {
    const updatedStudents = [...students];
    updatedStudents[index].marks[subject] = value;
    setStudents(updatedStudents);

    // Optional: Log or handle saved data
    console.log(updatedStudents);
  };

  return (
    <Container>
      <Title>Students Marks Entry</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            {subjects.map((subject) => (
              <TableHeader key={subject}>{subject}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              {subjects.map((subject) => (
                <TableCell key={subject}>
                  <Input
                    type="number"
                    value={student.marks[subject] || ''}
                    onChange={(e) => handleChange(index, subject, e.target.value)}
                    placeholder="0"
                  />
                </TableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StudentsMarksEntry;