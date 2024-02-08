import React from "react";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsQrCodeScan } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";
import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  return (
    <div className="w-full h-full">
      <div className="bg-white h-fit w-full  px-4 pb-4 lg:pb-0">
        <div className="flex lg:justify-between justify-center items-center w-full ">
          <div className="lg:hidden flex  h-full">
            <div className="w-full h-full">
              <BsQrCodeScan className="h-[1.5rem] w-[1.5rem] " />
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-start">
            <img src="/images/logo.png" className="cursor-pointer" onClick={()=>router.push("/")}/>
          </div>
          <div className="lg:hidden  h-full flex gap-4">
            <div className="w-full h-full">
              <HiOutlineShoppingBag className="h-[1.5rem] w-[1.5rem]" />
            </div>
            <div className="w-full h-full">
              <lgOutlineMenu className="h-[1.5rem] w-[1.5rem]" />
            </div>
          </div>
          <div className="lg:flex  hidden gap-4 w-full justify-end items-center">
            <div className="flex gap-2 items-center w-full xl:justify-end">
              <lgLocationOn className="w-5 h-5" />
              <div className="text-[#787878]">กรุณาเลือกที่อยู่จัดส่ง</div>
            </div>
            <div className="w-full flex justify-center gap-4">
              <div
                className="border border-[#e21c23] rounded-full flex justify-center items-center py-2 px-4 w-fit h-fit cursor-pointer"
                onClick={() => router.push("/Register")}
              >
                <div className="text-[#e21c23] text-sm">สมัครสมาชิก</div>
              </div>
              <div
                className=" bg-[#e21c23] rounded-full flex justify-center items-center py-2 px-4 w-fit h-fit cursor-pointer"
                onClick={() => router.push("/Login")}
              >
                <div className="text-white text-sm">เข้าสู่ระบบ</div>
              </div>
            </div>
            <div className="w-fit">
              <div className="text-[#787878]">TH</div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden gap-2 items-center w-full">
          <lgLocationOn className="w-5 h-5" />
          <div className="text-[#787878]">กรุณาเลือกที่อยู่จัดส่ง</div>
        </div>
      </div>
    </div>
  );
}

export default index;
