function Footer() {
  return (
    <footer className="bg-base-200" id="contact">
      <div className="container mx-auto">
        <div className="footer p-10">
          {/* Kurumsal Bilgiler */}
          <div>
            <span className="footer-title">Kurumsal</span> 
            <a className="link link-hover">Hakkımızda</a>
            <a className="link link-hover">Vizyon & Misyon</a>
            <a className="link link-hover">Eğitmenlerimiz</a>
            <a className="link link-hover">Başarı Hikayeleri</a>
          </div> 

          {/* Kurslar */}
          <div>
            <span className="footer-title">Kurslar</span> 
            <a className="link link-hover">Bilgisayar İşletmeni</a>
            <a className="link link-hover">Yazılım Geliştirme</a>
            <a className="link link-hover">Grafik Tasarım</a>
            <a className="link link-hover">Tüm Kurslar</a>
          </div> 

          {/* İletişim */}
          <div>
            <span className="footer-title">İletişim</span> 
            <a className="link link-hover">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Merkez Mah. Eğitim Cad. No:123 İstanbul
            </a>
            <a className="link link-hover">
              <i className="fas fa-phone mr-2"></i>
              +90 (212) 345 67 89
            </a>
            <a className="link link-hover">
              <i className="fas fa-envelope mr-2"></i>
              info@akademi.com
            </a>
          </div>

          {/* Sosyal Medya */}
          <div>
            <span className="footer-title">Sosyal Medya</span> 
            <div className="grid grid-flow-col gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" 
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" 
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Alt Footer */}
        <div className="footer footer-center p-4 border-t border-base-300">
          <div>
            <p>Copyright © 2024 - Tüm hakları saklıdır | HW Yazılım</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 