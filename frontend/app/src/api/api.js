import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,    
    // withCredentials: true,
})

console.log("REact base url :", process.env.REACT_APP_BASE_URL);

export const createItem = async (formData) => {
    try {
      await api.post(`/items/`, formData);
      alert("Item created successfully!");
    } catch (error) {
      alert("Failed to create item.");
      console.error(error);
    }
};

export const readItem = async (item_id) => {
    try {
      const response = await api.get(`/items/${item_id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      alert("Failed to read item.");
      console.error(error);
    }
};

export const updateItem = async (item_id, updateData) => {
    try {
      await api.put(`/items/${item_id}`, updateData);
      alert("Item updated successfully!");
    } catch (error) {
      alert("Failed to update item.");
      console.error(error);
    }
};

export const deleteItem = async (item_id) => {
    try {
        await api.delete(`/items/${item_id}`);
        alert("Item deleted successfully!");
      } catch (error) {
        alert("Failed to delete item.");
        console.error(error);
      }
};

export default api;