import React, { useState } from "react";
import { updateItem } from "../api/api";

const UpdateItemForm = () => {
    const [itemId, setItemId] = useState("");
    const [updateData, setUpdateData] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
    });

    const handleChange = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        updateItem(itemId, updateData);
    };

    return (
      <div>
        <h3>Update Item</h3>
        <form onSubmit={handleUpdate}>
            <input type="text" placeholder="Item ID" value={itemId} onChange={(e) => setItemId(e.target.value)} required />
            <input name="name" type="text" placeholder="Updated Name" value={updateData.name} onChange={handleChange} />
            <input name="description" type="text" placeholder="Updated Description" value={updateData.description} onChange={handleChange} />
            <input name="price" type="number" placeholder="Updated Price" value={updateData.price} onChange={handleChange} />
            <input name="quantity" type="number" placeholder="Updated Quantity" value={updateData.quantity} onChange={handleChange} />
            <button type="submit">Update</button>
        </form>
      </div>
    );
}

export default UpdateItemForm;