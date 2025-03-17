import { useModal } from "../../context/ModalContext";

const ModalComponent = () => {
  const { isOpen, content, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div onClick={closeModal} className="fixed inset-0 bg-[#00000075] flex justify-center items-center z-50">
      <div onClick={(e) => e.stopPropagation()} className="overflow-y-auto max-w-[600px] w-full max-h-[90vh] bg-white p-6 rounded-lg shadow-lg relative w-96">
        <button
          onClick={closeModal}
          className="cursor-pointer absolute top-2 right-2 text-xl font-bold"
        >
          ✖
        </button>
        {content}
      </div>
    </div>
  );
};

export default ModalComponent;
