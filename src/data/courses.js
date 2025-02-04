export const courses = {
  computerOperator: {
    id: 'computerOperator',
    title: 'Bilgisayar İşletmeni',
    description: 'Ofis programları ve temel bilgisayar kullanımı konusunda profesyonel eğitim',
    coverImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070',
    overview: 'Bu kapsamlı kurs, modern ofis ortamında ihtiyaç duyulan tüm temel bilgisayar becerilerini kazandırmayı hedeflemektedir. Microsoft Office uygulamaları, internet kullanımı, veri girişi ve temel donanım bilgisi gibi konuları içermektedir.',
    curriculum: [
      {
        title: 'Temel Bilgisayar Kullanımı',
        topics: [
          'İşletim sistemi temel kullanımı',
          'Dosya ve klasör yönetimi',
          'İnternet ve e-posta kullanımı',
          'Güvenlik ve yedekleme'
        ]
      },
      {
        title: 'Microsoft Office Uygulamaları',
        topics: [
          'Word ile profesyonel döküman hazırlama',
          'Excel ile veri analizi ve raporlama',
          'PowerPoint ile etkili sunum hazırlama',
          'Outlook ile e-posta ve takvim yönetimi'
        ]
      },
      {
        title: 'Veri Girişi ve Raporlama',
        topics: [
          'Hızlı ve doğru veri girişi teknikleri',
          'Veri düzenleme ve filtreleme',
          'Rapor oluşturma ve düzenleme',
          'Veri güvenliği ve yedekleme'
        ]
      }
    ],
    instructor: {
      name: 'Ayşe Yılmaz',
      title: 'Bilgisayar Öğretmeni',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787',
      bio: '10 yıllık eğitmenlik deneyimi ile yüzlerce öğrenciye bilgisayar kullanımı konusunda eğitim vermiştir.'
    },
    duration: '3 Ay',
    level: 'Başlangıç',
    capacity: 15,
    certificate: 'MEB Onaylı',
    features: [
      'Uygulamalı eğitim',
      'Sınırsız tekrar',
      'Online destek',
      'Kariyer danışmanlığı',
      'İş yerleştirme desteği'
    ]
  },
  // Diğer kurslar buraya eklenebilir
}; 