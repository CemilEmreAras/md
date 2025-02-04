function Settings() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Site Ayarları</h2>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="space-y-6">
            {/* Genel Ayarlar */}
            <div>
              <h3 className="text-xl font-bold mb-4">Genel Ayarlar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Site Başlığı</span>
                  </label>
                  <input type="text" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Site Açıklaması</span>
                  </label>
                  <input type="text" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Logo</span>
                  </label>
                  <input type="file" className="file-input file-input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Favicon</span>
                  </label>
                  <input type="file" className="file-input file-input-bordered" />
                </div>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div>
              <h3 className="text-xl font-bold mb-4">Sosyal Medya</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Facebook</span>
                  </label>
                  <input type="url" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Twitter</span>
                  </label>
                  <input type="url" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Instagram</span>
                  </label>
                  <input type="url" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">YouTube</span>
                  </label>
                  <input type="url" className="input input-bordered" />
                </div>
              </div>
            </div>

            {/* SEO Ayarları */}
            <div>
              <h3 className="text-xl font-bold mb-4">SEO Ayarları</h3>
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Meta Başlık</span>
                  </label>
                  <input type="text" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Meta Açıklama</span>
                  </label>
                  <textarea className="textarea textarea-bordered"></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Meta Anahtar Kelimeler</span>
                  </label>
                  <input type="text" className="input input-bordered" />
                </div>
              </div>
            </div>

            {/* Kaydet Butonu */}
            <div className="text-right">
              <button className="btn btn-primary">Ayarları Kaydet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings; 