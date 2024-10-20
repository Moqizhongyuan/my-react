import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import { useState } from "react";

export default function Login({
  setToken,
}: {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const login = function () {
    localStorage.setItem("token", account);
    setToken(account);
    navigate("/home");
  };
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className={style.login}>
        <h1>这是一个login界面</h1>
        <div className={style.inp}>
          <input
            type="text"
            value={account}
            onChange={(e) => {
              setAccount(e.target.value);
            }}
            name=""
            id=""
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name=""
            id=""
          />
        </div>
        <button onClick={() => login()}>登录</button>
      </div>
      {/* <div className={style.inp}>
        <input type="text" name="" id="" />
        <input type="password" name="" id="" />
      </div> */}
    </>
  );
}
