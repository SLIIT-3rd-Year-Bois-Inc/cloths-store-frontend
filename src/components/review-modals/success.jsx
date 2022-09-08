const Success = ({ setModalOn, setChoice }) => {
  const handleOKClick = () => {
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  return (
    <div className=" fixed inset-0 bg-gradient-to-br from-gray-900/60 to-red-900/50  flex justify-center items-center backdrop-blur-sm ">
      <div className="flex h-screen justify-center items-center ">
        <div className="bg-gradient-to-br from-green-600/70 to-lime-400/70 p-10 rounded-xl">
          <div className="flex-col justify-center opacity-100 bg-white py-12 px-24 rounded-xl ">
            <div className="flex  text-lg  text-stone-900  font-bold mb-10">
              Your review is added successfully
            </div>
            <div className="flex ">
              <button
                onClick={handleOKClick}
                className=" rounded px-4 py-2 text-white  bg-stone-600 h-12 w-32"
              >
                update
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
    </div>
  );
};

export default Success;
