import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  Form,
  Label,
  FormButton,
  SubtitleForm,
  Input,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  static propTypes = {
    onSubmitData: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  onHandleSubmit = e => {
    e.preventDefault();

    // отримуємо дані з інпутів форми і створює об'єкт obj
    const { name, number } = e.target.elements;
    // console.log('e.target.elements :>> ', e.target.elements);
    const obj = {
      name: name.value.trim(),
      number: number.value.trim(),
      id: nanoid(),
    };

    //перевіряємо чи існують вже контакти з таким же іменем, що ввів користувач в формі.
    const isIncluded = this.props.contacts.some(
      contact => contact.name.toLowerCase() === name.value.toLowerCase().trim()
    );
    //якщо так то виводимо повідомлення
    if (isIncluded) {
      alert(`${name.value.trim()} is already in contacts`);

      //очищуємо значення інпутів форми
      this.reset();
      //та виходимо
      return;
    }
    //відправляє дані, введені користувачем, до батьківського компонента
    //  батьківський компонент (App) передав onSubmitData() як властивість.
    this.props.onSubmitData(obj);

    //очищуємо значення інпутів форми
    this.reset();
  };

  //оновлюємо стану компонента, коли користувач ввів дані в інпути форми.

  //перший більш зрозумілий варіант
  // onHandleChange = event => {
  //   const inputName = event.currentTarget.name; // отримуємо назву інпуту
  //   const inputValue = event.currentTarget.value; // отримуємо значення інпуту

  //   // оновлюємо стан компонента відповідно до введених користувачем даних
  //   this.setState({ [inputName]: inputValue });
  // };
  //другий більш лаконічний варіант
  onHandleChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  //після успішної відправки форми очищаємо  значення
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.onHandleSubmit}>
          <Label>
            <SubtitleForm>Name</SubtitleForm>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.onHandleChange}
              value={this.state.name}
              required
            />
          </Label>
          <Label>
            <SubtitleForm>Number</SubtitleForm>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.onHandleChange}
              value={this.state.number}
              required
            />
          </Label>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </>
    );
  }
}

// ContactForm.propTypes = {
//   onSubmitData: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

export { ContactForm };
