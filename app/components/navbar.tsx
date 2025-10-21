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
        className="fixed top-0 left-0 w-full z-50 h-[10vh]"
      >
        <div className="pl-[6vw] flex items-center h-[5vh]">
          <div className="flex h-full ">
            {arr.map((item) => (
              <div key={item} className="flex items-center h-full">
                <NavTop name={item} />
              </div>
            ))}
          </div>
          <div className="pl-[12px] font-light text-[12px]">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-300 w-[100px] h-[3vh] rounded-xl"
            />
          </div>
          <div className="flex h-full ">
            {arr1.map((item) => (
              <div key={item} className="flex items-center h-full">
                <NavTop name={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end w-full">
          <Navbottom />
          <Navright />
        </div>
      </div>
    </>
  );
}
