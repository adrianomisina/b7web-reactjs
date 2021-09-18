import React, {useState} from "react";
import styled from "styled-components";

const Input = styled.input`
    width: 400px,
    height: 30px;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #000;
`;

function App() {

    const [email, setEmail] = useState('') // two way data buid //
    const [senha, setSenha] = useState('')

    const handleButton = () => {
       alert(email + ' - ' + senha) 
    }

    return (    
        <>
            <Input placeholder="Digite seu e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <br/>
            <Input placeholder="Digite sua senhal" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}  />
            <br/>
            <br/>
            <button onClick={handleButton}>Dizer</button>
        </>
    )
}

export default App;