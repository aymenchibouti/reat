import React from 'react';

const Rout = (props) => {
    let valeur = props.match.params.valeur;
    return (
        <div>
            <h1>Rout</h1>
            <p>{valeur}</p>
        </div>
    )
}
export default Rout;