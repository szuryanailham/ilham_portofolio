import React, { useState } from "react";
import sertificate from "../Assets/Images/sertificate/Decoding-dasar-javascript.jpg";
import sertificate_dua from "../Assets/Images/sertificate/Decoding-web-javascript.jpg";
import sertificate_tiga from "../Assets/Images/sertificate/Golang_basic.jpg";
import sertificate_empat from "../Assets/Images/sertificate/Winnership.jpg";
import sertificate_lima from "../Assets/Images/sertificate/kampus-merdeka.jpg";

const certificates = [sertificate, sertificate_dua, sertificate_tiga, sertificate_empat, sertificate_lima];

function CertificateSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="my-10 px-4 relative">
      <h1 className="text-2xl md:text-3xl font-poppins font-bold text-center mb-6">My Certificates</h1>

      <div className="w-full flex flex-col gap-6">
        {certificates.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Certificate ${index + 1}`}
            className="w-full h-[250px] md:h-[400px] object-cover rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => setSelectedImage(url)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-xl max-h-[80vh] px-4">
            <img src={selectedImage} alt="Zoomed Certificate" className="w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-lg" />
            <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow-md hover:bg-gray-200">
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificateSection;
