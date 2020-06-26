import React from "react";
import "../AddFiles.css";
import withFileUpload from "../../../HOC/withFileUpload/withFileUpload";

const AddFileSquare = (props) => (
  <div className="square">
    <form>
      <input type="file" onChange={props.addFile} />
    </form>

    {props.files.map((file, index) => (
      <div className="imgu">
        <img src={file} alt="imgSquare" key={index} />
      </div>
    ))}
  </div>
);

export default withFileUpload(AddFileSquare);
