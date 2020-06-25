import React from "react";
import Banner from "../../Organisms/Banner/Banner";
import withLogin from "../../HOC/withLogin/withLogin";

const Extra = (props) => (
  <div>
    <Banner />
    {props.loggued ? (
      <h1 className="text-primary">Estas en la pagina extra</h1>
    ) : (
      <h1 className=" text-danger">Necesitas loguearte</h1>
    )}
  </div>
);

export default withLogin(Extra);
