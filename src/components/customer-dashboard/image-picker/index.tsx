import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { uploadFile } from "../../../firebase";

export interface ImagePickerProps {
  currentImage: string;
  setImage: (image: string) => void;
}

export function ImagePicker({ currentImage, setImage }: ImagePickerProps) {
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
