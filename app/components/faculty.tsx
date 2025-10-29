import Image from "next/image";

interface FacultyMember {
  name: string;
  designation: string;
  email: string;
  image: string;
  phone?: string;
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Dr. Sunil Bhirud",
    designation: "President",
    email: "vc.coeptech@coeptech.ac.in",
    image: "/f1.png",
  },
  {
    name: "Dr. M. P. Khond",
    designation: "Director, BOSD",
    email: "mpk.mech@coeptech.ac.in",
    image: "/f2.png",
  },
  {
    name: "Dr. V. K. Haribhakta",
    designation: "Vice-President",
    email: "vkh.mech@coeptech.ac.in",
    image: "/f3.png",
  },
  {
    name: "Dr. S. M. Nawghare",
    designation: "Regatta Incharge",
    email: "smn.civil@coeptech.ac.in",
    image: "/f4.png",
  },
  {
    name: "Dr. S. S. Kumbhar",
    designation: "Faculty Advisor",
    email: "ssk.comp@coeptech.ac.in",
    image: "/f5.png",
  },
  {
    name: "Dr. J. Dadge",
    designation: "Faculty Advisor",
    email: "jwt.physics@coeptech.ac.in",
    image: "/f6.png",
  },
  {
    name: "Dr. P. S. Shinde",
    designation: "Faculty Advisor",
    email: "pss.mech@coeptech.ac.in",
    image: "/f7.png",
  },
  {
    name: "Dr. B. U. Sonawane",
    designation: "Faculty Advisor",
    email: "bus.prod@coeptech.ac.in",
    image: "/f8.png",
  },
  {
    name: "Dr. A. N. Deshpande",
    designation: "Faculty Advisor",
    email: "and.gymkhana@coeptech.ac.in",
    image: "/f9.png",
  },
  {
    name: "Kartik Kshirsagar",
    designation: "General Secretary",
    email: "ukandekt22.instru@coeptech.ac.in",
    image: "/f10.png",
    phone: "+91 74107 27385",
  },
  {
    name: "Yuvraj Fulsoundar",
    designation: "Regatta Secretary",
    email: "fulsoundaryp23.elec@coeptech.ac.in",
    image: "/f11.png",
    phone: "+91 77098 68683",
  },
];

const supportingStaff: FacultyMember[] = [
  {
    name: "Raju Mama",
    designation: "Boatman",
    email: "",
    image: "/s2.jpg",
  },
  {
    name: "Santosh Mama",
    designation: "Boatman",
    email: "",
    image: "/s3.jpg",
  },
  {
    name: "Akshay Sir",
    designation: "Coach",
    email: "",
    image: "/s1.jpg",
  },
];

const FacultySection = () => {
  return (
    <>
    <section id="faculty" className="w-full pb-20">
      <div className="max-w-6xl mx-auto px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mt-5 mb-12">
          Our Staff
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 p-6 flex flex-col items-center h-full"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col flex-grow items-center justify-between text-center">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    {faculty.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{faculty.designation}</p>
                  <a
                    href={`mailto:${faculty.email}`}
                    className="text-blue-600 hover:underline break-words text-sm"
                  >
                    {faculty.email}
                  </a>
                </div>

                {faculty.phone && (
                  <div className="flex items-center gap-2 pt-4 text-xs">
                    <img src="phone.png" alt="phone icon" className="h-4" />
                    {faculty.phone}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="faculty" className="w-full pb-20">
      <div className="max-w-6xl mx-auto px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-12">
          Supporting Staff
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {supportingStaff.map((faculty, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 p-6 flex flex-col items-center h-full"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col flex-grow items-center justify-between text-center">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">
                    {faculty.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{faculty.designation}</p>
                  <a
                    href={`mailto:${faculty.email}`}
                    className="text-blue-600 hover:underline break-words text-sm"
                  >
                    {faculty.email}
                  </a>
                </div>

                {faculty.phone && (
                  <div className="flex items-center gap-2 pt-4 text-xs">
                    <img src="phone.png" alt="phone icon" className="h-4" />
                    {faculty.phone}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default FacultySection;