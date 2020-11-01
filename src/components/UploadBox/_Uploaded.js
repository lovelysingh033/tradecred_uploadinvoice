import React from "react";

const Uploaded = ({ Files, handleReset }) => {
  const files = [];
  for (let i = 0; i < Files.length; i++) {
    files.push({
      name: Files[i].name,
      type: Files[i].name.indexOf("pdf") > 0 ? "pdf" : "excel"
    });
  }
  return (
    <div className="card-body">
      <div className="alert alert-success text-center">
        <i className="fa fa-check-circle" />
        You have uploaded {Files.length} files.
      </div>
      <ul className="list-group">
        {files.map((file, key) => (
          <li className="list-group-item" key={key}>
            <i className={"fa fa-file-" + file.type + "-o"} />
            {file.name}
          </li>
        ))}
      </ul>
      <button className="btn btn-sm btn-danger mt-3" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Uploaded;
