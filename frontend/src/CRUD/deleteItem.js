import { useState } from "react";
import { deleteItem } from "../API/api";

const DeleteItemForm = () => {
    const [itemId, setItemId] = useState("");

    const handleDelete = async (e) => {
        e.preventDefault();
        deleteItem(itemId);
    };

    return (
      <div>
        <h3>Delete Item</h3>
        <form onSubmit={handleDelete}>
            <input type="text" placeholder="Item ID" value={itemId} onChange={(e) => setItemId(e.target.value)} required />
            <button type="submit">Delete</button>
        </form>
      </div>
    );
}

export default DeleteItemForm;