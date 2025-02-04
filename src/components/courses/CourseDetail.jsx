import mebLogo from '../../assets/meblogo.png';

function CourseDetail({ course }) {
  return (
    <div className="min-h-screen bg-base-200 pt-20 pb-16">
      {/* Hero Section */}
      <div className="hero min-h-[400px]" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${course.coverImage})`
      }}>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold">{course.title}</h1>
            <p className="mb-5 text-lg">{course.description}</p>
            <button className="btn btn-primary">Şimdi Başvur</button>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Overview */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Kurs Hakkında</h2>
                <p>{course.overview}</p>
              </div>
            </div>

            {/* Curriculum */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Müfredat</h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <div key={index} className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="curriculum" /> 
                      <div className="collapse-title text-xl font-medium">
                        {module.title}
                      </div>
                      <div className="collapse-content">
                        <ul className="list-disc list-inside space-y-2">
                          {module.topics.map((topic, idx) => (
                            <li key={idx}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Instructor */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="relative">
                <img 
                  src={course.instructor.image} 
                  alt={course.instructor.name}
                  className="w-full h-64 object-cover"
                />
                {/* MEB Logo - Sol üst köşe */}
                <div className="absolute top-2 left-2 w-24 h-24">
                  <img 
                    src={mebLogo}
                    alt="MEB Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title">{course.instructor.name}</h3>
                <p className="text-sm text-gray-600">{course.instructor.title}</p>
                <p>{course.instructor.bio}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl mb-4">Kurs Detayları</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Süre:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Seviye:</span>
                    <span className="font-semibold">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kontenjan:</span>
                    <span className="font-semibold">{course.capacity} Kişi</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sertifika:</span>
                    <span className="font-semibold">{course.certificate}</span>
                  </div>
                  <button className="btn btn-primary w-full">Şimdi Başvur</button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl mb-4">Kurs Özellikleri</h3>
                <ul className="space-y-3">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail; 