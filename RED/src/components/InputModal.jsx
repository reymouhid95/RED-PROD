/* eslint-disable react/prop-types */
function InputModal({ label, type }) {
  return (
    <div className="col">
      <label htmlFor="email" className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" id="email" />
    </div>
  );
}

export default InputModal;
