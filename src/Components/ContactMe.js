import React, { useState } from "react";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Testimoni dikirim:", formData);
    alert("Terima kasih atas testimoni Anda!");
    setFormData({ name: "", role: "", message: "" });
  };

  return (
    <section className="py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        {/* CTA Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Hubungi Saya</h2>
          <p className="text-base opacity-80">Tertarik bekerja sama atau ingin meninggalkan pesan? Hubungi saya langsung atau isi testimoni di bawah.</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a href="mailto:ilhamsuryana@example.com" className="flex flex-col items-center justify-center p-6 bg-[#1a2848] backdrop-blur-md  rounded-xl hover:bg-[#502499] transition">
            <FiMail className="text-3xl mb-3" />
            <span className="text-lg font-semibold">Email</span>
            <p className="text-sm opacity-70 mt-1">ilhamsuryana@example.com</p>
          </a>
          <a href="https://wa.me/6281234567890" className="flex flex-col items-center justify-center p-6 bg-[#1a2848] backdrop-blur-md  rounded-xl hover:bg-[#502499] transition" target="_blank" rel="noopener noreferrer">
            <FiPhone className="text-3xl mb-3" />
            <span className="text-lg font-semibold">WhatsApp</span>
            <p className="text-sm opacity-70 mt-1">+62 812 3456 7890</p>
          </a>
          <a href="https://t.me/ilhamsuryana" className="flex flex-col items-center justify-center p-6 bg-[#1a2848] backdrop-blur-md  rounded-xl hover:bg-[#502499] transition" target="_blank" rel="noopener noreferrer">
            <FiSend className="text-3xl mb-3" />
            <span className="text-lg font-semibold">Telegram</span>
            <p className="text-sm opacity-70 mt-1">@ilhamsuryana</p>
          </a>
        </div>

        {/* Testimony Form */}
        <div className="max-w-xl mx-auto bg-[#1a2848] backdrop-blur-md  rounded-xl p-6">
          <h3 className="text-2xl font-bold text-center mb-6">Kirim Testimoni</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Nama</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/20 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#502499]"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Jabatan / Peran</label>
              <input
                type="text"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/20 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#502499]"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Pesan</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/20 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#502499]"
              />
            </div>
            <button type="submit" className="w-full py-2 bg-[#502499] hover:bg-[#3c1d75] rounded-md transition font-semibold">
              Kirim Testimoni
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
