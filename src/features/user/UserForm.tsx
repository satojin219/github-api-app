import { useRef } from "react";
import { getUser } from "./userSlice";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";
import { User } from "./User";
import { Rings } from "react-loader-spinner";

export const UserForm = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const { user, status } = useSelector((state: any) => state.user);
  const dispatch = useAppDispatch();

  return (
    <div>
      <input ref={userRef} type="text" />
      <button
        onClick={async () => {
          await dispatch(getUser(userRef.current!.value));
        }}
      >
        検索
      </button>
      {status === "loading" ? (
        <Rings height="100" width="100" color="grey" ariaLabel="loading" />
      ) : (
        <User user={user} />
      )}
    </div>
  );
};
