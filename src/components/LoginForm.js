// src/components/LoginForm.js
import React from 'react';
import { Container, FormContainer, Title, Input, Button, ErrorMsg } from './StyledComponents';
import { useNavigate } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    
    if (!email || !password) {
      this.setState({ error: 'Both fields are required.' });
      return;
    }
    
    this.setState({ error: '' });
    this.props.onLoginSuccess(); // Call the prop function
    this.props.navigate('/home'); // Redirect to home
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    
    return (
      <Container>
        <FormContainer>
          <Title>Login</Title>
          {error && <ErrorMsg>{error}</ErrorMsg>}
          <form onSubmit={this.handleSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              required
            />
            <Button type="submit">Login</Button>
          </form>
        </FormContainer>
      </Container>
    );
  }
}

// Wrap LoginForm with `useNavigate`
const LoginFormWithNavigate = (props) => {
  const navigate = useNavigate();
  return <LoginForm {...props} navigate={navigate} />;
};

export default LoginFormWithNavigate;
