import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [students, setStudents] = useState([]);

  // Öğrenci ekleme
  const addStudent = (student) => {
    const newStudent = {
      ...student,
      role: 'student' // role ekledik
    };
    setStudents([...students, newStudent]);
    console.log('Öğrenci eklendi:', newStudent); // Debug için
    console.log('Tüm öğrenciler:', [...students, newStudent]); // Debug için
  };

  // Öğrenci girişi
  const studentLogin = (email, password) => {
    console.log('Giriş denemesi:', email); // Debug için
    console.log('Mevcut öğrenciler:', students); // Debug için
    
    const student = students.find(
      s => s.email === email && s.password === password
    );
    
    if (student) {
      console.log('Öğrenci bulundu:', student); // Debug için
      setCurrentUser(student);
      return true;
    }
    
    console.log('Öğrenci bulunamadı'); // Debug için
    return false;
  };

  // Admin girişi
  const adminLogin = (email, password) => {
    if (email === 'admin@akademi.com' && password === 'Admin123!') {
      setCurrentUser({ email, role: 'admin' });
      return true;
    }
    return false;
  };

  // Çıkış
  const logout = () => {
    setCurrentUser(null);
  };

  // Debug için tüm state'i görüntüle
  console.log('AuthContext State:', {
    currentUser,
    studentsCount: students.length,
    students
  });

  return (
    <AuthContext.Provider value={{
      currentUser,
      students,
      addStudent,
      studentLogin,
      adminLogin,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 