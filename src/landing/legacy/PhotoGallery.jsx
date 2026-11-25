import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ZoomIn, Camera, Filter } from 'lucide-react';

export default function PhotoGallery() {
  const { data, setLightboxImage } = useApp();
  const { galleryImages } = data;
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Desfiles', 'Adoção', 'Exóticos', 'Agility', 'Educação', 'Exposição'];

  const filteredImages = selectedCategory === 'Todos'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-white border-b border-pet-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-pet-slate bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Acervo Visual Oficial • REA Pratty
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Galeria & Cenografia da Feira
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Conheça o padrão visual e a ambientação planejada para cada espaço temático. Clique sobre qualquer foto para ampliar em alta resolução.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-pet-terracotta text-white shadow-sm'
                    : 'bg-pet-sand text-slate-600 hover:bg-slate-200 border border-pet-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setLightboxImage(image)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 aspect-4/3 cursor-pointer shadow-xs border border-slate-200/80 card-hover"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                onError={(e) => {
                  e.target.src = "/assets/gallery/Leonardo_Diffusion_XL_A_busy_pet_event_with_a_large_crowd_of_p_0.jpg";
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {image.category}
                </span>
                <h4 className="text-sm font-bold leading-tight mt-0.5">
                  {image.title}
                </h4>
                <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                  {image.caption}
                </p>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
