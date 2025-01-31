import { useState } from 'react';

function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preference: 'online',
    notes: ''
  });
  
  const faqs = [
    {
      question: "Eğitimler ne zaman başlıyor?",
      answer: "Eğitimlerimiz her ayın başında yeni gruplarla başlamaktadır. Kayıt olduktan sonra size uygun grup bilgisi paylaşılacaktır."
    },
    {
      question: "Online eğitimlere nasıl katılabilirim?",
      answer: "Online eğitimlerimiz Zoom platformu üzerinden gerçekleştirilmektedir. Kayıt sonrası size özel giriş bilgileri iletilecektir."
    },
    {
      question: "Ödeme seçenekleri nelerdir?",
      answer: "Kredi kartı ile tek çekim veya 6 taksit seçeneğimiz bulunmaktadır. Ayrıca banka havalesi ile ödeme yapabilirsiniz."
    },
    {
      question: "Eğitim sonunda sertifika veriliyor mu?",
      answer: "Evet, eğitimi başarıyla tamamlayan tüm öğrencilerimize MEB onaylı sertifika verilmektedir."
    },
    {
      question: "Dersleri kaçırırsam ne olur?",
      answer: "Tüm dersler kayıt altına alınmaktadır. Kaçırdığınız dersleri platform üzerinden tekrar izleyebilirsiniz."
    },
    {
      question: "Eğitmenlerle nasıl iletişim kurabilirim?",
      answer: "Eğitmenlerimizle özel mesajlaşma sistemi ve canlı soru-cevap seansları aracılığıyla iletişim kurabilirsiniz."
    },
    {
      question: "Kurs iptali veya erteleme durumunda ne olur?",
      answer: "Kayıt sonrası 7 gün içinde iptal durumunda tam iade yapılmaktadır. Erteleme durumunda bir sonraki gruba ücretsiz geçiş hakkı tanınır."
    },
    {
      question: "Teknik destek sağlıyor musunuz?",
      answer: "Evet, 7/24 teknik destek ekibimiz online eğitim platformu ve diğer teknik konularda yardımcı olmaktadır."
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Bilgisayar İşletmeni",
      duration: "3 Ay",
      level: "Başlangıç",
      price: "4.500 TL",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      features: [
        "Microsoft Office Programları",
        "Temel Bilgisayar Kullanımı",
        "İnternet ve E-posta Yönetimi",
        "Veri Giriş Teknikleri",
        "Dijital İletişim Araçları",
        "Dosya Yönetimi"
      ],
      description: "Ofis ortamında ihtiyaç duyulan tüm bilgisayar becerilerini kazandırıyoruz."
    },
    {
      id: 2,
      title: "Yazılımcı Yetiştirme Programı",
      duration: "6 Ay",
      level: "Orta-İleri",
      price: "12.000 TL",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800",
      features: [
        "Web Geliştirme (HTML, CSS, JavaScript)",
        "React.js ile Modern Web Uygulamaları",
        "Backend Geliştirme (Node.js)",
        "Veritabanı Yönetimi",
        "Git ve Versiyon Kontrolü",
        "Proje Yönetimi"
      ],
      description: "Sıfırdan profesyonel yazılımcı olma yolculuğunda yanınızdayız."
    }
  ];

  const handleShowDetails = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleRegistration = (course) => {
    setSelectedCourse(course);
    setShowRegistrationForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowRegistrationForm(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        preference: 'online',
        notes: ''
      });
    } catch (error) {
      console.error('Form gönderimi başarısız:', error);
    }
  };

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Eğitimlerimiz</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Kariyerinizi şekillendiren kapsamlı eğitim programlarımızla geleceğe hazırlanın.
          </p>
        </div>

        {/* Kurslar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="relative h-64">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="btn btn-primary" onClick={() => handleShowDetails(course)}>Detaylı Bilgi</button>
                </div>
              </figure>
              
              <div className="card-body">
                <h3 className="card-title text-2xl mb-2">{course.title}</h3>
                <p className="text-base-content/70 mb-4">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="badge badge-primary">{course.duration}</div>
                  <div className="badge badge-secondary">{course.level}</div>
                  <div className="badge badge-accent">{course.price}</div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-bold text-lg mb-3">Eğitim İçeriği:</h4>
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-primary" onClick={() => handleRegistration(course)}>
                    Ön Kayıt
                  </button>
                  <button className="btn btn-primary">
                    Hemen Başvur
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* İletişim ve Harita Bölümü */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* İletişim Kartı */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">İletişim Bilgileri</h2>
                
                {/* Adres, Telefon, E-posta */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-bold mb-2">Adres</h3>
                      <p>Atatürk Cad. No:123</p>
                      <p>Merkez/İSTANBUL</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-bold mb-2">Telefon</h3>
                      <p>+90 (212) 123 45 67</p>
                      <p>+90 (532) 123 45 67</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-bold mb-2">E-posta</h3>
                      <p>info@eduplatform.com</p>
                      <p>destek@eduplatform.com</p>
                    </div>
                  </div>

                  {/* Çalışma Saatleri */}
                  <div className="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-bold mb-2">Çalışma Saatleri</h3>
                      <p>Hafta içi: 09:00 - 18:00</p>
                      <p>Cumartesi: 10:00 - 14:00</p>
                      <p>Pazar: Kapalı</p>
                    </div>
                  </div>

                  {/* Sosyal Medya */}
                  <div>
                    <h3 className="font-bold mb-3">Sosyal Medya</h3>
                    <div className="flex space-x-4">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Harita */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body p-0 h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.232948447742!2d28.977549315415682!3d41.037238479297534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIDM0NDM1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1647682696252!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Butonu */}
      <a 
        href="https://wa.me/905321234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 btn btn-circle btn-lg bg-green-500 hover:bg-green-600 border-none text-white shadow-lg z-50"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8" 
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* SSS Bölümü */}
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Sıkça Sorulan Sorular</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-plus bg-base-100 mb-4">
              <input type="radio" name="faq-accordion" /> 
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection; 