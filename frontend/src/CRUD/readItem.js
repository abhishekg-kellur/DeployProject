import { readItem } from "../API/api";
import { useState } from "react";

const ReadItemForm = () => {
    const [itemId, setItemId] = useState();
    const [item, setItem] = useState();

    const fetchItems = async () => {
        const response = await readItem(itemId);
        setItem(response);
        console.log("from readItem:", item);
    };

    return (
      <div>
        <h3>Get Items</h3>
        <p>Click the button to fetch item.</p>
        <input type="number" placeholder="Item ID" value={itemId} onChange={(e) => setItemId(e.target.value)} required />
        <button onClick={(fetchItems)}>Fetch Item</button>
        {item ? (
          <ul>
            <li key={item.id}>{item.name} - {item.description}</li>
          </ul>
        ) : (
          <p>No item fetched yet.</p>
        )}
      </div>
    );
}

export default ReadItemForm;