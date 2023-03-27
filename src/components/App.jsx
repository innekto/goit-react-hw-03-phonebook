import { Component } from 'react';
import { ContactForm } from './СontactForm/ContactForm';
import { ContactList } from './СontactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  Section,
  ContactsWrap,
  SectionTitle,
  SectionSubTitle,
} from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  //додаємо новий контакт в список контактів
  //приймаємо об'єкт obj, який містить інформацію про новий контакт.
  //оновлюємо стан компонента, використовуючи this.setState()
  onSubmitData = obj => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj],
    }));
  };

  //оновлюємо стан компонента при зміні значення поля введення фільтру
  onHandleChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  //повертаємо список контактів, що містять ім'я, яке включає значення фільтру, який зберігається у стані компонента.
  filterContacts = () => {
    const { filter, contacts } = this.state; //отримуємо значення фільтру та список контактів зі стану компонента
    const normalFilter = filter.toLowerCase(); //перетворюємо значення фільтру до нижнього регістру
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    ); //повертаємо список контактів, які містять ім'я, що включає значення фільтру
  };

  //отримуємо параметр id, який відповідає ідентифікатору контакту, який потрібно видалити зі списку.
  //оновлюємо дані, залишаючи контакти id яких не співпадає з id який треба видалити
  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Section>
        <SectionTitle>Phonebook</SectionTitle>
        <ContactForm
          onSubmitData={this.onSubmitData}
          contacts={this.state.contacts}
        />
        <ContactsWrap>
          <SectionSubTitle>Contacts</SectionSubTitle>
          <Filter
            onHandleChange={this.onHandleChange}
            filter={this.state.filter}
          />

          {/* динамічний список */}
          <ContactList
            // у властивість contacts передаємо результат виклику методу this.filterContacts()
            contacts={this.filterContacts()}
            deleteContacts={this.deleteContacts}
          />
        </ContactsWrap>
      </Section>
    );
  }
}
