import { createItem } from "../api/api";
import React, { useState } from "react";

const CreateItemForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        createItem(formData);
    };

    return (
      <div>
        <h3>Create Item</h3>
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Item Name" value={formData.name} onChange={handleChange} required />
            <input name="description" type="text" placeholder="Description" value={formData.description} onChange={handleChange} />
            <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
            <input name="quantity" type="number" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default CreateItemForm;