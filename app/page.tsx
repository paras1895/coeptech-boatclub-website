import "./style.css";
import Navsmall from "./components/Navsmall";
import MainComponent from "./components/maincomponent";
import Breadcrumb from "./components/breadcrumb";
import Footer from "./components/footer";
import FacultySection from "./components/faculty";
import MobileNavBottom from "./components/mobile-nav-bottom";

export default function BoatClubPage() {
  return (
    <>
      <img
        src="1.png"
        alt="image"
        className="w-full h-[45vh] object-cover sm:h-auto"
      />
      <div className="sm:pl-[50px]">
        <Breadcrumb />
        <div className="flex sm:gap-[20px]">
          <Navsmall />
          <div>
            <MainComponent />
            <FacultySection />
          </div>
        </div>
      </div>
      <div className="pb-[1vh]">
        <MobileNavBottom />
      </div>
      <Footer />
    </>
  );
}
