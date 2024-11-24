import React from "react";
import { TodoIcon } from "./index.js";

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon 
            type="check"
            color={completed ? "var(--color-orange)" : "var(--color-white)"}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };