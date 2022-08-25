import React, { useRef, useState } from "react";
import { FiEdit2 } from "react-icons/fi";

export function Profile() {
  return (
    <>
      <h1 className="font-bold text-2xl mb-6">Profile</h1>
      <div className="w-100 flex-grow max-w-[60em] bg-white px-12">
        <form className="mb-4">
          <div className="flex flex-row justify-center items-center w-full pb-8">
            <ImagePicker />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col flex-grow">
              <label htmlFor="f_name">First Name</label>
              <EditableInput id="f_name" type="text" placeholder="First Name" />
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="l_name">Last Name</label>
              <EditableInput id="l_name" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <EditableInput id="email" type="text" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="bday">Birthday</label>
            <EditableInput id="bday" type="date" placeholder="Date" />
          </div>
        </form>
        <div className="w-full flex justify-center items-center">
          <button className="rounded bg-black text-white hover:bg-white hover:text-black px-10 py-3 text-sm">
            Update
          </button>
        </div>
      </div>
    </>
  );
}

interface EditableInputProps extends React.HTMLProps<HTMLInputElement> {}

function EditableInput({ className, ...rest }: EditableInputProps) {
  const [disable, setDisable] = useState(true);
  const input = useRef<HTMLInputElement>(null);

  const focus = () => {
    setTimeout(() => {
      if (input.current) {
        input.current.focus();
        input.current.select();
      }
    }, 100);
  };

  return (
    <div className={`flex flex-row justify-center items-center ${className}`}>
      <input
        ref={input}
        className={`rounded w-full ${disable ? "border-0 bg-transparent" : ""}`}
        disabled={disable}
        {...rest}
      ></input>
      <FiEdit2
        className="p-2 bg-gray-300 rounded-full mx-3 hover:bg-gray-400 cursor-pointer"
        size={32}
        onClick={() => {
          setDisable((prev) => {
            return !prev;
          });
          focus();
        }}
      />
    </div>
  );
}

function ImagePicker() {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div
      className="relative w-[8em] h-[8em] rounded-full border border-black overflow-hidden"
      onMouseEnter={() => setShowEdit(true)}
      onMouseLeave={() => setShowEdit(false)}
    >
      <img
        src="https://media.istockphoto.com/photos/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter-picture-id1311084168?b=1&k=20&m=1311084168&s=170667a&w=0&h=mE8BgXPgcHO1UjSmdWYa21NIKDzJvMrjOffy39Ritpo="
        alt="Avatar"
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute top-0 w-full h-full bg-[#000000a2] flex flex-col justify-center items-center cursor-pointer ${
          showEdit ? "" : "hidden"
        }`}
      >
        <FiEdit2 color="white" size={30} />
        <div className="text-white">Edit</div>
      </div>
    </div>
  );
}
