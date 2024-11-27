
import contactInfo from '../data/contact';
import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Loader2,
  MessageSquare,
  Clock,
  CheckCircle2,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const projectTypes = [
    "Website Company Profile",
    "E-Commerce Website",
    "Web Application",
    "Landing Page",
    "Sistem Informasi",
    "Lainnya"
  ];

  const budgetRanges = [
    "< Rp 5 Juta",
    "Rp 5 - 10 Juta",
    "Rp 10 - 20 Juta",
    "> Rp 20 Juta"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Add timestamp to the form data
      const submissionData = {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new' // You can use this to track inquiry status
      };

      // Add document to Firebase
      await addDoc(collection(db, 'inquiries'), submissionData);

      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Terjadi kesalahan. Silakan coba lagi nanti.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan website?",
      answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek, umumnya 2-8 minggu."
    },
    {
      question: "Apakah ada garansi setelah website selesai?",
      answer: "Ya, kami memberikan garansi maintenance dan support teknis selama 3 bulan."
    },
    {
      question: "Bagaimana tahapan pembayaran?",
      answer: "Pembayaran dilakukan dalam 3 tahap: DP 40%, progress 30%, dan setelah selesai 30%."
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-4">
            <MessageSquare className="w-4 h-4" />
            Let's Talk
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mulai
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"> Wujudkan </span>
            Website Impian Anda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Konsultasikan kebutuhan website Anda dengan tim kami dan dapatkan penawaran terbaik
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-1">
            {/* Quick Contact */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
              <h3 className="text-xl font-semibold mb-6">Hubungi Kami</h3>
              <div className="space-y-4">
                <a 
                  href={contactInfo.whatsapp}
                  target='_blank' 
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900">{contactInfo.phone}</p>
                  </div>
                </a>

                <a 
                  href="mailto:contact@example.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">{contactInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Jam Kerja</p>
                    <p className="font-medium text-gray-900">Sen - Jum, 9:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
              <h3 className="text-xl font-semibold mb-6">FAQ</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl hover:bg-purple-50 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative lg:col-span-2" >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mulai Diskusi Project</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success Message */}
                {showSuccess && (
                  <div className="bg-green-50 text-green-800 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <p>Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.</p>
                  </div>
                )}
      
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 text-red-800 rounded-lg p-4 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <p>{error}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Project<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      required
                    >
                      <option value="">Pilih Jenis Project</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimasi Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  >
                    <option value="">Pilih Range Budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detail Project<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="Ceritakan kebutuhan website Anda..."
                    required
                  ></textarea>
                </div>

                {/* Note */}
                <div className="flex items-start gap-2 text-sm text-gray-500">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>
                    Kami akan menghubungi Anda dalam 1x24 jam untuk mendiskusikan project Anda lebih lanjut.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </form>
            </div>
            {/* Overlay */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;