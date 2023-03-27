import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  padding: 12px 0;
  flex-direction: column;
  background-color: #dde4ed;
  gap: 20px;
  border: 1px solid grey;
  border-radius: 4px;
`;

const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  margin: auto;
  width: 250px;
  gap: 4px;
`;

const SubtitleForm = styled.p`
  font-size: 20px;
`;

const Input = styled.input`
  padding: 4px 8px;
  font-size: 16px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #246572;
`;
const FormButton = styled.button`
  cursor: pointer;
  width: 35%;
  margin: auto;
`;
export { Form, Label, FormButton, SubtitleForm, Input };
