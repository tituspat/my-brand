import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Hero from './components/Hero'


function App() {
  return (
    <>
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero/>

        {/* Layanan Section */}
        <section id="layanan" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda berkembang
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-600">Website modern dan responsif yang sesuai dengan kebutuhan bisnis Anda</p>
                    </div>
                    <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                        <p className="text-gray-600">Strategi pemasaran digital yang efektif untuk meningkatkan penjualan</p>
                    </div>
                    <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
                        <p className="text-gray-600">Optimasi mesin pencari untuk meningkatkan visibilitas online Anda</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Beberapa proyek terbaik yang telah kami kerjakan
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="overflow-hidden rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
                        <img src="https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop" alt="Project 1" className="w-full"/>
                        <div className="p-6">
                            <h3 className="font-semibold text-lg mb-2">E-Commerce Website</h3>
                            <p className="text-gray-600">Platform e-commerce modern dengan fitur lengkap</p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop" alt="Project 2" className="w-full"/>
                        <div className="p-6">
                            <h3 className="font-semibold text-lg mb-2">Company Profile</h3>
                            <p className="text-gray-600">Website profil perusahaan yang profesional</p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
                        <img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=400&h=300&fit=crop" alt="Project 3" className="w-full"/>
                        <div className="p-6">
                            <h3 className="font-semibold text-lg mb-2">Mobile App</h3>
                            <p className="text-gray-600">Aplikasi mobile dengan UX/UI terbaik</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimoni Section */}
        <section id="testimoni" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimoni Klien</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Apa kata klien kami tentang layanan yang kami berikan
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 border rounded-lg" data-aos="fade-up" data-aos-delay="100">
                        <div className="flex items-center mb-4">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop" alt="Client 1" className="rounded-full"/>
                            <div className="ml-4">
                                <h4 className="font-semibold">John Doe</h4>
                                <p className="text-gray-600">CEO, Tech Company</p>
                            </div>
                        </div>
                        <p className="text-gray-600">"Layanan yang sangat profesional dan hasil yang memuaskan. Sangat merekomendasikan!"</p>
                    </div>
                    <div className="p-6 border rounded-lg" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex items-center mb-4">
                            <img src="/api/placeholder/40/40" alt="Client 2" className="rounded-full"/>
                            <div className="ml-4">
                                <h4 className="font-semibold">Jane Smith</h4>
                                <p className="text-gray-600">Marketing Director</p>
                            </div>
                        </div>
                        <p className="text-gray-600">"Tim yang sangat responsif dan hasil kerja yang luar biasa. Terima kasih!"</p>
                    </div>
                    <div className="p-6 border rounded-lg" data-aos="fade-up" data-aos-delay="300">
                        <div className="flex items-center mb-4">
                            <img src="/api/placeholder/40/40" alt="Client 3" className="rounded-full"/>
                            <div className="ml-4">
                                <h4 className="font-semibold">David Wilson</h4>
                                <p className="text-gray-600">Startup Founder</p>
                            </div>
                        </div>
                        <p className="text-gray-600">"Solusi yang diberikan sangat membantu pertumbuhan bisnis kami. Highly recommended!"</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
                        <p className="text-gray-600 mb-8">
                            Siap membantu transformasi digital bisnis Anda. Hubungi kami sekarang!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <span>+62 123 456 789</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <span>info@digiagency.com</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span>Jl. Digital No. 123, Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left">
                        <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                            <div>
                                <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                                <input type="text" id="nama" name="nama" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="pesan" className="block text-sm font-medium text-gray-700">Pesan</label>
                                <textarea id="pesan" name="pesan" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    Kirim Pesan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    
        {/* Footer */}
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-blue-500">DigiAgency</h3>
                        <p className="text-gray-400">
                            Solusi digital terbaik untuk pertumbuhan bisnis Anda
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Layanan</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Digital Marketing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">SEO Optimization</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Content Creation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Tentang Kami</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Tim Kami</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Karir</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Kontak</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Berlangganan newsletter kami untuk mendapatkan update terbaru.</p>
                        <form className="flex gap-2">
                            <input type="email" placeholder="Email anda" className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 DigiAgency. All rights reserved.</p>
                </div>
            </div>
        </footer>

    </>
  )
}

export default App
