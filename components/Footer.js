import React from "react";

function Footer() {
  return (
    <>
    <div className="bg-[#e21c23] md:h-[6rem] h-[10rem] w-full px-4">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="w-1/2">
          <img src="/images/logo-footer.png" className="pt-6" />
        </div>
        <div className="flex lg:flex-row flex-wrap  gap-4 w-full lg:justify-end justify-center items-center">
          <div className="text-white lg:text-xl text-sm">ไอศกรีมของเรา</div>
          <div className="text-white  lg:text-xl text-sm">สิทธิพิเศษ</div>
          <div className="text-white  lg:text-xl text-sm">รีวอร์ด</div>
          <div className="text-white  lg:text-xl text-sm">คูปองของฉัน</div>
          <div className="text-white  lg:text-xl text-sm">บัตรของขวัญ</div>
          <div className="text-white  lg:text-xl text-sm">บัตรสเวนเซ่นส์การ์ด</div>
          <div className="text-white  lg:text-xl text-sm">ข้อมูลของฉัน</div>
        </div>
      </div>
    </div>
    <div className="bg-[#cb191f] h-[4rem] w-full px-4">
    <div className="flex  lg:justify-between items-center">
      <div className="w-1/2">
        <img src="/images/social.png" className="pt-3" />
      </div>
      <div className="flex gap-4 w-full justify-end items-center">
        <div className="text-white  lg:text-lg text-xs">คำถามที่พบบ่อย</div>
        <div className="text-white  lg:text-lg text-xs">ข้อกำหนดการใช้งาน</div>
        <div className="text-white  lg:text-lg text-xs">นโยบายความเป็นส่วนตัว</div>
        
      </div>
    </div>
  </div>
  </>
  );
}

export default Footer;
