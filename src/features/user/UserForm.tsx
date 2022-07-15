import { useEffect, useRef } from "react";
import { getUser } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUser } from "./userSlice";
import { useSelector } from "react-redux";
import { User } from "./User";

export const UserForm = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(user);
  });
  return (
    <div>
      <input ref={userRef} type="text" />
      <button
        onClick={async () => {
          await dispatch(getUser(userRef.current!.value));
        }}
      >検索</button>
      <User user={user}/>
    </div>
  );
};
