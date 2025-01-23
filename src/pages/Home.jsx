import React, { useState } from 'react';
import AddMenuModal from '../component/AddMenuModal';
import AddMenuItemModal from '../component/AddMenuItemModal';

const Home = () => {
  const [showAddMenuModal, setShowAddMenuModal] = useState(false);
  const [showAddMenuItemModal, setShowAddMenuItemModal] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState(null);

  const handleAddMenu = () => setShowAddMenuModal(true);
  const handleCloseMenuModal = () => setShowAddMenuModal(false);

  const handleAddMenuItem = () => {
    setShowAddMenuItemModal(true); // Show modal to add menu item
  };

  const handleCloseMenuItemModal = () => setShowAddMenuItemModal(false);

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-6">
      <div
        className="w-full max-w-lg bg-gradient-to-br from-gray-500 to-black rounded-lg shadow-lg p-8"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Menu Management</h1>
          <p className="text-sm text-gray-400 mt-2">
            Organize and customize menus with ease!
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleAddMenu}
            className="w-full py-3 bg-indigo-500 text-white text-lg font-semibold rounded-md hover:bg-indigo-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Create Menu
          </button>

          <button
            onClick={handleAddMenuItem}
            className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Add Menu Item
          </button>
        </div>
      </div>

      {/* Add Menu Modal */}
      {showAddMenuModal && <AddMenuModal closeModal={handleCloseMenuModal} />}

      {/* Add Menu Item Modal */}
      {showAddMenuItemModal && (
        <AddMenuItemModal
          closeModal={handleCloseMenuItemModal}
          setSelectedMenuId={setSelectedMenuId}
          selectedMenuId={selectedMenuId}
        />
      )}
    </div>
  );
};

export default Home;
