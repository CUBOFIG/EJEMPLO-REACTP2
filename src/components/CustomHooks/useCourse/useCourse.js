import { useEffect, useState } from "react";
import axios from "axios";

const useCourse = (id) => {
  const [state, setState] = useState({});
  useEffect(() => {
    console.log("hola");
    axios
      .get(`http://my-json-server.typicode.com/CUBOFIG/JSON-React/cursos/${id}`)
      .then((resp) => setState(resp.data));
  }, [id]);

  return state;
};
export default useCourse;
