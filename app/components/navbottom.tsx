export default function Navbottom() {
  return (
    <>
      <div className="hidden sm:block sm:pl-[5vw] sm:w-[45vw] sm:h-[15vh] bg-[#0a255c] sm:rounded-br-[50px]">
        <div className="flex sm:pt-[1.5vh]">
          <img src="2.svg" alt="image" className="pr-[1vw] h-[5vh] sm:h-[12vh]"/>
          <div
            style={{ fontFamily: "Times New Roman, Sans-serif" }}
            className="text-white pt-[10px]"
          >
            <div className="font-bold text-[10px] sm:text-[2.5vh]">
              COEP Technological University
            </div>
            <div className="text-[11px] font-medium">A Unitary Public University of Government of</div>
            <div className="text-[11px] font-medium">
              Maharashtra (Formerly College of Engineering Pune)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
