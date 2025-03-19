import React from 'react';
import { useModal } from "../../context/ModalContext";

interface DeleteConfirmationModalProps {
  user: { firstName: string; lastName: string; };
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ user, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-[#00000075] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold">Are you sure?</h2>
        <p className="mt-4">Are you sure you want to delete the user <strong>{user.firstName} {user.lastName}</strong>?</p>
        <div className="mt-6 flex justify-end space-x-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onCancel}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
