const Modal = ({ setModalOn, setChoice }) => {
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  return (
    <div className="  bg-stone-900 opacity-90 fixed  inset-0 z-50   ">
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
