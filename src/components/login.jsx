import { useState } from 'react';
import { Container, Form, Input, Button, Message } from './login.styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setIsSuccess] = useState(false);

  const validaEmail = (email) => {
    const emailEnv = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailEnv.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !validaEmail(email)) {
      setMessage('Por favor, insira um e-mail válido.');
      setIsSuccess(false);
      return;
    }

    if (!password || password.length < 6) {
      setMessage('A senha deve ter no mínimo 6 caracteres.');
      setIsSuccess(false);
      return;
    }

    if (email === 'test@gmail.com' && password === '123456') {
      setMessage('Login bem-sucedido!');
      setIsSuccess(true);
    } else {
      setMessage('E-mail ou senha inválidos.');
      setIsSuccess(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
        {message && <Message success={success}>{message}</Message>}
      </Form>
    </Container>
  );
};

export default Login;
