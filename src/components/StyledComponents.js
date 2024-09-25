// src/components/StyledComponents.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;

`;

export const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  text-align: center;
`;
