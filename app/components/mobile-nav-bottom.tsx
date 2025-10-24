export default function MobileNavBottom() {
  const arr1 = [
    "Aarya Raas",
    "Abhijaat Newsletter",
    "Arts and Crafts",
    "Astronomy Club",
    "BHAU's Innovation & Entrepreneurship Cell",
  ];

  const arr2 = [
    "Boat Club Quiz Club",
    "Civil Services Aspirant's Club",
    "COEP ACM",
  ];
  return (
    <>
      <div
        style={{
          fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        }}
        className="text-[14px] cursor-pointer w-full px-[10px] sm:hidden"
      >
        <ul>
          {arr1.map((item) => (
            <li
              key={item}
              className="border-t-[1px] border-r-[1px] border-l-[1px] border-gray-300 py-[10px] pl-[10px] pr-[40px]"
            >
              {item}
            </li>
          ))}
          <li className="border-t-[1px] text-white border-r-[1px] border-l-[1px] border-gray-300 p-[10px] bg-[#0a255c]">
            Boat Club
          </li>
          {arr2.map((item) => (
            <li
              key={item}
              className="border-t-[1px] border-r-[1px] border-l-[1px] border-gray-300 p-[10px]"
            >
              {item}
            </li>
          ))}
          <li className="border-t-[1px] border-b-[1px] border-r-[1px] border-l-[1px] border-gray-300 p-[10px]">
            COEP Consulting Club
          </li>
        </ul>
      </div>
    </>
  );
}
