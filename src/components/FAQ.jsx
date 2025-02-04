import { useState } from 'react';

const faqData = [
  {
    question: "Kurslara kimler katılabilir?",
    answer: "Yazılım öğrenmeye istekli, 18 yaşını doldurmuş herkes kurslara katılabilir. Önceden programlama deneyimi gerekli değildir."
  },
  {
    question: "Kurs süreleri ne kadardır?",
    answer: "Kurslarımız ortalama 3-6 ay sürmektedir. Her kursun kendine özgü bir müfredatı ve süresi vardır. Detaylı bilgiyi kurs sayfalarında bulabilirsiniz."
  },
  {
    question: "Online eğitim mevcut mu?",
    answer: "Evet, tüm kurslarımızı online olarak da sunmaktayız. Canlı dersler, interaktif ödevler ve mentor desteği ile uzaktan eğitim imkanı sağlıyoruz."
  },
  {
    question: "Sertifika veriyor musunuz?",
    answer: "Evet, kurslarımızı başarıyla tamamlayan öğrencilerimize Milli Eğitim Bakanlığı onaylı sertifika veriyoruz."
  },
  {
    question: "Ödeme seçenekleri nelerdir?",
    answer: "Peşin ödeme ve taksitli ödeme seçeneklerimiz mevcuttur. Ayrıca erken kayıt ve grup indirimleri de sunmaktayız."
  },
  {
    question: "İş bulma konusunda destek sağlıyor musunuz?",
    answer: "Evet, mezunlarımıza kariyer danışmanlığı ve iş bulma desteği sağlıyoruz. Ayrıca sektördeki partner şirketlerimizle staj ve iş imkanları sunuyoruz."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-base-content/70">
              Aklınıza takılan soruların cevaplarını burada bulabilirsiniz
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-base-200/50 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-base-200"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-base-content">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-primary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-base-content/70">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-base-content/70 mb-4">
              Başka sorularınız mı var?
            </p>
            <a
              href="/#contact"
              className="btn btn-primary"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ; 