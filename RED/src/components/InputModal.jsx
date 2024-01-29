/* eslint-disable react/prop-types */
function InputModal({ label, type, func, value, name }) {
  return (
    <div className="col">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={func}
        placeholder=""
        required
      />
    </div>
  );
}

export default InputModal;
