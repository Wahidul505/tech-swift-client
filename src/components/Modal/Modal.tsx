import React from "react";

interface IProps {
  children: React.ReactNode | React.ReactElement;
  htmlFor: string;
  label: string;
  modalOpen: boolean;
  setModalOpen: (arg: boolean) => void;
  btnType: "view" | "delete";
}

const Modal = ({
  children,
  htmlFor,
  label,
  modalOpen,
  setModalOpen,
  btnType,
}: IProps) => {
  return (
    <>
      <label
        onClick={() => setModalOpen(true)}
        htmlFor={htmlFor}
        className={`rounded-xl cursor-pointer text-[#f1faee] transition-colors duration-500 border-none px-2 md:px-3 h-6 md:h-7 text-xs flex items-center ${
          btnType === "view" && "hover:bg-[#1d3557]  bg-[#457b9d]"
        } ${btnType === "delete" && "hover:bg-red-800  bg-red-700"}`}
      >
        {label}
      </label>

      {modalOpen && (
        <>
          <input type="checkbox" id={htmlFor} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box rounded-2xl">
              <div className="modal-action">
                <label
                  htmlFor={htmlFor}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-lg font-normal"
                >
                  x
                </label>
              </div>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
