import React from 'react'

export default function Home() {
  return (<>
   < div className="min-h-screen bg-gradient-to-b from-blue-200 to-indigo-700 text-white p-6 mt-7">
   <main className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10">
  
    <img
          src="https://www.pdcenterlv.com/wp-content/uploads/2019/07/home-highlights-lungs.png"
          alt="Chest X-ray"
          className="rounded-xl shadow-lg w-96 h-auto"
        />

   <div className="max-w-md">
       <h1 className="text-4xl font-extrabold mb-4">Welcome to CGD Dashboard</h1>
       <p className="text-lg leading-relaxed">
         This system helps detect chest conditions like <strong>pneumonia</strong> and <strong>tuberculosis</strong> 
         using AI-powered algorithms. Upload your chest X-ray, enter clinical symptoms, 
         and let the system predict possible diseases based on the data provided.
       </p>
     </div>
   </main>
   </div>
    
  
  </>)}
   

   

  


   
  

