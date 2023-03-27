import styled from '@emotion/styled';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const ErrorMessage = styled(FormikErrorMessage)`
  color: teal;
`;
export const Form = styled(FormikForm)`
  display: flex;
  padding: 12px 0;
  flex-direction: column;
  background-color: #dde4ed;
  gap: 20px;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  margin: auto;
  width: 250px;
  gap: 4px;
`;

export const SubtitleForm = styled.h2`
  font-size: 20px;
`;

export const Field = styled(FormikField)`
  padding: 4px 8px;
  font-size: 16px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #246572;
`;
export const FormButton = styled.button`
  cursor: pointer;
  width: 35%;
  margin: auto;
`;
