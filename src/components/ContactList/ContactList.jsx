import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "redux/contacts/contactsSelector";
import { deleteContactsAction } from "redux/contacts/contacts.slice";

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => dispatch(deleteContactsAction(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
