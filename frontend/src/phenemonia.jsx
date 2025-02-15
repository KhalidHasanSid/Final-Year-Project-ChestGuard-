import React from "react";


const Pneumonia = () => {
  return (
    <div>
      
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
              you{" "}
              <strong className="text-cyan-400">
                with healthcare professionals by providing trusted doctor
                information and locations.
              </strong>
            </p>
            <p className="mt-4">
              Accessible from any device and completely free, Chest Guard is
              designed for everyone,{" "}
              <strong className="text-cyan-400">
                No medical expertise required. It’s more than just a diagnostic
                tool.
              </strong>{" "}
              It’s an awareness initiative dedicated to empowering individuals
              with knowledge and proactive healthcare solutions.{" "}
              <strong className="text-cyan-400">
                Start taking care of your lung health today with Chest Guard!
              </strong>
            </p>
          </div>
        </main>
    </div>
    </div>
  );
};

export default Pneumonia;
