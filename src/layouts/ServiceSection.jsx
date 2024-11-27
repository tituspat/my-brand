import React from 'react';
import { 
 Code, 
 Monitor, 
 Smartphone, 
 Database, 
 Rocket,
 Check,
 ArrowRight,
 Zap,
 Shield,
 Globe,
 Star,
 Layout,
 Server
} from 'lucide-react';

const ServicesSection = () => {
 const mainService = {
   icon: <Code className="w-8 h-8 text-purple-600" />,
   title: "Website Development",
   description: "Spesialisasi utama kami dalam pengembangan website dan aplikasi yang disesuaikan dengan kebutuhan spesifik bisnis Anda.",
   features: [
     "Design UI/UX Modern & Responsive",
     "Sistem Manajemen Terintegrasi",
     "Aplikasi Web Real-time",
     "Interface API & Integrasi Sistem", 
     "Dashboard Analytics & Reporting"
   ],
   benefits: [
     {
       icon: <Rocket className="w-5 h-5" />,
       title: "Performa Tinggi",
       description: "Website yang cepat dan responsif dengan optimasi terbaik"
     },
     {
       icon: <Shield className="w-5 h-5" />,
       title: "Keamanan Terjamin",
       description: "Implementasi standar keamanan industri"
     },
     {
       icon: <Globe className="w-5 h-5" />,
       title: "SEO Optimized",
       description: "Peningkatan visibilitas di mesin pencari"
     }
   ]
 };

 const services = [
   {
     icon: <Monitor className="w-6 h-6 text-purple-600" />,
     title: "Basic Website Package",
     subtitle: "Website Profesional untuk Bisnis",
     description: "Solusi website profesional dengan desain modern dan responsif, cocok untuk bisnis yang ingin membangun presence online yang kuat.",
     features: [
       "Design Modern & Responsive",
       "CMS untuk Update Konten",
       "Integrasi Media Sosial",
       "Support & Maintenance",
       "SEO Basic Setup",
     ]
   },
   {
     icon: <Layout className="w-6 h-6 text-purple-600" />,
     title: "Landing Page",
     subtitle: "Tingkatkan Konversi Bisnis",
     description: "Landing page yang dioptimalkan untuk konversi dengan design yang menarik dan performa tinggi.",
     features: [
       "Optimasi Konversi",
       "A/B Testing Setup",
       "Fast Loading Speed", 
       "Analytics Integration",
       "Mobile-First Design",
     ]
   },
   {
     icon: <Server className="w-6 h-6 text-purple-600" />, 
     title: "Advanced Web Solution",
     subtitle: "Sistem Web Sesuai Kebutuhan",
     description: "Solusi web custom yang powerful untuk kebutuhan bisnis yang kompleks dengan fitur-fitur advanced.",
     features: [
       "Custom Dashboard Admin",
       "User Management System",
       "API Integration",
       "Advanced Security",
       "Real-time Features",
     ]
   }
 ];

 const techStacks = {
   frontend: ["React.js", "Next.js", "TailwindCSS", "Bootstrap", "TypeScript"],
   backend: ["Node.js", "Express", "Laravel"],
   cloud: ["AWS", "Firebase"]
 };

 return (
   <section id="layanan" className="py-20 bg-gradient-to-b from-gray-50 to-white">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Section Header */}
       <div className="text-center mb-16">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-4">
           <Star className="w-4 h-4" />
           Professional Web Development
         </div>
         <h2 className="text-4xl font-bold text-gray-900 mb-4">
           Solusi Digital
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"> Lengkap </span>
           untuk Bisnis Anda
         </h2>
         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Kami menyediakan layanan pengembangan web komprehensif dengan tim profesional 
           berpengalaman untuk membantu pertumbuhan bisnis Anda.
         </p>
       </div>

       {/* Main Service Highlight */}
       <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-purple-100">
         <div className="grid md:grid-cols-2 gap-12">
           <div className="space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm">
               Layanan Utama
             </div>
             <h3 className="text-3xl font-bold text-gray-900">{mainService.title}</h3>
             <p className="text-gray-600">{mainService.description}</p>
             
             <div className="space-y-4">
               {mainService.features.map((feature, index) => (
                 <div key={index} className="flex items-center gap-3">
                   <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                     <Check className="w-4 h-4 text-purple-600" />
                   </div>
                   <span className="text-gray-700">{feature}</span>
                 </div>
               ))}
             </div>

             <a href="#kontak" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
               Konsultasi Gratis
               <ArrowRight className="w-4 h-4" />
             </a>
           </div>

           <div className="space-y-6">
             <div className="grid gap-4">
               {mainService.benefits.map((benefit, index) => (
                 <div key={index} className="bg-gray-50 p-4 rounded-xl hover:shadow-md transition-all duration-300">
                   <div className="flex items-start gap-4">
                     <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                       {benefit.icon}
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                       <p className="text-gray-600">{benefit.description}</p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>

       {/* Services Grid */}
       <div className="grid md:grid-cols-3 gap-8 mb-16">
         {services.map((service, index) => (
           <div 
             key={index}
             className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
           >
             <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
               {service.icon}
             </div>
             
             <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
             <p className="text-sm text-purple-600 font-medium mb-4">{service.subtitle}</p>
             <p className="text-gray-600 mb-6">{service.description}</p>
             
             <ul className="space-y-3">
               {service.features.map((feature, idx) => (
                 <li key={idx} className="flex items-center gap-2 text-gray-700">
                   <Check className="w-4 h-4 text-purple-600" />
                   {feature}
                 </li>
               ))}
             </ul>
           </div>
         ))}
       </div>

       {/* Technologies */}
       <div className="text-center">
         <h3 className="text-xl font-semibold text-gray-900 mb-6">Technologies We Use</h3>
         <div className="flex flex-wrap justify-center gap-4">
           {Object.entries(techStacks).map(([category, techs]) => (
             <div key={category} className="flex flex-wrap gap-2">
               {techs.map((tech, index) => (
                 <div 
                   key={tech}
                   className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-700 hover:border-purple-300 hover:shadow-sm transition-all duration-300"
                 >
                   {tech}
                 </div>
               ))}
             </div>
           ))}
         </div>
       </div>
     </div>
   </section>
 );
};

export default ServicesSection;