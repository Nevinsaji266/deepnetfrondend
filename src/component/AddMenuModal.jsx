import React, { useState } from 'react';
import axios from 'axios';
import { serverUrl } from '../api';

const AddMenuModal = ({ fetchMenus, closeModal }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/menus`, { name, description });

      closeModal();
    } catch (error) {
      console.error('Error creating menu', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">
          Add Menu
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Menu Name */}
          <div>
            <label
              className="block text-gray-300 font-medium mb-2"
              htmlFor="name"
            >
              Menu Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter menu name"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              className="block text-gray-300 font-medium mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter menu description"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="px-5 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Create Menu
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="px-5 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenuModal;
