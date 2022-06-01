import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://sujeitoprogramador.com/r-api/?api=filmes"
      );

      setData(response.data);
    }

    fetchData();
  }, []);

  return (
    <div className="apiContainer">
      <Link to="/">Home</Link>
      {data.map((item) => {
        return (
          <section key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div className="movieDesc">
              <h2>{item.nome}</h2>
              <p>{item.sinopse}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};
