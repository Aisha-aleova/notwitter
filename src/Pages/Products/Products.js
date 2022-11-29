import "./Products.css";
import {ContextData} from "../../Context/Context";
import { useContext } from "react";

function Products(){
    
    const {product, products, handleInput, handleRasm, handleSend, add, setAdd} = useContext(ContextData);

    return(
        <section className="ProductsPage">
            <div className="AddButtonDiv">
                <button onClick={()=>setAdd(true)}>Add a Product</button>
            </div>
            {add ?
                <div onClick={()=>setAdd(false)} className="AddModal">
                    <div className="ModalForm" onClick={(e)=>{e.stopPropagation()}}>
                    <div className="Exit">
                        <p onClick={()=>setAdd(false)}>X</p>
                    </div>
                    <div className="FormDiv">
                        <form onSubmit={(e)=>handleSend(e)}>
                            <input type="text" name="name" value={product.name} placeholder="Product Name" onInput={(e)=>handleInput(e)}/>
                            <input type="text" name="description" value={product.description} placeholder="Product Description" onInput={(e)=>handleInput(e)}/>
                            <input type="number" name="price" value={product.price} placeholder="Price in $" onInput={(e)=>handleInput(e)}/>
                            <input type="file" name="picture" placeholder="Image" onInput={(e)=>handleRasm(e)}/>
                            <input type="submit"/>
                        </form>
                    </div>
                    </div>
                </div> :<></>
            }
            <div className="productCards">
                {
                    products.map((item, index)=>(
                        <div key={index} className="card">
                            <figure>
                                <img src={item.picture} alt="pic" />
                            </figure>
                            <p>{item.name}</p>
                            <p>{item.description.length>20 ? item.description.slice(0, 20)+"..." :  item.description}</p>
                            <p>${item.price}</p>                      
                        </div>
                    ))
                }

            </div>
            
        </section>
    )
}
export default Products;