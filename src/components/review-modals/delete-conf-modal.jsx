const Modal = ({ setModalOn, setDeleting }) => {
  const handleOKClick = () => {
    setModalOn(false);
    setDeleting(true);
  };
  const handleCancelClick = () => {
    setModalOn(false);
  };

  return (
    <div className=" fixed inset-0 bg-gradient-to-br from-gray-900/60 to-red-900/50  flex justify-center items-center backdrop-blur-sm ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col justify-center opacity-100 bg-white py-12 px-24 rounded-xl ">
          <div className="flex  text-lg  text-stone-900  font-bold mb-10">
            Are you sure you want to delete your review? <br /> This cannot be
            undone.
          </div>
          <div className="flex">
            <button
              onClick={handleOKClick}
              className=" rounded px-4 py-2 text-white  bg-red-600 h-12 w-32"
            >
              Delete
            </button>
            <button
              onClick={handleCancelClick}
              className="rounded px-4 py-2 ml-4 text-white bg-stone-900 h-12 w-32"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
