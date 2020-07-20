import React from 'react';

const TimeSelect = ({ className, value, onChange }) => {
  return (
    <select
      type="select"
      className={className}
      defaultValue={value}
      onChange={onChange}
    >
      <option value="80000712" label="Breakfast">
        Breakfast
      </option>
      <option value="80000713" label="Brunch">
        Brunch
      </option>
      <option value="80000717" label="Lunch">
        Lunch
      </option>
      <option value="80000714" label="Dinner">
        Dinner
      </option>
      <option value="06:30" label="6:30 AM">
        6:30 AM
      </option>
      <option value="07:00" label="7:00 AM">
        7:00 AM
      </option>
      <option value="07:30" label="7:30 AM">
        7:30 AM
      </option>
      <option value="08:00" label="8:00 AM">
        8:00 AM
      </option>
      <option value="08:30" label="8:30 AM">
        8:30 AM
      </option>
      <option value="09:00" label="9:00 AM">
        9:00 AM
      </option>
      <option value="09:30" label="9:30 AM">
        9:30 AM
      </option>
      <option value="10:00" label="10:00 AM">
        10:00 AM
      </option>
      <option value="10:30" label="10:30 AM">
        10:30 AM
      </option>
      <option value="11:00" label="11:00 AM">
        11:00 AM
      </option>
      <option value="11:30" label="11:30 AM">
        11:30 AM
      </option>
      <option value="12:00" label="12:00 PM">
        12:00 PM
      </option>
      <option value="12:30" label="12:30 PM">
        12:30 PM
      </option>
      <option value="13:00" label="1:00 PM">
        1:00 PM
      </option>
      <option value="13:30" label="1:30 PM">
        1:30 PM
      </option>
      <option value="14:00" label="2:00 PM">
        2:00 PM
      </option>
      <option value="14:30" label="2:30 PM">
        2:30 PM
      </option>
      <option value="15:00" label="3:00 PM">
        3:00 PM
      </option>
      <option value="15:30" label="3:30 PM">
        3:30 PM
      </option>
      <option value="16:00" label="4:00 PM">
        4:00 PM
      </option>
      <option value="16:30" label="4:30 PM">
        4:30 PM
      </option>
      <option value="17:00" label="5:00 PM">
        5:00 PM
      </option>
      <option value="17:30" label="5:30 PM">
        5:30 PM
      </option>
      <option value="18:00" label="6:00 PM">
        6:00 PM
      </option>
      <option value="18:30" label="6:30 PM">
        6:30 PM
      </option>
      <option value="19:00" label="7:00 PM">
        7:00 PM
      </option>
      <option value="19:30" label="7:30 PM">
        7:30 PM
      </option>
      <option value="20:00" label="8:00 PM">
        8:00 PM
      </option>
      <option value="20:30" label="8:30 PM">
        8:30 PM
      </option>
      <option value="21:00" label="9:00 PM">
        9:00 PM
      </option>
      <option value="21:30" label="9:30 PM">
        9:30 PM
      </option>
      <option value="22:00" label="10:00 PM">
        10:00 PM
      </option>
      <option value="22:30" label="10:30 PM">
        10:30 PM
      </option>
    </select>
  );
};

export default TimeSelect;
