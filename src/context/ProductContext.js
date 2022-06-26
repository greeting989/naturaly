import {createContext,useContext,useEffect,useState} from 'react';
import {data} from "../data/data"
const productContext = createContext();
export function ProductContextProvider({children}){
    
    const [state, setState] = useState({
        booklist : data,
        cart : [],
        checkout : []
    });

    const addToCart = (book) => {
        setState({
          ...state,
          cart: state.cart.find((cartItem) => cartItem.id === book.id)
            ? state.cart.map((cartItem) =>
                cartItem.id === book.id
                  ? { ...cartItem, count: cartItem.count + 1 }
                  : cartItem
              )
            : [...state.cart, { ...book, count: 1 }]
        });
      };

    const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id)
    });
  
    const increase = (id) => {
        setState({
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        });
      };
    
      const decrease = (id) => {
        setState({
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
              : cartItem
          )
        });
      };

      const emptyCart = () => {
        setState({
          ...state,
          cart : []
        });
      };

     
    return(
        <productContext.Provider value={{state,addToCart,removeFromCart,increase,decrease,emptyCart}}>
            {children}
        </productContext.Provider>
    )
}

export function useProduct(){
    return useContext(productContext);
}