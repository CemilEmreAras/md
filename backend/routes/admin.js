const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { auth, adminAuth } = require('../middleware/auth');
const bcrypt = require('bcrypt');

// Tüm öğrencileri getir
router.get('/students', auth, adminAuth, async (req, res) => {
  try {
    const students = await User.find({ role: 'student' }).select('-password');
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Yeni öğrenci ekle
router.post('/students', auth, adminAuth, async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const student = new User({
      name,
      email,
      password: hashedPassword,
      role: 'student'
    });

    await student.save();
    res.status(201).json({ message: 'Student created successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Öğrenci güncelle
router.put('/students/:id', auth, adminAuth, async (req, res) => {
  try {
    const updates = req.body;
    const student = await User.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    ).select('-password');
    
    res.json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Öğrenci sil
router.delete('/students/:id', auth, adminAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 