import React, { useEffect, useRef } from "react";

import "./dialog.style.css";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.addEventListener("close", onClose);
    return () => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [onClose]);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <React.Fragment>
      <dialog className="dialog" ref={dialogRef}>
        <header className="window-header">
          <h2>Plano de estudos</h2>
        <div className="btn-close-wrapper">
          <button autoFocus onClick={onClose} className="btn-close" aria-label="Fechar">
            <IconClose />
          </button>
        </div>
        </header>
        <div className="body">{children}</div>
      </dialog>
    </React.Fragment>
  );
}
