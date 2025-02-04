function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Biz Kimiz?
          </h2>
          <p className="text-lg leading-relaxed text-base-content/80">
            İzmir Merhaba Dünya Özel Eğitim Kurumları 2023 yılında kurulmuş, Milli Eğitim Bakanlığına bağlı en iyi yazılım eğitim kurumlarından biridir. Amacımız, modern yazılım geliştirme tekniklerini öğreterek, öğrencilerimizi yazılım sektörünün aranan profesyonelleri haline getirmektir.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" 
              alt="Eğitim Ortamı"
              className="relative rounded-2xl shadow-xl w-full h-full object-cover transform transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
            />
            <div className="absolute bottom-4 right-4 bg-base-100/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-primary">2023</div>
              <div className="text-sm text-base-content/70">Kuruluş Yılı</div>
            </div>
          </div>

          {/* Right Column - Mission & Vision */}
          <div className="space-y-8">
            {/* Mission Card */}
            <div className="bg-base-100 dark:bg-base-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-base-content">Misyonumuz</h3>
              </div>
              <p className="text-base-content/70 leading-relaxed">
                Öğrencilerimize en güncel yazılım teknolojilerini öğreterek, onları dijital çağın gereksinimlerine hazırlamak ve sektörde aranan profesyoneller olarak yetiştirmek.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-base-100 dark:bg-base-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-base-content">Vizyonumuz</h3>
              </div>
              <p className="text-base-content/70 leading-relaxed">
                Türkiye'nin yazılım eğitiminde öncü kurumu olmak ve mezunlarımızla global teknoloji dünyasında söz sahibi olmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 