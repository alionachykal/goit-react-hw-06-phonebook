import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/contacts/contactsSelector";
import { contactsFilterAction } from "redux/contacts/filter.slice";
import css from "./Filter.module.css";

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={value}
        onChange={(e) => dispatch(contactsFilterAction(e.target.value))}
      />
    </div>
  );
};
