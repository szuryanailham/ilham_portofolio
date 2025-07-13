import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonies = [
  {
    name: "Andi Prasetyo",
    role: "CEO PT Digital Solusi",
    message: "Ilham sangat profesional dan cepat tanggap. Website yang dibangun berjalan dengan baik dan responsif.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    contact: "mailto:andi@digitalsolusi.com",
  },
  {
    name: "Rina Maharani",
    role: "Owner Ruang Edit",
    message: "Proses kerja sama berjalan lancar, komunikasi jelas, dan hasil akhir memuaskan.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    contact: "mailto:rina@ruangedit.com",
  },
  {
    name: "Dimas Kurniawan",
    role: "Founder Komunitas Koding",
    message: "Ilham punya semangat tinggi dan eksekusi cepat. Sangat direkomendasikan untuk project digital.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    contact: "mailto:dimas@komunitaskoding.id",
  },
  {
    name: "Dimas Kurniawan",
    role: "Founder Komunitas Koding",
    message: "Ilham punya semangat tinggi dan eksekusi cepat. Sangat direkomendasikan untuk project digital.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    contact: "mailto:dimas@komunitaskoding.id",
  },
  {
    name: "Dimas Kurniawan",
    role: "Founder Komunitas Koding",
    message: "Ilham punya semangat tinggi dan eksekusi cepat. Sangat direkomendasikan untuk project digital.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    contact: "mailto:dimas@komunitaskoding.id",
  },
];

export function Testimony() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Testimoni Klien</h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonies.map((item, index) => (
            <div key={index} className="flex-[0_0_100%] px-4 md:px-8 transition-transform ease-in-out duration-500">
              <div className="w-full max-w-xl mx-auto bg-[#1a2848] text-white shadow-md rounded-xl p-6 text-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 mx-auto rounded-full mb-4 object-cover border-4 border-white" />
                <p className="italic mb-4 text-base leading-relaxed">“{item.message}”</p>
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <span className="text-sm block mb-2">{item.role}</span>
                <a href={item.contact} className="text-sm text-white underline hover:text-gray-200 transition">
                  Hubungi Klien
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
