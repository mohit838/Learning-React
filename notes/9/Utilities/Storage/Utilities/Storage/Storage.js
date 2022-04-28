//Creating local storageDB

const Storage = (id) => {
    const exits = localStorage.getItem('shopping_cart');
    let shopping_cart = {};
      
    if(!exits){
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exits);
        if(shopping_cart[id]){
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else{
            shopping_cart[id] = 1;
        }
    }
    
    localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));

    
};

export { Storage };

