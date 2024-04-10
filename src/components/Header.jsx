import React from "react";

export default function Header() {
  return (
    <div className="shadow-lg p-6 mb-5 bg-body rounded">
      <div class="flex justify-center ">
        <div class="self-center top-0 max-w-full">
          <div class="flex justify-between items-center text-gray-700">
            <div class="mx-2 my-4 ">
              {/* <ion-icon
                name="logo-pwa"
                class="text-5xl text-blue-600 hover:text-stone-600"
              ></ion-icon> */}
            </div>
            <ul class="hidden md:flex items-center text-[18px] font-semibold pr-10">
              <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/">หลักสูตรรัฐประศาสนศาสตร์</a>
              </li>
              <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/">หน้าหลัก</a>
              </li>
              <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/about">เกี่ยวกับ</a>
              </li>
              <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/teacher">อาจารย์ผู้รับผิดชอบหลักสูตร</a>
              </li>
              <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="/ai">AI ตรวจวินิจฉัยโรค</a>
              </li>

              <div class="dropdown dropdown-end">
                <div
                  tabindex="0"
                  role="button"
                  class="btn btn-ghost rounded-btn"
                >
                  Dropdown
                </div>
                <ul
                  tabindex="0"
                  class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                  <li>
                    <a>Item 4</a>
                  </li>
                </ul>
              </div>

              <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                {/* <a href="/productlist">การประเมินนโยบายสาธารณะ</a> */}
                <a href="/productlist">การประเมินนโยบายสาธารณะ</a>
              </li>
              <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                <a href="#">ติดต่อ</a>
              </li>
              <li class="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl ">
                <a href="#">LogIn</a>
              </li>
              <li class="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                <a href="#">SignUp</a>
              </li>
            </ul>{" "}
            <button class="block p-3 mx-10 md:hidden hover:bg-gray-200 rounded-xl group">
              <div class="w-5 my-[3px] h-[3px] bg-gray-600 mb-[2px]"></div>
              <div class="w-5 my-[3px] h-[3px] bg-gray-600 mb-[2px]"></div>
              <div class="w-5 my-[3px] h-[3px] bg-gray-600"></div>
              <div class="absolute top-0 -right-full opacity-0 h-screen w-[60%] border bg-white group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
                <ul class="flex flex-col items-center text-[18px] pt-[60px]">
                  <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">Home</a>
                  </li>
                  <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">About Us</a>
                  </li>
                  <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">Our Services</a>
                  </li>
                  <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">Portfolio</a>
                  </li>
                  <li class="text-stone-600 hover:text-blue-600 hover:font-bold font-medium mx-4 my-1">
                    <a href="#">Contact</a>
                  </li>
                  <li class="text-blue-600 hover:text-white hover:bg-blue-600 mx-4 my-1 border-2 border-blue-600 px-2 rounded-2xl ">
                    <a href="#">LogIn</a>
                  </li>
                  <li class="text-white bg-blue-600 px-2 rounded-2xl mx-4 my-1 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600">
                    <a href="#">SignUp</a>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
