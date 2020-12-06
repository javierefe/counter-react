import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

// const saludo = {
//     nombre: 'Fernando',
//     edad: 34
// }

// aplicando al desestructuracion de objetos
const PrimeraApp = ({saludo, subtitulo }) => {

    

    return (
        <>
            <h1>{saludo}</h1>
            {/* <h1>{ saludo }</h1> */}
            {/* // <pre> { JSON.stringify(saludo, null, 3) } </pre> */}
            <p>{subtitulo}</p>

        </>
        
        
    );
}

PrimeraApp.propTypes = {

    // saludo: PropTyps.string
    //Hacerlo obligatorio 
    saludo: PropTypes.string.isRequired
}

// propiedades por defecto  , revisar el index, de ahi se envian 
PrimeraApp.defaultProps = {
    subtitulo : 'Soy un subtitulo'
}
export default PrimeraApp;
