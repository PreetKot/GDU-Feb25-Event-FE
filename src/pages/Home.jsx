import { useNavigate } from "react-router-dom";
import DnDCardGrid from "../components/events/event";
import Faq from "../components/FAQ/Faq";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-screen overflow-y-scroll">
        {/* Home Banner */}
        <div className="relative text-white font-sans">
          {/* Background section with button */}
          <div
            className="bg-cover bg-center bg-no-repeat h-[91vh] w-auto flex items-end justify-center"
            style={{
              backgroundImage:
                "url(/images/a2.webp)",
            }}
          >
            <button
              onClick={() => navigate("/Intro")}
              className="bg-yellow-500 text-blue-900 px-7 py-3 rounded hover:bg-yellow-600 mb-10"
            >
              Join Us
            </button>
          </div>
        </div>

        {/*Events */}
        <DnDCardGrid />

        <Faq />
      </div>
    </>
  );
};

export default Home;
