import React from "react";
import Form from "../../Molecules/Form/Form";
import useFetch from "../../CustomHooks/useFetch/useFetch";
import useCount from "../../CustomHooks/useCount/useCount";

const FormP = ({ name }) => {
  const counterOne = useCount();

  const usersForm = useFetch("https://jsonplaceholder.typicode.com/users", []);
  const postForm = useFetch("https://jsonplaceholder.typicode.com/posts", []);

  return (
    <div className="container">
      <h1>Formulario {name}</h1>

      <Form />

      <ul className="text-white pt-5">
        {usersForm.loading && <p>Cargando</p>}

        {usersForm.data.map((user) => (
          <li className="col" key={user.id}>
            {user.name}
          </li>
        ))}

        {usersForm.error && <p>Cargando</p>}
      </ul>
      <ul className="text-white pt-5">
        {postForm.loading && <p>Cargando</p>}

        {postForm.data.map((user) => (
          <li className="col" key={user.id}>
            {user.title}
          </li>
        ))}

        {postForm.error && <p>Cargando</p>}
      </ul>
      <div>
        <h1>{counterOne.count}</h1>
        <br />
        <input
          type="button"
          id="s"
          value="aumentar"
          onClick={counterOne.increase}
        />
        <input
          type="button"
          id="s"
          value="reducir"
          onClick={counterOne.decrease}
        />
      </div>
    </div>
  );
};

export default FormP;
