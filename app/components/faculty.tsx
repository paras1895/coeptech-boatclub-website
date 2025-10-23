import Image from "next/image";

interface FacultyMember {
  name: string;
  designation: string;
  email: string;
  image: string;
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Dr. Sunil Bhirud",
    designation: "President",
    email: "vc.coeptech@coeptech.ac.in",
    image: "/f1.png"
  },
  {
    name: "Dr. M. P. Khond",
    designation: "Director, BOSD",
    email: "mpk.mech@coeptech.ac.in",
    image: "/f2.png"
  },
  {
    name: "Dr. V. K. Haribhakta",
    designation: "Vice-President",
    email: "vkh.mech@coeptech.ac.in",
    image: "/f3.png"
  },
  {
    name: "Dr. S. M. Nawghare",
    designation: "Regatta Incharge",
    email: "smn.civil@coeptech.ac.in",
    image: "/f4.png"
  },
  {
    name: "Dr. S. S. Kumbhar",
    designation: "Faculty Advisor",
    email: "ssk.comp@coeptech.ac.in",
    image: "/f5.png"
  },
  {
    name: "Dr. J. Dadge",
    designation: "Faculty Advisor",
    email: "jwt.physics@coeptech.ac.in",
    image: "/f6.png"
  },
  {
    name: "Dr. P. S. Shinde",
    designation: "Faculty Advisor",
    email: "pss.mech@coeptech.ac.in",
    image: "/f7.png"
  },
  {
    name: "Dr. B. U. Sonawane",
    designation: "Faculty Advisor",
    email: "bus.prod@coeptech.ac.in",
    image: "/f8.png"
  },
  {
    name: "Dr. A. N. Deshpande",
    designation: "Faculty Advisor",
    email: "and.gymkhana@coeptech.ac.in",
    image: "/f9.png"
  },
];

const FacultySection = () => {
  return (
    <section id="faculty" className="w-full pb-[20px]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-12">
          Our Staff
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="border-[1px] border-gray-300 bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 p-6 flex flex-col items-center"
            >
              <div className="relative w-45 h-45 mb-4">
                <Image
                  src={faculty.image}
                  alt="img"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">
                {faculty.name}
              </h3>
              <p className="text-gray-600 mb-2">{faculty.designation}</p>
              <a
                href={`mailto:${faculty.email}`}
                className="text-blue-600 hover:underline break-words"
              >
                {faculty.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
