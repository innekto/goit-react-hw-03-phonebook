import React from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';

import { ContactSchema } from '../../utils/ContactSchema';
import {
  ErrorMessage,
  Form,
  Label,
  SubtitleForm,
  Field,
  FormButton,
} from './ContactForm.styled';

const ContactForm = ({ onSubmitData, contacts }) => {
  const onHandleSubmit = (values, { resetForm }) => {
    //перевіряємо чи існують вже контакти з таким же іменем, що ввів користувач в формі.
    const isIncluded = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase().trim()
    );
    //якщо так то виводимо повідомлення
    if (isIncluded) {
      alert(`${values.name.trim()} is already in contacts`);
      return;
    }
    const obj = {
      name: values.name.trim(),
      number: values.number.trim(),
      id: nanoid(),
    };
    //відправляє дані, введені користувачем, до батьківського компонента
    onSubmitData(obj);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={onHandleSubmit}
      validationSchema={ContactSchema}
    >
      {({ values, handleChange, handleSubmit }) => (
        // handleChange, handleSubmit встроєні функціі Formik
        <Form onSubmit={handleSubmit}>
          <Label>
            <SubtitleForm>Name</SubtitleForm>
            <Field
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
            <ErrorMessage name="name" component="div" />
          </Label>
          <Label>
            <SubtitleForm>Number</SubtitleForm>
            <Field
              type="tel"
              name="number"
              value={values.number}
              onChange={handleChange}
              required
            />
            <ErrorMessage name="number" component="div" />
          </Label>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      )}
    </Formik>
  );
};

export { ContactForm };
