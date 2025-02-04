import { useState } from 'react';
import { Link } from 'react-router-dom';
import mebLogo from '../assets/meblogo.png';

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
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070",
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
    <div className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Kurslarımız</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="card bg-base-100 shadow-xl">
            <figure className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070" 
                alt="Bilgisayar"
                className="h-48 w-full object-cover"
              />
              <div className="absolute top-2 left-2 w-20 h-20">
                <img 
                  src={mebLogo}
                  alt="MEB Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </figure>
            <div className="card-body">
              <h3 className="card-title">Bilgisayar İşletmeni</h3>
              <p>Ofis programları ve temel bilgisayar kullanımı eğitimi</p>
              <div className="card-actions justify-end">
                <Link to="/courses/computerOperator" className="btn btn-primary">
                  Detaylar
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072" 
                alt="Yazılım"
                className="h-48 w-full object-cover"
              />
              <div className="absolute top-2 left-2 w-20 h-20">
                <img 
                  src={mebLogo}
                  alt="MEB Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </figure>
            <div className="card-body">
              <h3 className="card-title">Yazılım Geliştirme</h3>
              <p>Web ve mobil uygulama geliştirme eğitimi</p>
              <div className="card-actions justify-end">
                <Link to="/courses/software" className="btn btn-primary">
                  Detaylar
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure className="relative">
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071" 
                alt="Grafik"
                className="h-48 w-full object-cover"
              />
              <div className="absolute top-2 left-2 w-20 h-20">
                <img 
                  src={mebLogo}
                  alt="MEB Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </figure>
            <div className="card-body">
              <h3 className="card-title">Grafik Tasarım</h3>
              <p>Adobe programları ve UI/UX tasarım eğitimi</p>
              <div className="card-actions justify-end">
                <Link to="/courses/graphics" className="btn btn-primary">
                  Detaylar
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CoursesSection; 