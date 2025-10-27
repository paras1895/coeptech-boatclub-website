import Gallery from "./Image";

export default function MainComponent() {
  return (
    <>
      <main className="w-full text-[13px] text-justify sm:text-[16px] px-[10px] sm:px-[0px] sm:w-[70vw] sm:pr-[5vw]">
        {/* <img src="collage.png" alt="Boat Club" className="w-full" /> */}
        <Gallery />
        <p className="pt-[10px] sm:pt-[20px]">
          COEP is proud to have a Boat Club, which is one of its kind in the
          country. Situated on the banks of Mula River, this club was
          established in the year 1928. The club owns about 70 trainee and
          racing boats, which can be used for various competitions besides
          regular practice. The club is an active member of professional
          associations like Maharashtra Rowing Association (MRA) and the Amateur
          Rowers Association (ARAE).
          <br />
          <br />
          It has wide range of unique boats that include punts, single sculls,
          racing pair, racing four, racing eight, Jr. Whiff, Sr. Whiff, training
          scull, tuff four, canoes and kayaks. In addition to that boat club
          also houses a well equipped gymnasium. This includes a sprawling
          indoor hall comprising of four badminton courts and one table-tennis
          court, thus providing students of this college with best athletic
          endeavors. It hosts a canteen as well. Membership of the Boat club is
          mandatory to all the under graduate and postgraduate students seeking
          admission in this institute.
          <br />
          <br />
          The Boatclub, as it is known, is one of the favourite spot for most
          people in college. The riverside ambience offers a majestic view of
          the Mula River. The Boatclub has become synonymous with COEP for every
          COEPian. <br />
    <br /> Contact Us: Boat Club Office : +91 20-25507179
          <br />
          For more information visit our website :<br /><br />
    {/* <a
      href="https://boatclub.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      Visit Boat Club
    </a> */}
    {/* return ( */}
  {/* <div className="flex justify-center mt-10"> */}
    <a
      href="https://www.coepboatclub.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
    >
      Explore Boat Club
    </a>
  {/* </div> */}
{/* ); */}



          <br />
        </p>
      </main>
    </>
  );
}
