import React, { useState, useEffect } from "react";
export const EjemploEvento = () => {
  const [text, setText] = useState("");
  // const [text, setText] = useState(window.localStorage.getItem('text'));
  const [greatting, setGreatting] = useState("aqui veras tu tweet");
  const [charCount, setCharCount] = useState(0);
  const [valor, setValor] = useState();
  const handleEvent = () => {
    setGreatting(text);
  };
  const returnLocalStorage = () => {
    setGreatting(window.localStorage.getItem("text"));
  };
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const charatersmax = 255;
    setCharCount(charatersmax - text.length);
    if (charCount < 1) {
      alert("usted a llegado a su limite");

      setValor(255);
    }
  }, [text]);

  const setLocalStorage = (value) => {
    try {
      setText(value);
      window.localStorage.setItem("text", [value]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Generador de tweets</h1>
      <div>
        <h2>publica tus tweets</h2>
        <hr />
        <div>
          <textarea
            placeholder="maximo de caracteres 255"
            onChange={(e) => setLocalStorage(e.target.value)}
            id="txt-into"
            className="Txt-area"
            value={text}
            type="text"
            maxLength={valor}
          />
        </div>
        <p id="Counter">te quedan {charCount} </p>
        <button onClick={handleEvent} className="btn-greatting">
          publicar tweet actual
        </button>
        <button onClick={clearLocalStorage} className="btn-greatting">
          borrar tweets guardados
        </button>
        <button onClick={returnLocalStorage} className="btn-greatting">
          mostrar ultimo tweet
        </button>
      </div>
      <h3>{greatting}</h3>
    </>
  );
};
