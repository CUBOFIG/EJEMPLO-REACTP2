import React from "react";
import Banner from "../../Organisms/Banner/Banner";
import withLogin from "../../HOC/withLogin/withLogin";
import AddFileSquare from "../../Organisms/AddFiles/AddFileSquare/AddFileSquare";
import AddFileCircle from "../../Organisms/AddFiles/AddFileCircle/AddFileCircle";

const Extra = (props) => (
  <div>
    <Banner />
    {props.loggued ? (
      <>
        <div className="container">
          <h1 className="text-primary">Estas en la pagina extra</h1>

          <div className="">
            <div>
              <h1>rectangulo</h1>
              <AddFileSquare />
            </div>
            <div>
              <h1>circulo</h1>
              <AddFileCircle />
            </div>
          </div>
        </div>
      </>
    ) : (
      <h1 className=" text-danger">Necesitas loguearte</h1>
    )}
  </div>
);

export default withLogin(Extra);
