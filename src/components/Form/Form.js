import PropTypes from "prop-types";

const Form = ({ children, onSubmit }) => {
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  onSubmit: PropTypes.func,
};
