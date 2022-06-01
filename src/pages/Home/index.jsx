import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, senha);
  };

  return (
    <div className="homeContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={senha}
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Fazer Login</button>
      </form>
      <Link to="/api">Api</Link>
    </div>
  );
}
