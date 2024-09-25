import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Label = styled.label`
  margin: 10px 0 5px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const AddExam = () => {
  const [formData, setFormData] = useState({
    examName: '',
    date: '',
    duration:'',
    orientation:'',
    studentClass:'',
    section:'',
    examType:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContainer>
      <h2>Exam Form</h2>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="examName">Exam Name</Label>
        <Input
          type="text"
          id="examName"
          name="examName"
          value={formData.examName}
          onChange={handleChange}
        />

        <Label htmlFor="date">Date</Label>
        <Input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <Label htmlFor="standard">Standard</Label>
        <Input
          type="text"
          id="standard"
          name="standard"
          value={formData.standard}
          onChange={handleChange}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default AddExam;
