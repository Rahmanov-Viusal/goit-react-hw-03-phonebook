import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './ContactForm.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  onSubmitForm = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.handleSubmitForm(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.onSubmitForm}>
        <label>
          Name
          <input
            className={s.form__input}
            onChange={this.handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Ivan Ivanov"
          />
        </label>
        <label>
          Number
          <input
            className={s.form__input}
            onChange={this.handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="+38 (099) 999-99-99"
          />
        </label>
        <button className={s.btn}>add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;
