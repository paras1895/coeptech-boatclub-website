import "./style.css";
import Navsmall from "./components/Navsmall";
import MainComponent from "./components/maincomponent";
import Breadcrumb from "./components/breadcrumb";
import Footer from "./components/footer";

export default function BoatClubPage() {
  return (
    <>
      <img src="1.png" alt="image" className="w-full" />
      <div className="pl-[50px]">
        <Breadcrumb />
        <div className="container">
          <Navsmall />
          <MainComponent />
        </div>
      </div>
      <Footer />
    </>
  );
}
