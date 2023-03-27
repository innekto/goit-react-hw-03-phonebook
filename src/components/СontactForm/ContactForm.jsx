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
  const handleSubmit = (values, { resetForm }) => {
    const isIncluded = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase().trim()
    );
    if (isIncluded) {
      alert(`${values.name.trim()} is already in contacts`);
      return;
    }
    const obj = {
      name: values.name.trim(),
      number: values.number.trim(),
      id: nanoid(),
    };
    onSubmitData(obj);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Label>
            <h2>Name</h2>
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
