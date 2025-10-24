export default function Breadcrumb() {
  return (
    <>
      <nav
        style={{
          fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        }}
        className="no-underline text-[#0a255c] font-light text-sm pl-[20px]"
      >
        {/* pc */}
        <div
          style={{
            fontFamily:
              "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          }}
          className="align-middle hidden sm:flex pt-[20px] pl-[5px] pb-[20px] text-[14px]"
        >
          <a href="#">Home</a> <img src="4.svg" alt="" className="h-6" />
          <a href="#">Student Corner</a>{" "}
          <img src="4.svg" alt="" className="h-6" />
          <a href="#">Student Clubs</a>{" "}
          <img src="4.svg" alt="" className="h-6" />
          <span>Boat Club</span>
        </div>
        {/* mobile */}
        <div
          style={{
            fontFamily:
              "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          }}
          className="items-center flex-wrap sm:hidden flex py-[20px] pl-[5px] pb-[20px] text-[14px]"
        >
          <div>Home</div> <img src="4.svg" alt="" className="h-6" />
          <div>Student Corner</div>{" "}
          <img src="4.svg" alt="" className="h-6" />
          <div>Student Clubs</div>{" "}
          <img src="4.svg" alt="" className="h-6" />
          <div className="w-full pt-[10px]">Boat Club</div>
        </div>
      </nav>
    </>
  );
}
