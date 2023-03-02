import React, { useState, useEffect, useRef } from 'react'
export const EjemploEvento = () => {
  const [text, setText] = useState("");
  const [greatting, setGreatting] = useState('aqui veras tu tweet');
  const [charCount, setCharCount] = useState(0);
  const handleEvent = () => { setGreatting(text) }


  useEffect(() => {
  const charatersmax=255;
  setCharCount(charatersmax-text.length);
  }, [text]);
  return (
    <>
      <h1>Generador de tweets</h1>
      <div>
        <h2>publica tus tweets</h2>
        <hr />
        <div>
          <textarea placeholder='maximo de caracteres 255' onChange={(e) => setText(e.target.value)} id='txt-into' className='Txt-area' type="text" />
        </div>
        <p >te quedan {charCount} </p>
        <button onClick={handleEvent} className='btn-greatting'>publicar</button>
        <button onClick={handleEvent} className='btn-greatting'>archivar</button>
        <button onClick={handleEvent} className='btn-greatting'>mostrar archivos</button>
      </div>
      <h3>{greatting}</h3>

    {/* hola mundo */}
    </>
  )
}