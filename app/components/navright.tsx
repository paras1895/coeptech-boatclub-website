export default function Navright() {
  const arr = [
    "About Us",
    "Administration",
    "Admissions",
    "Academics",
    "Research",
    
  ];

  const arr1 = [
    "Facilities",
    "Placement",
  ];

  return (
    <>
      <div className="w-full sm:flex h-[4vh] pt-[10px] text-[2vh] hidden font-semibold">
        {arr.map((item) => (
          <div key={item} className="text-white border-r-[1px] px-[0.7vw]">
            {item}
          </div>
        ))}
        <div className="text-white border-r-[1px] underline px-[0.5vw]">
            Student Services
        </div>
        {arr1.map((item) => (
          <div key={item} className="text-white border-r-[1px] px-[0.7vw]">
            {item}
          </div>
        ))}
        <div className="text-white px-[0.5vw]">
            Careers
        </div>
      </div>
    </>
  );
}
