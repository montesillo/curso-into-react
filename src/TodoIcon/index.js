import React from 'react';
import './TodoIcon.css';
import { ReactComponent as logo } from '../logo.svg';

const iconTypes = {
    "check": color => (
        <logo className="Icon-svg Icon-svg--check" fill={color} />
        ),
        "delete": color => (
        <logo className="Icon-svg Icon-svg--delete" fill={color} />
    ),
};

function TodoIcon({ type, color = 'gray', onClick}){
    return(
        <span 
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}>
            {iconTypes[type]}
        </span>
    );
}

export {TodoIcon};