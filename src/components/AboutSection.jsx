function AboutSection() {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Hakkımızda</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            2020 yılından bu yana, teknoloji eğitiminde öncü yaklaşımımızla binlerce öğrenciye ulaştık.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Misyon */}
          <div className="card bg-base-200 hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="card-title mb-2">Misyonumuz</h3>
              <p className="text-base-content/70">
                Kaliteli eğitimi herkes için erişilebilir kılmak ve teknoloji alanında yeni nesil uzmanlar yetiştirmek.
              </p>
            </div>
          </div>

          {/* Vizyon */}
          <div className="card bg-base-200 hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="card-title mb-2">Vizyonumuz</h3>
              <p className="text-base-content/70">
                Türkiye'nin en kapsamlı ve yenilikçi online eğitim platformu olarak global bir marka haline gelmek.
              </p>
            </div>
          </div>

          {/* Değerlerimiz */}
          <div className="card bg-base-200 hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="card-title mb-2">Değerlerimiz</h3>
              <p className="text-base-content/70">
                Yenilikçilik, kalite, erişilebilirlik ve sürdürülebilir başarı odaklı eğitim anlayışı.
              </p>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="stats shadow w-full">
          <div className="stat place-items-center">
            <div className="stat-title">Öğrenciler</div>
            <div className="stat-value">10K+</div>
            <div className="stat-desc">2023 yılı itibariyle</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Eğitmenler</div>
            <div className="stat-value text-primary">100+</div>
            <div className="stat-desc">Uzman kadro</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Eğitimler</div>
            <div className="stat-value">500+</div>
            <div className="stat-desc">Güncel içerik</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Memnuniyet</div>
            <div className="stat-value text-secondary">96%</div>
            <div className="stat-desc">Öğrenci memnuniyeti</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 