import React from "react";
import styled from "styled-components";

const Site = styled.div `
    width: 400px;
    height: 400px;
    background-color: #00FF00;
`

//cria o componente já estilizando ele
/*const Botao = styled.button `
    font-size: 19px;
    padding: 10px 15px;
    border-radius: 5px;
    background-color:${props => props.color || '#00FF00'};
`;
*/

const Botao = styled.button `
    font-size: 19px;
    padding: 10px 15px;
    border-radius: 5px;
    background-color:${props => props.ativo === true ? '#0000FF' : '#CCC'};
    color: ${props => props.ativo === true ? '#FFF' : '#000'};
`;

function App() {
    return (    
        <Site>
            {/* <Botao color="#FF0000">Click Aqui!!!</Botao>
            <Botao color="#0000FF">Click Aqui!!!</Botao>
            <Botao>Click Aqui!!!</Botao> */}

            <Botao ativo={true}>Clique Aqui</Botao>
            <Botao ativo={false}>Clique Aqui</Botao>
        </Site>
    )
}

export default App;