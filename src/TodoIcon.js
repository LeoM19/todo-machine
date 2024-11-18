import React from "react";
import { FaCheck as CheckSVG } from 'react-icons/fa'
import { MdDelete as DeleteSVG } from 'react-icons/md'

import './TodoIcon.css'

const iconTypes = {
    "check" : (color) => <CheckSVG className="icon-svg" fill={color} />,
    "delete" : (color) => <DeleteSVG className="icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`icon-container icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };