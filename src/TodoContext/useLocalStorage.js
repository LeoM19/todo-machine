import React from "react";

function useLocarStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
      
          let parsetItem;
  
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsetItem = initialValue;
          } else {
            parsetItem = JSON.parse(localStorageItem);
            setItem(parsetItem);
          }
  
          setLoading(false);
        } catch(error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, []);

    
  
  
    const saveItem = (newItem) => {
      localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
  
      setItem(newItem);
    };
  
    return {
      item, 
      saveItem, 
      loading, 
      error,
    };
  }

  export { useLocarStorage };


  // localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Barrer cocina', completed: false },
//   { text: 'Lavar trastes', completed: false },
//   { text: 'Lavar ropa', completed: false },
//   { text: 'limpiar ropa', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));