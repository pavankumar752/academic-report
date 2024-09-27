import styled from 'styled-components';
import Modal from 'react-modal';
import React, { useState } from 'react';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Sub = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
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

const StudentCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Info = styled.p`
  margin: 5px 0;
`;

const ActionButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    background-color: #218838;
  }
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
const ExamList = () => {
  const initialStudents = [];
  const [students, setStudents] = useState(initialStudents);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [viewModalIsOpen, setViewModalIsOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    examName: '',
    date: '',
    duration: '',
    orientation: '',
    studentClass: '',
    section: '',
    examType: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setEditingIndex(null);
    setNewStudent({
      examName: '',
      date: '',
      duration: '',
      orientation: '',
      studentClass: '',
      section: '',
      examType: ''
    });
    setModalIsOpen(false);
  };

  const openViewModal = (student) => {
    setNewStudent(student);
    setViewModalIsOpen(true);
  };

  const closeViewModal = () => {
    setViewModalIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = newStudent;
      setStudents(updatedStudents);
    } else {
      setStudents((prev) => [...prev, newStudent]);
    }
    closeModal();
  };

  const editStudent = (student, index) => {
    setNewStudent(student);
    setEditingIndex(index);
    openModal();
  };

  return (
    <Container>
      <Header>
        <Title>Exam List</Title>
        <AddButton onClick={openModal}>Add Exam</AddButton>
      </Header>
      <Sub>
        {students.map((student, index) => (
          <StudentCard key={index}>
            <Info><strong>Exam Name:</strong> {student.examName}</Info>
            <Info><strong>Date:</strong> {student.date}</Info>
            <Info><strong>Duration:</strong> {student.duration}</Info>
            <Info><strong>Orientation:</strong> {student.orientation}</Info>
            <Info><strong>Student Class:</strong> {student.studentClass}</Info>
            <Info><strong>Section:</strong> {student.section}</Info>
            <Info><strong>Exam Type:</strong> {student.examType}</Info>
            <div>
              <ActionButton onClick={() => openViewModal(student)}>View</ActionButton>
              <ActionButton onClick={() => editStudent(student, index)}>Edit</ActionButton>
            </div>
          </StudentCard>
        ))}
      </Sub>

      {/* Add/Edit Exam Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Add Exam">
        <h2>{editingIndex !== null ? 'Edit Exam' : 'Add Exam'}</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="examName"
            value={newStudent.examName}
            onChange={handleChange}
            placeholder="Exam Name"
            required
          />
          <Input
            type="date"
            name="date"
            value={newStudent.date}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="duration"
            value={newStudent.duration}
            onChange={handleChange}
            placeholder="Duration"
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
            placeholder="Student Class"
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
          <Input
            type="text"
            name="examType"
            value={newStudent.examType}
            onChange={handleChange}
            placeholder="Exam Type"
            required
          />
          <SubmitButton type="submit">{editingIndex !== null ? 'Update' : 'Add'}</SubmitButton>
        </Form>
      </Modal>

      {/* View Exam Modal */}
      <Modal isOpen={viewModalIsOpen} onRequestClose={closeViewModal} contentLabel="View Exam">
        <h2>Exam Details</h2>
        <div>
          <Info><strong>Exam Name:</strong> {newStudent.examName}</Info>
          <Info><strong>Date:</strong> {newStudent.date}</Info>
          <Info><strong>Duration:</strong> {newStudent.duration}</Info>
          <Info><strong>Orientation:</strong> {newStudent.orientation}</Info>
          <Info><strong>Student Class:</strong> {newStudent.studentClass}</Info>
          <Info><strong>Section:</strong> {newStudent.section}</Info>
          <Info><strong>Exam Type:</strong> {newStudent.examType}</Info>
        </div>
        <button onClick={closeViewModal}>Close</button>
      </Modal>
    </Container>
  );
};

export default ExamList;