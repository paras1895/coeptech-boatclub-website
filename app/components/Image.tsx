"use client";
import { useState } from "react";
import React from "react";

const Gallery: React.FC = () => {
    const [selected, setSelected] = useState<string | null>(null);

  const images = [
      "/p6.jpg",
    "/p1.jpg",
    "/p2.jpg",
    "/p3.jpg",
    "/p4.jpg",
    "/p5.jpg",
  ];
return (
  <div className="px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-7xl mx-auto">
      {images.map((src, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl cursor-pointer group"
          onClick={() => setSelected(src)}
        >
          <img
            src={src}
            alt={`photo ${i + 1}`}
            className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
          />
        </div>
      ))}
    </div>

    {selected && (
      <div
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        onClick={() => setSelected(null)}
      >
        <div className="max-w-4xl w-full p-4">
          <img
            src={selected}
            alt="preview"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    )}
  </div>
);
};

export default Gallery;

// import React from "react";

// const MasonryGallery: React.FC = () => {
//   const images = [
//     "/images/photo1.jpg",
//     "/images/photo2.jpg",
//     "/images/photo3.jpg",
//     "/images/photo4.jpg",
//     "/images/photo5.jpg",
//     "/images/photo6.jpg",
//   ];

//   return (
//     <div className="min-h-screen bg-white py-12 px-6">
//       <h1 className="text-3xl font-bold text-center mb-10">Masonry Gallery</h1>
//       <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto space-y-4">
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Masonry image ${index + 1}`}
//             className="w-full rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MasonryGallery;

