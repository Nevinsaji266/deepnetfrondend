import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '../api';

const AddMenuItemModal = ({ closeModal, setSelectedMenuId, selectedMenuId }) => {
  const [menus, setMenus] = useState([]);
  const [menuItem, setMenuItem] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  useEffect(() => {
    // Fetch the list of menus only when the modal opens
    const fetchMenusFromServer = async () => {
      try {
        const response = await axios.get(`${serverUrl}/menus`);
        setMenus(response.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenusFromServer();
  }, []);

  const handleAddMenuItem = async (e) => {
    e.preventDefault();

    if (!menuItem || !itemDescription || !itemPrice || !selectedMenuId) return;

    try {
      await axios.post(`${serverUrl}/menu-items`, {
        name: menuItem,
        description: itemDescription,
        price: itemPrice,
        menuId: selectedMenuId,
      });

      closeModal(); // Close the modal
    } catch (error) {
      console.error('Error adding menu item:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 rounded-lg shadow-xl w-96 text-white">
        <h3 className="text-2xl font-semibold mb-4 text-center">Add Item to Menu</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Select Menu</label>
          <select
            value={selectedMenuId}
            onChange={(e) => setSelectedMenuId(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          >
            <option value="">-- Select a Menu --</option>
            {menus.map((menu) => (
              <option key={menu._id} value={menu._id}>
                {menu.name}
              </option>
            ))}
          </select>
        </div>

        {selectedMenuId && (
          <form onSubmit={handleAddMenuItem}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Menu Item Name</label>
              <input
                type="text"
                value={menuItem}
                onChange={(e) => setMenuItem(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="number"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={closeModal}
                className="px-6 py-2 bg-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-600 transition duration-200 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition duration-200 focus:outline-none"
              >
                Add Item
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddMenuItemModal;
