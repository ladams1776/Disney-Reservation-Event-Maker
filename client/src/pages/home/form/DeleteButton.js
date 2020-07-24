import React, { useState } from 'react';
import fetchApiData from '../../../utils/fetchApiData';
import styles from './DeleteButton.module.css';

const DeleteButton = (id) => {
  const [isActive, setIsActive] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    const dispatch = () => {
      window.location = '/';
    };

    fetchApiData(`api/reservation`, { method: 'DELETE', body: id }, dispatch);
  };

  return (
    <div className={styles.deleteButton}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onClick={() => setIsActive(!isActive)}
      />
      <button
        className={styles.button}
        onClick={handleDelete}
        disabled={!isActive}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
