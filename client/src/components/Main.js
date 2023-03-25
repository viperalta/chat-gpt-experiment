import React, { useState } from 'react';
import { simplePost} from '../services/simplePost'
import { ColorRing } from  'react-loader-spinner'

const Main = () => {

    const [prompt,setPrompt] = useState("");
    const [texto,setTexto] = useState("");
    const [displayLoader,setDisplayLoader] = useState(false);

    const sendPrompt = async(values) => {
        console.log(prompt)
        setTexto("")
        setDisplayLoader(true)
        const body={
            prompt:prompt
        }
        const response = await simplePost("http://localhost:8000/api/prompt",body);
        setTexto(response.data.texto)
        setDisplayLoader(false)
    }

    return (
        <div className='container'>
            <label>Ingresa tu prompt</label>
            <textarea onChange={(e)=>setPrompt(e.target.value)}></textarea>
            <button onClick={()=>sendPrompt()} >ENVIAR PROMPT</button>
            <h1>RESPUESTA</h1>
            {displayLoader?<>
            <div className='loader-container'>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>
                
            </>:<>
                <div>
                    {texto}
                </div>
            </>}
            
        </div>
    );
}

export default Main;
