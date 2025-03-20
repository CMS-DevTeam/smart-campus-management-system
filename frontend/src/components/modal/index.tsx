import { useModal } from "../../context/ModalContext";

type ModalProps = {
  title?: string;
}

const ModalComponent = ({ title } : ModalProps) => {
  const { isOpen, content, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div onClick={closeModal} className="fixed inset-0 bg-[#00000075] flex justify-center items-center z-50 modal-overlay ">
      <div onClick={(e) => e.stopPropagation()} className="max-w-[600px] w-full max-h-[90vh] bg-white rounded-lg shadow-lg relative overflow-hidden">
        <div className="flex items-center justify-between h-16 px-6 rounded-tl-lg rounded-tr-lg border-b border-neutral-300">
          <div className="font-medium text-xl">{title}</div>
          <button
            onClick={closeModal}
            className="flex items-center justify-center cursor-pointer top-2 right-2 text-xl font-bold rounded-full w-10 h-10 text-sky-800 hover:bg-sky-100 transition"
          >
            <i className="material-icons">close</i>
          </button>
        </div>
        <div className="p-0 h-[80vh] overflow-y-auto">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
