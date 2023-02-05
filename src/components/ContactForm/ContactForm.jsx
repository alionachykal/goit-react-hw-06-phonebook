import { useState } from "react";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactsAction } from "../../redux/contacts/contacts.slice";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContactsAction({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.formLabel}>
        Name{" "}
      </label>
      <input
        className={css.formName}
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="number" className={css.formLabel}>
        Number{" "}
      </label>
      <input
        className={css.formNumber}
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleChange}
      />
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
