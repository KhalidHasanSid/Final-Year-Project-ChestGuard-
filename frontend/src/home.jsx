import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

export default function Home() {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <>
      <div className="min-h-screen bg-[#111827] text-white p-6">
        {/* Heading */}
        <h1 className="text-5xl pt-4 font-semibold text-white text-center mb-12">
          Welcome to Chest Guard Detection Dashboard
        </h1>

        <main className="flex items-start pl-8 gap-6">
          {/* Chest X-ray Image */}
          <img
            src="https://www.pdcenterlv.com/wp-content/uploads/2019/07/home-highlights-lungs.png"
            alt="Chest X-ray"
            className="rounded-xl shadow-lg w-80 h-auto border-4 border-cyan-500 shadow-cyan-500 float-left mr-6 mb-4 mt-9"
          />

          {/* Wrapped Text */}
          <div className="text-xl leading-relaxed text-gray-300">
            <p>
              Chest Guard is a web-based platform powered by AI and deep
              learning, designed to assist in the early detection of respiratory
              diseases like pneumonia and tuberculosis. Simply upload your chest
              X-ray, and our advanced AI will analyze it within minutes,
              providing accurate results to help you take timely action for
              better health.
            </p>
            <p className="mt-4">
              Beyond diagnosis, Chest Guard serves as an educational hub,
              offering easy-to-understand articles about symptoms, risks, and
              preventive measures for these diseases. Our platform also connects
              you  with healthcare professionals by providing trusted doctor
              information and locations. Accessible from any device and completely free, Chest Guard is
              designed for everyone No medical expertise required. It’s more than just a diagnostic
              tool.{" "}
              
            </p>
            
               <p>
          
              It’s an awareness initiative dedicated to empowering individuals
              with knowledge and proactive healthcare solutions.{" "}
              <strong className="text-cyan-400">
                Start taking care of your lung health today with Chest Guard!
              </strong>
            </p>
          </div>
        </main>

        {/* Cards Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Tuberculosis Card */}
          <div className="bg-[#1e293b] p-5 rounded-xl shadow-lg w-80 text-center border border-purple-500 hover:shadow-purple-500 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2913/2913200.png"
              alt="Tuberculosis"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-purple-400">Tuberculosis</h2>
            <p className="text-gray-300 mt-2">
              Tuberculosis (TB) is a bacterial infection that usually affects
              the lungs.
            </p>
            <button
              onClick={() => navigate("/tuberculosis")} // ✅ Correct Navigation
              className="mt-4 bg-purple-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-purple-500 transition"
            >
              See More
            </button>
          </div>

          {/* Pneumonia Card */}
          <div className="bg-[#1e293b] p-5 rounded-xl shadow-lg w-80 text-center border border-purple-500 hover:shadow-purple-500 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3334/3334325.png"
              alt="Pneumonia"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-purple-400">Pneumonia</h2>
            <p className="text-gray-300 mt-2">
              Pneumonia is an infection in your lungs caused by bacteria,
              viruses, or fungi.
            </p>
            <button
              onClick={() => navigate("/pneumonia")} // ✅ Correct Navigation
              className="mt-4 bg-purple-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-purple-500 transition"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
