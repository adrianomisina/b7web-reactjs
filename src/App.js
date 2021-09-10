import React from 'react';

function formatarNome(usuario) {
    return usuario.nome + ' ' + usuario.sobrenome;
}

function App() {
    // let usuario = {
    //     nome: 'Adriano',
    //     sobrenome: 'Misina'
    // }

    let imagem = ' http://www.google.com.br/google.jpg';
 
    return <>
        {/* <div>Meu nome é {formatarNome(usuario)}</div> */}
        <img src={imagem} />
    </>;
}

export default App;

