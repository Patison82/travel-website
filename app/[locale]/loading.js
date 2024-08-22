const loading = () => {
  return (
    <div className=" min-h-[40rem] flex justify-center items-center">
      <span className="font-bold">Please wait...</span>
      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};
export default loading;
