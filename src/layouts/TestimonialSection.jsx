import React, { useState } from 'react';
import { Star, Quote, Building2, Calendar } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmad Fadillah",
      position: "CEO",
      company: "Tech Innovate Indonesia",
      image: "/api/placeholder/80/80",
      rating: 5,
      comment: "Saya sangat terkesan dengan kualitas pengerjaan website custom untuk perusahaan kami. Tim developer sangat profesional dan responsif dalam mengakomodasi setiap kebutuhan. Sistem yang dibangun benar-benar membantu efisiensi operasional perusahaan.",
      project: "Sistem ERP Terintegrasi",
      date: "Februari 2024",
      projectType: "Web Custom"
    },
    {
      id: 2,
      name: "Sarah Wijaya",
      position: "Marketing Director",
      company: "PropertyKita",
      image: "/api/placeholder/80/80",
      rating: 5,
      comment: "Marketplace properti yang dibangun sesuai dengan ekspektasi kami. Fitur pencarian yang canggih dan sistem manajemen listing yang mudah digunakan membuat platform kami mendapat respon positif dari para agen dan pembeli.",
      project: "Platform Marketplace Properti",
      date: "Januari 2024",
      projectType: "Web Custom"
    },
    {
      id: 3,
      name: "Budi Santoso",
      position: "Principal",
      company: "Sekolah Nusantara",
      image: "/api/placeholder/80/80",
      rating: 5,
      comment: "Sistem manajemen sekolah yang dikembangkan sangat membantu kami dalam mengelola administrasi akademik dan keuangan. Orang tua murid juga sangat mengapresiasi kemudahan akses informasi melalui portal yang disediakan.",
      project: "Sistem Manajemen Sekolah",
      date: "Desember 2023",
      projectType: "Sistem Informasi"
    },
    {
      id: 4,
      name: "Linda Kusuma",
      position: "Operations Manager",
      company: "Hotel Grand",
      image: "/api/placeholder/80/80",
      rating: 5,
      comment: "Dashboard analytics yang dibuat sangat membantu kami dalam monitoring performa hotel secara real-time. Kemampuan untuk melihat tren dan membuat keputusan berdasarkan data membuat operasional kami lebih efisien.",
      project: "Dashboard Analytics Hotel",
      date: "November 2023",
      projectType: "Business Intelligence"
    },
    {
      id: 5,
      name: "Rudi Hermawan",
      position: "Restaurant Owner",
      company: "Resto Chain",
      image: "/api/placeholder/80/80",
      rating: 5,
      comment: "Sistem booking online yang dikembangkan sangat user-friendly dan telah meningkatkan efisiensi operasional restoran kami secara signifikan. Fitur manajemen reservasi dan integrasi dengan pembayaran bekerja dengan sangat baik.",
      project: "Sistem Booking Restaurant",
      date: "Oktober 2023",
      projectType: "Web Custom"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimoni Klien</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pendapat dari klien-klien kami yang telah merasakan langsung kualitas layanan pengembangan web kami
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="relative mb-6">
                  <img 
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-20 h-20 rounded-full"
                  />
                  <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-xl font-semibold mb-1">{testimonials[activeTestimonial].name}</h4>
                <p className="text-gray-600 mb-2">{testimonials[activeTestimonial].position}</p>
                <div className="flex items-center text-gray-600 mb-4">
                  <Building2 className="w-4 h-4 mr-2" />
                  {testimonials[activeTestimonial].company}
                </div>
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <blockquote className="text-xl text-gray-700 mb-6 italic">
                  "{testimonials[activeTestimonial].comment}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="flex flex-wrap gap-4 items-center text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {testimonials[activeTestimonial].projectType}
                    </span>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {testimonials[activeTestimonial].date}
                    </div>
                    <span className="text-gray-600">
                      Project: {testimonials[activeTestimonial].project}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                {testimonial.comment.length > 150 
                  ? `${testimonial.comment.substring(0, 150)}...` 
                  : testimonial.comment
                }
              </p>
              <div className="text-sm text-gray-500">
                {testimonial.projectType} | {testimonial.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;