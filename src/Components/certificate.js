import React, { useState } from "react";

const certificates = ["https://dummyimage.com/600x400/000/fff&text=Certificate+1", "https://dummyimage.com/600x400/222/fff&text=Certificate+2", "https://dummyimage.com/600x400/444/fff&text=Certificate+3"];

function CertificateSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="my-10 px-4 relative">
      <h1 className="text-2xl md:text-3xl font-poppins font-bold text-center m-6">My Certificates</h1>

      <div className="w-full flex flex-col gap-4">
        {certificates.map((url, index) => (
          <img key={index} src={url} alt={`Certificate ${index + 1}`} className=" w-full rounded-xl shadow-lg cursor-pointer" onClick={() => setSelectedImage(url)} />
        ))}
      </div>

      {/* Zoomed Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative">
            <img src={selectedImage} alt="Zoomed Certificate" className="max-w-full max-h-screen rounded-xl shadow-lg" />
            <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow-lg hover:bg-gray-200">
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificateSection;
