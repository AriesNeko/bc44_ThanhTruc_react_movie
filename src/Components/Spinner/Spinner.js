import React from "react";
import { useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerSlice);

  return isLoading ? (
    <div
      style={{ backgroundColor: "#D7BBF5" }}
      className="w-screen h-screen fixed top-0 left-0 z-20 flex justify-center items-center"
    >
      <BounceLoader color="rgba(18, 12, 230, 1)" size={100} />
    </div>
  ) : (
    <></>
  );
}
