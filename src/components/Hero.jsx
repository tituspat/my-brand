import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
  <section id="beranda" className="pt-20 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div data-aos="fade-right">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Transformasi Digital untuk Bisnis Anda
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Kembangkan bisnis anda dengan solusi digital yang inovatif dan terukur
                        </p>
                        <div className="flex gap-4">
                            <a href="#layanan" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                                Mulai Sekarang
                            </a>
                            <a href="#portfolio" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50">
                                Lihat Portfolio
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center" data-aos="fade-left">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Hero Image" className="rounded-lg shadow-lg"/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero;