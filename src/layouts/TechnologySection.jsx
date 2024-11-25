import React from 'react';
import { 
  Trophy,
  Zap,
  Target,
  Clock,
  ArrowRight,
  CheckCircle2,
  Shield,
  Rocket,
  Code,
  Settings,
  Users,
  BarChart
} from 'lucide-react';

const TechnologySection = () => {
  const techStacks = [
    {
      category: "Frontend Development",
      techs: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "TypeScript", level: 85 }
      ]
    },
    {
      category: "Backend Development",
      techs: [
        { name: "Node.js", level: 88 },
        { name: "Laravel", level: 92 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performa Tinggi",
      description: "Website cepat dan responsif dengan optimasi terbaik"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Keamanan Terjamin",
      description: "Implementasi standar keamanan industri terkini"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Mudah Dikelola",
      description: "Panel admin yang user-friendly untuk manajemen konten"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Teknik SEO terbaik untuk meningkatkan visibilitas"
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      value: "50+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      value: "30+",
      label: "Happy Clients"
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      value: "100k+",
      label: "Lines of Code"
    },
    {
      icon: <Clock className="w-12 h-12 text-green-500" />,
      value: "5+",
      label: "Years Experience"
    }
  ];

  return (
    <>
      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-4">
              <Code className="w-4 h-4" />
              Technology Stack
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Teknologi
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"> Modern </span>
              yang Kami Gunakan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stack teknologi terkini untuk membangun website yang powerful dan scalable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {techStacks.map((stack, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">{stack.category}</h3>
                <div className="space-y-6">
                  {stack.techs.map((tech, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{tech.name}</span>
                        <span className="text-gray-600">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-4">
              <Target className="w-4 h-4" />
              Benefits
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Keunggulan Website
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"> Modern </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nikmati berbagai keunggulan website modern untuk bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#kontak"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Mulai Sekarang
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{achievement.value}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Siap Untuk Memulai Project Website Anda?
            </h2>
            <p className="text-lg mb-8 text-purple-100">
              Konsultasikan kebutuhan website Anda dengan tim kami dan dapatkan solusi terbaik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-purple-600 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Mulai Konsultasi
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Lihat Portfolio
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologySection;