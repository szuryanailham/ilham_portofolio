import React from "react";

const blogData = [
  {
    id: 1,
    title: "5 Tips Belajar JavaScript untuk Pemula",
    excerpt: "Panduan langkah demi langkah agar kamu tidak bingung saat memulai belajar JavaScript dari nol.",
    date: "1 Juli 2025",
    author: "Ilham Suryana",
    cover: "https://placehold.co/600x400?text=REST+API&font=roboto",
  },
  {
    id: 2,
    title: "Mengapa REST API Masih Populer di 2025?",
    excerpt: "Meskipun GraphQL dan gRPC naik daun, REST API tetap jadi pilihan utama. Ini alasannya.",
    date: "24 Juni 2025",
    author: "Ilham Suryana",
    cover: "https://placehold.co/600x400?text=REST+API&font=roboto",
  },
  {
    id: 3,
    title: "Next.js vs React: Mana yang Harus Kamu Pilih?",
    excerpt: "Perbandingan mendalam antara React murni dan Next.js untuk membuat aplikasi web modern.",
    date: "15 Juni 2025",
    author: "Ilham Suryana",
    cover: "https://placehold.co/600x400?text=REST+API&font=roboto",
  },
];

function BlogList() {
  return (
    <div className="py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">Blog Terbaru</h2>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto">
        {blogData.map((blog) => (
          <div key={blog.id} className="bg-white/10 backdrop-blur-md border border-[#502499] rounded-xl overflow-hidden shadow-md">
            <img src={blog.cover} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-5 text-white">
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm mb-3">{blog.excerpt}</p>
              <div className="text-xs text-gray-300">
                {blog.date} • {blog.author}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
