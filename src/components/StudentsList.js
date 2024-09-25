
import styled from 'styled-components';
import Modal from 'react-modal';
import React, { useState } from 'react';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
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

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Input = styled.input`
  padding: 10px;
  font-size: 1em;
`;
const SubmitButton = styled.button`
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
`;

// Component
const StudentList = ({}) => {
    const initialStudents = [
      ];
      const [students, setStudents] = useState(initialStudents);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newStudent, setNewStudent] = useState({
    name: '',
    academicYear: '',
    class: '',
    gender: '',
    orientation: '',
    section: '',
  });
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents((prev) => [...prev, newStudent]);
    setNewStudent({
      name: '',
      academicYear: '',
      class: '',
      gender: '',
      orientation: '',
      section: '',
    });
    closeModal();
  };
  return (
    <Container>
      <Header>
        <Title>Student List</Title>
        <AddButton onClick={openModal}>Add Student</AddButton>
      </Header>
      <Table>
        <thead>
          <tr>
            <TableHeader>scs number</TableHeader>
            <TableHeader>name</TableHeader>
            <TableHeader>gender</TableHeader>
            <TableHeader>student status</TableHeader>
            <TableHeader>state</TableHeader>
            <TableHeader>zone</TableHeader>
            <TableHeader>branch</TableHeader>
            <TableHeader>orientation</TableHeader>
            <TableHeader>student class</TableHeader>
            <TableHeader>section</TableHeader>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{student.scsNumber}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.studentStatus}</TableCell>
              <TableCell>{student.state}</TableCell>
              <TableCell>{student.zone}</TableCell>
              <TableCell>{student.branch}</TableCell>
              <TableCell>{student.orientation}</TableCell>
              <TableCell>{student.studentClass}</TableCell>
              <TableCell>{student.section}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Add Student">
        <h2>Add Student</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="scsNumber"
            value={newStudent.scsNumber}
            onChange={handleChange}
            placeholder="scsNumber"
            required
          />
          <Input
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <Input
            type="text"
            name="gender"
            value={newStudent.gender}
            onChange={handleChange}
            placeholder="Gender"
            required
          />
          <Input
            type="text"
            name="studentStatus"
            value={newStudent.studentStatus}
            onChange={handleChange}
            placeholder="StudentStatus"
            required
          />
          <Input
            type="text"
            name="state"
            value={newStudent.state}
            onChange={handleChange}
            placeholder="State"
            required
          />
          <Input
            type="text"
            name="zone"
            value={newStudent.zone}
            onChange={handleChange}
            placeholder="Zone"
            required
          />
          <Input
            type="text"
            name="branch"
            value={newStudent.branch}
            onChange={handleChange}
            placeholder="branch"
            required
          />
          <Input
            type="text"
            name="orientation"
            value={newStudent.orientation}
            onChange={handleChange}
            placeholder="Orientation"
            required
          />
          <Input
            type="text"
            name="studentClass"
            value={newStudent.studentClass}
            onChange={handleChange}
            placeholder="StudentClass"
            required
          />
          <Input
            type="text"
            name="section"
            value={newStudent.section}
            onChange={handleChange}
            placeholder="Section"
            required
          />
          <SubmitButton type="submit">Add</SubmitButton>
        </Form>
      </Modal>
    </Container>
  );
};

export default StudentList;
