import React from 'react';
import { ArrowRight, Code, Zap, Shield, Building2, Users, Star, CheckCircle } from 'lucide-react';


const Hero = () => {
  const features = [
    {
      icon: <Code className="w-5 h-5" />,
      text: "Website Custom Sesuai Kebutuhan"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Performa Tinggi & SEO Friendly"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Keamanan Website Terjamin"
    }
  ];

  const stats = [
    
  ];

  const companies = [
    {
        name: "TechCorp",
        logo: (
          <div className="flex items-center gap-2 text-gray-800 font-bold text-xl">
            <Code className="w-6 h-6" />
            TechCorp
          </div>
        )
      },
      {
        name: "InnovatePro",
        logo: (
          <div className="flex items-center gap-2 text-gray-800 font-bold text-xl">
            <Zap className="w-6 h-6" />
            InnovatePro
          </div>
        )
      },
      {
        name: "DigitalFlow",
        logo: (
          <div className="flex items-center gap-2 text-gray-800 font-bold text-xl">
            <Shield className="w-6 h-6" />
            DigitalFlow
          </div>
        )
      },
      {
        name: "SmartSys",
        logo: (
          <div className="flex items-center gap-2 text-gray-800 font-bold text-xl">
            <Building2 className="w-6 h-6" />
            SmartSys
          </div>
        )
      }
  ];


  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-indigo-100/30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-700 font-medium text-sm">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Website Development Agency
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              <span className="block mb-2">Wujudkan Website</span>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Impian Anda
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Bersama tim developer berpengalaman, kami membantu mewujudkan visi digital Anda melalui website yang powerful dan sesuai kebutuhan bisnis Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#kontak"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Mulai Konsultasi
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-purple-200 text-purple-700 font-medium hover:bg-purple-50 transition-colors duration-300"
              >
                Lihat Portfolio
              </a>
            </div>

            {/* Features List */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                      {feature.icon}
                    </div>
                    <p className="font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Background decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] bg-gradient-to-r from-purple-300/30 to-indigo-300/30 rounded-full blur-3xl" />
            </div>
            
            {/* Main image */}
            <div className="relative bg-white p-4 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src="/api/placeholder/600/400"
                alt="Website Dashboard Preview"
                className="rounded-lg"
              />
              
              {/* Floating elements */}
              <div className="absolute -left-8 top-1/4 bg-white p-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Live Updates</span>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-1/4 bg-white p-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium">SEO Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Social Proof */}
        {/* Enhanced Social Proof Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-16 pt-8 border-t border-gray-200">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="p-2 bg-purple-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Company Logos */}
            <div className="space-y-6">
              <p className="text-center text-gray-900 font-semibold text-xl mb-8">
                Dipercaya oleh perusahaan terkemuka
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {companies.map((company, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    {company.logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;