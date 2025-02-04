function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Toplam Kurs</div>
            <div className="stat-value">12</div>
            <div className="stat-desc">↗︎ 2 yeni (son 30 gün)</div>
          </div>
        </div>
        
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Aktif Öğrenci</div>
            <div className="stat-value">450</div>
            <div className="stat-desc">↗︎ 45 yeni (son 30 gün)</div>
          </div>
        </div>
        
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Toplam İçerik</div>
            <div className="stat-value">89</div>
            <div className="stat-desc">↗︎ 7 yeni (son 30 gün)</div>
          </div>
        </div>
        
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Başvuru</div>
            <div className="stat-value">24</div>
            <div className="stat-desc">↘︎ 3 bekleyen</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title">Son Aktiviteler</h3>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Tarih</th>
                  <th>İşlem</th>
                  <th>Kullanıcı</th>
                  <th>Detay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-03-15</td>
                  <td>Yeni Kurs</td>
                  <td>Admin</td>
                  <td>React.js Kursu eklendi</td>
                </tr>
                <tr>
                  <td>2024-03-14</td>
                  <td>İçerik Güncelleme</td>
                  <td>Editor</td>
                  <td>JavaScript müfredatı güncellendi</td>
                </tr>
                <tr>
                  <td>2024-03-14</td>
                  <td>Yeni Öğrenci</td>
                  <td>System</td>
                  <td>5 yeni öğrenci kaydı</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 