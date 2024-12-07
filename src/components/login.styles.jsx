import styled from 'styled-components';

const primaryColor = "#DED8CC";
const borderColor = "#8f8a8a";
const buttonColor = "#8F967F";
const buttonHoverColor = "#6b705f";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  background-color: ${primaryColor};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px; 
  flex-direction: column;
  align-items: center;


`;

export const FormElement = styled.div`
  width: 90%;
  padding: 12px;
  margin: 12px 0;
  border-radius: 4px;
  font-size: 16px;
`;

export const Input = styled(FormElement).attrs({
  as: 'input',
})`
  border: 1px solid ${borderColor};
`;

export const Button = styled(FormElement).attrs({
  as: 'button',
})`
  background-color: ${buttonColor};
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${buttonHoverColor};
  }

  @media (max-width: 767px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const Message = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: ${(props) => (props.success ? 'green' : 'red')};
  text-align: center;
`;
