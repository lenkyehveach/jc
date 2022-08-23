import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { XIcon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ show, onClose, scrollLock, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };
  const modalConent = show ? (
    <div className="absolute top-0 left-0 h-screen w-screen bg-white z-30 flex flex-col items-end no-scroll">
      <button className="h-12 w-12 mt-2 mr-2" onClick={handleClose}>
        <XIcon className="h-12 w-12 text-blue-500 " />
      </button>
      {children}
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalConent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
