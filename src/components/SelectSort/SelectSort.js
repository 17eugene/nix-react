import s from "./SelectSort.module.css";

const SelectSort = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={s.sortSelect}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.length > 0 &&
        options.map((option) => (
          <option className={s.sortOption} key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
    </select>
  );
};

export default SelectSort;
