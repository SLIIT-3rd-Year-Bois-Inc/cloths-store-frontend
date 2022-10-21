import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { uploadFile } from "../../../firebase";

export interface ImagePickerProps {
  currentImage: string;
  setImage: (image: string) => void;
}

export function ImagePicker({ currentImage, setImage }: ImagePickerProps) {
  const [showEdit, setShowEdit] = useState(false);
  const [status, setStatus] = useState("");

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
      className="relative w-[8.5em] h-[8.5em] rounded-full border border-black overflow-hidden"
      onMouseEnter={() => setShowEdit(true)}
      onMouseLeave={() => setShowEdit(false)}
    >
      <div className="w-full h-full flex justify-center items-center text-center font-bold">
        {currentImage ? (
          <img
            src={currentImage}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            No image <br></br> Click to add <br></br> +{" "}
          </>
        )}
      </div>
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
