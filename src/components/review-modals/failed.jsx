const Failed = ({ setModalOn2, setChoice2 }) => {
  const handleOKClick = () => {
    setChoice2(true);
    setModalOn2(false);
  };
  const handleCancelClick = () => {
    setChoice2(false);
    setModalOn2(false);
  };

  return (
    <div className=" fixed inset-0 bg-gradient-to-br from-gray-900/60 to-red-900/50  flex justify-center items-center backdrop-blur-sm ">
      <div className="flex h-screen justify-center items-center ">
        <div className="bg-gradient-to-br from-red-600/70 to-rose-800/70 p-10 rounded-xl">
          <div className="flex-col justify-center opacity-100 bg-white py-12 px-24 rounded-xl ">
            <div className="flex  text-lg  text-stone-900  font-bold mb-10">
              Operation Failed. Try again later
            </div>
            <div className="flex ">
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

export default Failed;
