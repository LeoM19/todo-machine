import React from "react";

function useLocarStorage(itemName, initialValue) {
    let localStorageItem = localStorage.getItem(itemName);
  
    let parsetItem;
  
    if(!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsetItem = initialValue;
    } else {
      parsetItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsetItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
  
      setItem(newItem);
    };
  
    return [item, saveItem];
  }

  export { useLocarStorage };