import React from "react";
import './TodoLoading.css'

function TodoLoading() {

    return(
      <>
        <div className="loading-container">
            <div className="loading-item"></div>
            <div className="loading-item"></div>
            <div className="loading-item"></div>
            <div className="loading-item"></div>
        </div>
      </>
    );
}

export  { TodoLoading };