import React from "react";

const Form = ({ handleChange, Files }) => {
  return (
    <div className="card-body">
      <p>Please upload your invoice and submit here.</p>
      <form>
        <div className="form-group">
          <label htmlFor="invoice">Invoice</label>
          <input
            type="file"
            className="form-control-file"
            multiple={true}
            id="invoice"
            onChange={handleChange}
            value={Files}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
