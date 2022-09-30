import React from "react";
import s from "./SelectSort.module.css";
import PropTypes from "prop-types";

const SelectSort = ({ defaultValue, value, onChange, options }) => {
  return (
    <select className={s.select} value={value} onChange={onChange}>
      <option disabled className={s.defaultOption} value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option className={s.option} key={option.name} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectSort;

SelectSort.propTypes = {
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
