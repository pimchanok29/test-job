import React, { useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useRouter } from "next/router";

const Login = ({userEmail , userPassword}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsButtonDisabled(value === "" || password === "");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsButtonDisabled(email === "" || value === "");
  };

  const handleLogin = () => {
    userEmail(email);
    userPassword(password);
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="py-8 px-4 w-full h-screen bg-[#f4f4f4]">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <img src="/images/logo-login.png" className="rounded-t-2xl" />
          <div className="bg-white h-[20rem] rounded-b-2xl px-8 py-6">
            <div className="pb-2">อีเมล</div>
            <Input
              placeholder="กรอกอีเมล"
              className="h-[3rem]"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="py-2">รหัสผ่าน</div>
            <Input.Password
              className="h-[3rem]"
              placeholder="กรอกรหัสผ่าน"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="flex justify-end text-[#e21c23] py-2">
              ลืมรหัสผ่าน
            </div>
            <div
              className={`${
                isButtonDisabled ? "bg-[#f4f4f4] " : "bg-[#e21c23] "
              } rounded-full flex justify-center items-center py-2 px-4 w-full h-fit `}
              onClick={handleLogin}
              // disabled={isButtonDisabled}
            >
              <div className="text-white">เข้าสู่ระบบ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
