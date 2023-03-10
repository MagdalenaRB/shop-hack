import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';
import "./CreateProduct.css";

const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(null);

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };
    const handlePriceChange = (event) => {
        let priceInput = event.target.value;
        setPrice(priceInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newProduct = {title, description, price};
        productHandler.addProduct(newProduct);
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input name="title" type="text" onChange={handleTitleChange} />
            <label htmlFor="description">Description</label>
            <input name="description" type="text" onChange={handleDescriptionChange} />
            <label htmlFor="price">Price</label>
            <input name="price" type="text" onChange={handlePriceChange}/>
            <button type="submit">
                Upload
            </button>
        </form>
    );
};

export default CreateProduct;