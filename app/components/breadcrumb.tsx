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
        <div
          style={{
            fontFamily:
              "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          }}
          className="flex align-middle pt-[20px] pl-[5px] pb-[10px] text-[14px]"
        >
          <a href="#">Home</a> <img src="4.svg" alt="" className="h-6" />
          <a href="#">Student Corner</a>{" "}
          <img src="4.svg" alt="" className="h-6" />
          <a href="#">Student Clubs</a>{" "}
          <img src="4.svg" alt="" className="h-6" />
          <span>Boat Club</span>
        </div>
      </nav>
    </>
  );
}
