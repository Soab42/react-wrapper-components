"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";

export default function DynamicModalButton({
  children,
  className = "bg-gradient-to-r from-emerald-200 to-teal-400 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 hover:dark:from-gray-800 hover:dark:via-slate-800 hover:dark:to-gray-700 dark:text-gray-400",
  buttonText = "Add New",
  modalClassName = "backdrop-blur-xl shadow-md shadow-black/10 bg-emerald-50 dark:bg-gray-800 rounded-xl",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const onDismiss = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        onDismiss();
      }
    },
    [onDismiss]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <button
        className={`${className} p-1 px-4 rounded-full`}
        onClick={() => setIsOpen(true)}
      >
        {buttonText}
      </button>

      {isOpen && (
        <div
          ref={overlay}
          className="fixed z-50 h-screen w-screen top-0 left-0 bg-black/40 backdrop-blur-sm flex justify-center items-center"
          onClick={onClick}
        >
          <div
            ref={wrapper}
            className="flex justify-center items-center h-full w-full overflow-y-scroll mx-auto my-auto"
          >
            <div className={modalClassName}>
              <div className="p-4">
                <div className="p-4">
                  {React.isValidElement(children)
                    ? React.cloneElement(children, {
                        isOpen,
                        setIsOpen,
                      })
                    : children || null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
