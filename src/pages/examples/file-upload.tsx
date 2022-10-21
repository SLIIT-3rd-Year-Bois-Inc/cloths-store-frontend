import React, { useRef, useState } from "react";
import { uploadFile } from "../../firebase";

export function FileUpload() {
  const file_input_ref = useRef<HTMLInputElement>(null);
  const [state, setState] = useState("Ready.");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setState("Uploading...");
    if (file_input_ref.current) {
      // Get the file dom reference
      let file_input = file_input_ref.current;

      // Check if file is set
      if (!file_input.files || file_input.files.length <= 0) {
        setState("You don't have a file selected.");
        return;
      }
      // Get file object
      let file = file_input.files[0];
      console.log(file);
      // Check the image size - 2MB for example
      if (file.size > 2 * 1024 * 1024) {
        setState(
          "You exceed the max file size. " +
            "Consider learning IT" +
            "So you can learn yourself how to code a image scaler. " +
            "Do it in C++ with web assembly, " +
            "So you can run it on a browser. " +
            "Now you can scale this image" +
            "To fit the requirement. " +
            "If you figure it out, " +
            "Hatsune miku will personally come to your home and" +
            "Give you a kiss. "
        );
        return;
      }

      // Finally upload it
      try {
        let [file_name, url] = await uploadFile(file);
        setState(`Uploaded file with name ${file_name} and URL is ${url}`);
      } catch (e) {
        setState("Some error here. Did you set firebase .env s?");
      }
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file" ref={file_input_ref} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </form>
      <div>{state}</div>
    </>
  );
}
