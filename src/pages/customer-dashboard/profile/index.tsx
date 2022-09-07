import React, { useEffect, useRef, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { useQuery } from "react-query";
import { CustomerAPI } from "../../customer/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toDateOnly } from "../../../utils/date-time";
import { uploadFile } from "../../../firebase";

const updateSchema = yup.object().shape({
  f_name: yup.string().max(255).required("First Name is required"),
  l_name: yup.string().max(255).required("Last Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  dob: yup.date().required("Date of Birth is required"),
  image: yup.string(),
});

export function Profile() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateSchema),
  });

  const profile_query = useQuery("profile", CustomerAPI.me, {
    onSuccess: (data) => {
      data.dob = toDateOnly(new Date(data.dob));
      reset(data);
      console.log(data);
    },
  });

  const [image, setImage] = useState("");

  useEffect(() => setValue("image", image), [image]);

  return (
    <>
      <h1 className="font-bold text-2xl mb-6">Profile</h1>
      <div className="w-100 flex-grow max-w-[60em] bg-white px-12">
        <form className="mb-4">
          <div className="flex flex-row justify-center items-center w-full pb-8">
            <ImagePicker
              currentImage={image}
              setImage={(image) => setImage(image)}
            />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col flex-grow">
              <label htmlFor="f_name">First Name</label>
              <EditableInput
                id="f_name"
                type="text"
                placeholder="First Name"
                {...register("f_name")}
              />
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="l_name">Last Name</label>
              <EditableInput
                id="l_name"
                type="text"
                placeholder="Last Name"
                {...register("l_name")}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <EditableInput
              id="email"
              type="text"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="bday">Birthday</label>
            <EditableInput
              id="bday"
              type="date"
              placeholder="Date"
              {...register("dob")}
            />
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

const EditableInput = React.forwardRef<HTMLInputElement, EditableInputProps>(
  ({ className, ...rest }: EditableInputProps, input_ref) => {
    const [disable, setDisable] = useState(true);
    const input = useRef<any>(input_ref);

    const focus = () => {
      /* setTimeout(() => {
      if (input.current) {
        input.current.focus();
        input.current.select();
      }
    }, 100); */
    };

    return (
      <div className={`flex flex-row justify-center items-center ${className}`}>
        <input
          {...rest}
          ref={input_ref}
          className={`rounded w-full ${
            disable ? "border-0 bg-transparent" : ""
          }`}
          disabled={disable}
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
);

interface ImagePickerProps {
  currentImage: string;
  setImage: (image: string) => void;
}

function ImagePicker({ currentImage, setImage }: ImagePickerProps) {
  const [showEdit, setShowEdit] = useState(false);
  const [status, setStatus] = useState("");

  const default_image =
    "https://media.istockphoto.com/photos/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter-picture-id1311084168?b=1&k=20&m=1311084168&s=170667a&w=0&h=mE8BgXPgcHO1UjSmdWYa21NIKDzJvMrjOffy39Ritpo=";

  const pick_image = async () => {
    const picker_options = {
      types: [
        {
          description: "Images",
          accept: {
            "image/*": [".png", ".gif", ".jpeg", ".jpg"],
          },
        },
      ],
      excludeAcceptAllOption: true,
      multiple: false,
    };

    let files = await window.showOpenFilePicker(picker_options);
    console.log(files);
    if (files.length < 1) {
      return;
    }
    console.log(files);
    let image = await files[0].getFile();

    if (image.size > 2 * 1024 * 1024) {
      setStatus("Image is larger than 2MB");
      return;
    }

    try {
      let [_, url] = await uploadFile(image);
      setImage(url);
      console.log(url);
    } catch (e) {
      setStatus("Error. Try again later.");
      return;
    }

    setStatus("");
  };

  return (
    <div
      className="relative w-[8em] h-[8em] rounded-full border border-black overflow-hidden"
      onMouseEnter={() => setShowEdit(true)}
      onMouseLeave={() => setShowEdit(false)}
    >
      <img
        src={currentImage || default_image}
        alt="Avatar"
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute top-0 w-full h-full bg-[#000000a2] flex flex-col justify-center items-center cursor-pointer ${
          showEdit ? "" : "hidden"
        }`}
        onClick={pick_image}
      >
        <FiEdit2 color="white" size={30} />
        <div className="text-white">Edit</div>
      </div>
    </div>
  );
}
