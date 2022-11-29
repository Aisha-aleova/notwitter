import React from "react";
import { useState } from "react";


export const ContextData = React.createContext();

function ContextProvider({children}) {
    const [product, setProduct] = useState(
        {
            id: "",
            name: "",
            price: "",
            description: "",
            picture: ""
        }
    )
    const [add, setAdd] = useState(false);
    const [products, setProducts] = useState([]);

    let handleInput = (e) => {
        setProduct({
          ...product,
          [e.target.name]: e.target.value,
        });
      };
      let handleRasm = (e) => {
        setProduct({
          ...product,
          picture: URL.createObjectURL(e.target.files[0]),
        });
      };
      function handleSend(e){
        let same = false;
        e.preventDefault();
        products.forEach((item)=>{
          if(item.name === product.name){
            alert("bir xil ism");
            same = true;
          }
        })
        if(!same){
        if(product.ism !== "" && products.rasm !== "" && product.rasm !== ""){
        setProducts([...products, {...product, id: new Date().getTime()}]);
        setAdd(!add);
        }else{
          alert("info is not complete")
        }
    }
}


    return(
        <ContextData.Provider value={{product, products, handleInput, handleRasm, handleSend, add, setAdd}}>
            {children}
        </ContextData.Provider>
    )

}
export default ContextProvider;