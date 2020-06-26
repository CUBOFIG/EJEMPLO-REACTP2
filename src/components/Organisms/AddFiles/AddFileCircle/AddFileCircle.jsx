import React from "react";
import "../AddFiles.css";

import withFileUpload from "../../../HOC/withFileUpload/withFileUpload";

const AddFileCircle = (props) => (
  <div className="square">
    <form>
      <input type="file" onChange={props.addFile} />
    </form>

    {props.files.map((file, index) => (
      <div className="imgu bborder-re">
        <img src={file} className="imgur-circle " alt="img" key={index} />
      </div>
    ))}
  </div>
);

export default withFileUpload(AddFileCircle);
