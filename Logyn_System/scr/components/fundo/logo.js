import React from 'react';
const MeuComponente = () => {
    const urlDaImagem = "https://i.postimg.cc/cJ20V0Pb/logo.jpg";
    return (
        <div>
            <img src={urlDaImagem} alt="Descrição da imagem" 
            style={{ position: 'absolute', left: '0px', top: '0', height:'40px' }}/>
        </div>
    );
}

export default MeuComponente;