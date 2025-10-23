import "./style.css";
import Navsmall from "./components/Navsmall";
import MainComponent from "./components/maincomponent";
import Breadcrumb from "./components/breadcrumb";
import Footer from "./components/footer";
import FacultySection from "./components/faculty";

export default function BoatClubPage() {
  return (
    <>
      <img src="1.png" alt="image" className="w-full" />
      <div className="pl-[50px]">
        <Breadcrumb />
        <div className="flex gap-[20px]">
          <Navsmall />
          <div>
            <MainComponent />
            <FacultySection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
