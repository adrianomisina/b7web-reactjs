import userEvent from '@testing-library/user-event';
import React from 'react';

//Componente
function Avatar(props) {
    return (
        <div>
            <img src={props.user.url} alt={props.user.name} />
            <br />
            <span>{props.user.name}</span>
        </div>
    )
}


function App() {
    //  Objeto
    let user = {
        url: "https://www.google.com.br/google.jpg",
        name: "Adriano Misina"
    }

    return <>
        {/* <BemVindo  nome="Adriano" idade="90"/>
        <BemVindo nome="Jane" idade="30"/>
        <BemVindo nome="Kenzo" idade="120" /> */}

        {/* Componente renderizado com as carcterísticas do objeto */}
        <Avatar user={user}/>
    </>;
}

export default App;