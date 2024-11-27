import React from 'react';
import { 
  CheckCircle, 
  Timer, 
  Users, 
  MessageSquare, 
  Zap,
  ArrowRight,
  Shield,
  Settings,
  Code
} from 'lucide-react';

const ProcessSection = () => {
  const workProcess = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Konsultasi",
      description: "Diskusi mendalam tentang kebutuhan dan tujuan website Anda",
      steps: [
        "Analisis kebutuhan bisnis",
        "Penentuan fitur utama",
        "Estimasi waktu & biaya"
      ]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Pengembangan",
      description: "Proses pembuatan website dengan update progress berkala",
      steps: [
        "Design UI/UX",
        "Development",
        "Testing & QA"
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Deployment",
      description: "Website siap diluncurkan dengan performa optimal",
      steps: [
        "Server setup",
        "Website launch",
        "Performance testing"
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Maintenance",
      description: "Dukungan teknis dan pemeliharaan berkelanjutan",
      steps: [
        "Regular updates",
        "Security monitoring",
        "Performance optimization"
      ]
    }
  ];

  const guarantees = [
    {
      icon: <Timer className="w-8 h-8 text-purple-600" />,
      title: "Tepat Waktu",
      description: "Komitmen penyelesaian proyek sesuai timeline yang disepakati"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Garansi Layanan",
      description: "Support teknis dan maintenance hingga 1 tahun"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Tim Profesional",
      description: "Dikerjakan oleh developer berpengalaman"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-4">
            <Zap className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bagaimana Kami
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"> Bekerja </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proses pengembangan yang terstruktur dan transparan untuk hasil yang maksimal
          </p>
        </div>

        {/* Work Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {workProcess.map((process, index) => (
            <div 
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Connector Line */}
              {index < workProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-purple-200" />
              )}
              
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                {process.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-purple-100 rounded-full text-purple-600 text-sm flex items-center justify-center">
                  {index + 1}
                </span>
                {process.title}
              </h3>
              
              <p className="text-gray-600 mb-4">{process.description}</p>
              
              <ul className="space-y-2">
                {process.steps.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Guarantees Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Jaminan Layanan Kami</h3>
            <p className="text-gray-600">Komitmen kami untuk memberikan layanan terbaik</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  {guarantee.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4">{guarantee.title}</h4>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#kontak"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Mulai Proyek
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;