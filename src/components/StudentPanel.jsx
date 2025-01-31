function StudentPanel() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Öğrenci Paneli</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Eğitimlerim</h2>
            <p>Henüz bir eğitime kayıtlı değilsiniz.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPanel; 