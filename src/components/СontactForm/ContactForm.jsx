import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

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
  const onHandleSubmit = (values, { resetForm, setSubmitting }) => {
    //перевіряємо чи існують вже контакти з таким же іменем, що ввів користувач в формі.
    const isIncluded = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase().trim()
    );
    //якщо так то виводимо повідомлення
    if (isIncluded) {
      alert(`${values.name.trim()} is already in contacts`);
      setSubmitting(false);
      return;
    }
    const obj = {
      name: values.name.trim(),
      number: values.number.trim(),
      id: nanoid(),
    };
    //відправляє дані, вве дені користувачем, до батьківського компонента
    setTimeout(() => {
      onSubmitData(obj);
      resetForm();
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={onHandleSubmit}
      validationSchema={ContactSchema}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
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
            <ErrorMessage name="name" component="span" />
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
            <ErrorMessage name="number" component="span" />
          </Label>
          <FormButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Adding...' : 'Add contact'}
          </FormButton>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
export { ContactForm };
