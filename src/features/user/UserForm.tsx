import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchByName } from "./userAPI";

export const UserForm = () => {
  const dispatch = useDispatch();
  const userRef = useRef(null);
  return (
    <div>
      <input ref="userRef" type="text" />
      <button
        onClick={async () => {
          dispatch(fetchByName("sa"));
        }}
      ></button>
    </div>
  );
};
