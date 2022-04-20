import React from 'react';

function Button({click, nome}) {
    return (  
        <div>
            <button  type='submit' onClick={click}>{nome}</button>
        </div>
    );
}

export default Button;