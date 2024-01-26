/* eslint-disable react/prop-types */
function InputModal({ label, type, func, value }) {
  return (
    <div className="col">
      <label htmlFor="email" className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id="email"
        value={value}
        onChange={func}
        placeholder=""
      />
    </div>
  );
}

export default InputModal;
