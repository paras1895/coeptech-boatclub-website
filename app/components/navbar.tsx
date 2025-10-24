import NavTop from "./navtop";
import Navbottom from "./navbottom";
import Navright from "./navright";

export default function Navbar() {
  const arr = [
    "Samarth Login",
    "COEP Mail",
    "MIS Login",
    "Moodle Login",
    "Disclosures",
    "RTI",
  ];

  const arr1 = ["Alumni", "Tenders", "Notices/Circulars"];

  return (
    <>
      <div
        style={{ backgroundColor: "#0a255c" }}
        className="sm:fixed top-0 left-0 sm:w-full sm:z-50 h-[33vh] sm:h-[10vh]"
      >
        {/* mobile */}
        {/* <div className="sm:hidden flex">
          <div className="flex h-full ">
            {arr.map((item) => (
              <div key={item} className="flex items-center h-full">
                <NavTop name={item} />
              </div>
            ))}
          </div>
          <div className="flex h-full ">
            {arr1.map((item) => (
              <div key={item} className="flex items-center h-full">
                <NavTop name={item} />
              </div>
            ))}
          </div>
        </div> */}

        <nav className="bg-[#0a255c] text-white w-full md:hidden text-[9px]">
          {/* Collapsible Menu */}
          <div className="">
            <div className="flex flex-wrap px-[30px] h-[10vh]">
              <div className="border-l-2 border-r-1 border-[#1C3F85] px-[10px]">Samarth Login</div>
              <div className="border-l-2 border-r-1 border-[#1C3F85] px-[10px]">COEP Mail</div>
              <div className="border-l-2 border-r-1 border-[#1C3F85] px-[10px]">MIS Login</div>
              <div className="border-l-2 border-r-1 border-[#1C3F85] px-[10px]">Moodle Login</div>
              <div className="border-l-2 border-r-1 border-[#1C3F85] px-[10px]">Mandatory disclosure</div>
              <div className="border-l-2 border-r-1 border-[#1C3F85] px-[10px]">RTI</div>
              <div className="border-l-2 border-r-1 border-[#1C3F85] px-[10px]">Alumni</div>
              <div className="border-l-2 border-r-1 border-[#1C3F85] px-[10px]">Tenders</div>
              <div className="border-l-2 border-r-1 border-[#1C3F85] px-[10px]">Notices/Circulars</div>
              <div className="border-l-2 border-r-1 border-[#1C3F85] px-[10px]">Contact Us</div>
            </div>

            {/* Accessibility & Language */}
            <div className="flex px-[30px]">
              <div className="flex space-x-1 border-1 border-[#1C3F85] p-[10px]">
                <button className="px-2">
                  -A
                </button>
                <button className="px-2">
                  A
                </button>
                <button className="px-2">
                  +A
                </button>
              </div>
              <select className="bg-[#0a255c] rounded px-2 py-1 border-1 border-[#1C3F85]">
                <option>English</option>
                <option>Marathi</option>
                <option>Hindi</option>
              </select>
            </div>

            {/* Search Bar */}
            <div className="relative mt-3 px-5">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white w-full rounded-full py-[3px] pl-4 pr-8 text-black focus:outline-none"
              />
            </div>

            <div className="flex justify-between items-center h-[15vh] px-3">
              {/* Logo and Name */}
              <div className="flex items-center space-x-3">
                <img
                  src="2.svg"
                  alt="COEP Logo"
                  className="h-15 w-15"
                />
                <div className="text-[13px] leading-tight pb-[10px]">
                  <h1 className="font-semibold pb-[5px]">
                    COEP Technological University
                  </h1>
                  <p className="text-[8px] text-gray-200">
                    A Unitary Public University of Government of <br /> Maharashtra (Formerly College of Engineering Pune)
                  </p>
                </div>
              </div>

              {/* Hamburger Icon */}
              <img src="5.png" alt="" className="h-4 pr-[20px] mb-[10px]" />
            </div>
          </div>
        </nav>

        {/* pc */}
        {/* samarth login, coep main, moodle login, etc */}
        <div className="sm:pl-[6vw] sm:flex hidden items-center h-[20vh] sm:h-[5vh]">
          <div className="flex h-full ">
            {arr.map((item) => (
              <div key={item} className="flex items-center h-full">
                <NavTop name={item} />
              </div>
            ))}
          </div>
          {/* search bar */}
          <div className="pl-[12px] hidden sm:block font-light text-[12px]">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-300 w-[100px] h-[3vh] rounded-xl"
            />
          </div>
          {/* RTI, Alumni, Tenders, etc. */}
          <div className="hidden sm:flex sm:h-full ">
            {arr1.map((item) => (
              <div key={item} className="flex items-center h-full">
                <NavTop name={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end w-full">
          {/* COEP logo and name */}
          <Navbottom />
          {/* About Us, Administration, Admission, etc. */}
          <Navright />
        </div>
      </div>
    </>
  );
}
