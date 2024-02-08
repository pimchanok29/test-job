import React, { useState } from "react";
import { Input, DatePicker } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { BiSolidCheckCircle } from "react-icons/bi";
const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [gender, setGender] = useState("");
  const [check, setCheck] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setIsButtonDisabled(value === "" || lastname === "");
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastname(value);
    setIsButtonDisabled(name === "" || value === "");
  };
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
    console.log("Logging in with:", email, password);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="py-8 px-4 w-full h-full bg-[#f4f4f4]">
      <div className="flex justify-center">
        <div className="flex flex-col w-[30rem]">
          <img src="/images/logo-register.png" className="rounded-t-2xl" />
          <div className="bg-white h-full rounded-b-2xl px-8 py-6">
            <div className="flex items-center gap-4 pb-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <div className="">ชื่อ</div>
                <Input
                  placeholder="กรอกชื่อ"
                  className="h-[3rem] rounded-xl"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="">นามสกุล</div>
                <Input
                  placeholder="กรอกนามสกุล"
                  className="h-[3rem] rounded-xl"
                  value={lastname}
                  onChange={handleLastNameChange}
                />
              </div>
            </div>
            <div className="pb-2">อีเมล</div>
            <Input
              placeholder="กรอกอีเมล"
              className="h-[3rem] rounded-xl"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="py-2">รหัสผ่าน</div>
            <Input.Password
              className="h-[3rem] rounded-xl"
              placeholder="กรอกรหัสผ่าน"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="pt-2">
              <div>เพศ(ไม่ระบุได้)</div>
            </div>
            <div className="w-full flex  gap-4 py-4">
              <div
                className={`border ${
                  gender === "men"
                    ? "bg-[#e21c23]"
                    : "border-[#d2d2d2] bg-white"
                } rounded-full flex justify-center items-center py-2 px-8 w-fit h-fit cursor-pointer`}
                onClick={() => setGender("men")}
              >
                <div
                  className={`text-[#e21c23] ${
                    gender === "men" ? "text-white" : "text-[#e21c23]"
                  }`}
                >
                  ชาย
                </div>
              </div>
              <div
                className={`border ${
                  gender === "women"
                    ? "bg-[#e21c23]"
                    : "border-[#d2d2d2] bg-white"
                } rounded-full flex justify-center items-center py-2 px-8 w-fit h-fit cursor-pointer`}
                onClick={() => setGender("women")}
              >
                <div
                  className={`text-[#e21c23] ${
                    gender === "women" ? "text-white" : "text-[#e21c23]"
                  }`}
                >
                  หญิง
                </div>
              </div>
              <div
                className={`border ${
                  gender === "no select"
                    ? "bg-[#e21c23]"
                    : "border-[#d2d2d2] bg-white"
                } rounded-full flex justify-center items-center py-2 px-8 w-fit h-fit cursor-pointer`}
                onClick={() => setGender("no select")}
              >
                <div
                  className={`text-[#e21c23] ${
                    gender === "no select" ? "text-white" : "text-[#e21c23]"
                  }`}
                >
                  ไม่ระบุ
                </div>
              </div>
            </div>
            <div className="pb-4 w-full">
              <div className="pb-2">ของขวัญวันเกิดรอคุณอยู่</div>
              <div className="w-full">
                <DatePicker
                  onChange={onChange}
                  className="w-full h-[3rem] rounded-xl"
                />
              </div>
            </div>
            <div className="pb-4">
              <div className="flex items-start gap-4">
                <div className="w-fit">
                  {check === "accept1" ? (
                    <BiSolidCheckCircle />
                  ) : (
                    <div
                      className="border border-[#e21c23] rounded-full w-4 h-4 flex cursor-pointer"
                      onClick={() => setCheck("accept1")}
                    ></div>
                  )}
                </div>
                <div className="w-full text-[#787878]">
                  ฉันได้อ่านและยอมรับ ข้อกำหนดการใช้งาน และ
                  นโยบายความเป็นส่วนตัว ของสเวนเซ่นส์{" "}
                </div>
              </div>
              <div className="flex items-start gap-4 pt-2">
                <div className="w-fit">
                  {check === "accept2" ? (
                      <BiSolidCheckCircle  />
                  ) : (
                    <div
                      className="border border-[#e21c23] rounded-full w-4 h-4 flex cursor-pointer"
                      onClick={() => setCheck("accept2")}
                    ></div>
                  )}
                </div>
                <div className="w-full text-[#787878]">
                  ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ
                  จากสเวนเซ่นส์และบริษัทในเครือ
                  โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ
                  สามารถศึกษาเงื่อนไขหรือข้อตกลง นโยบายความเป็นส่วนตัว
                  เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ
                </div>
              </div>
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

export default Register;
