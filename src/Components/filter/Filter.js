import React from "react";
import styles from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../Redux/phonebook/phonebook-actions";
import { getFilter } from "../../Redux/phonebook/phoneboock-selectors";

export default function Filter() {
  const inputValue = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          value={inputValue}
          onChange={(e) =>
            dispatch(phonebookActions.changeFilter(e.target.value))
          }
        />
      </label>
    </>
  );
}
