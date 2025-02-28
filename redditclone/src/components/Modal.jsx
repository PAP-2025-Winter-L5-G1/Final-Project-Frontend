import { useState } from "react";

export default function Modal({ Content, buttonText, st }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className={st?"rounded-lg bg-black py-2 px-14 border border-transparent text-center text-sm text-white":
          "rounded-lg bg-black py-2 px-10 border border-transparent text-center text-sm text-white"}//true is for add comments btn false is for add post btn
      >
        {buttonText}
      </button>


      {open ? (
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300`}
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevent click propagation
            className="relative m-4 p-4 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm"
          >
            <div className=" grid justify-items-center">
              <Content closeHandler={() => setOpen(false)}/>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
