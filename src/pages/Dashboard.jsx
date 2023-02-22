import { Link, useLoaderData } from "react-router-dom"
import Product from "../components/Product";
import "./Dashboard.css"

const Dashboard = () => {
    const { products } = useLoaderData();

    return (
        <>
        {products.map((product) => (
          <Link key={product.id} to={`products/${product.id}`} title={product.title} className="product--link">
            <Product product={product} />
          </Link>
        ))}
      </>
    )
 }
    
 
export default Dashboard;

/* 
return data.map((product)=>{
    <>
    return(
        <div className="card" key={product.id}>
            <h3>{product.title}</h3>
            <h3>{product.description}</h3>
            <h3>{product.price}</h3>
            </div>
            <Link className="edit--link" to={`/editProduct/${product.id}`}>Editar
                {/* <EditIcon fontSize="large" color="inherit" /> *//* } */
                {/* <button onClick={()=> editProduct(product)}>Editar</button> */}
        /*     </Link>
            
            <button onClick={()=> editProduct(product)}>Editar</button>
            <button onClick={()=> deleteProduct(product)}>Borrar</button>
        </div>
    );
    </>
});
}; */ 