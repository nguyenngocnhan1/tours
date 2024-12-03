const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// 1. API Tạo user
router.post('/add', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = new User({ name, email, age });
        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User created successfully!', user: savedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

// 2. API Lấy danh sách tất cả user
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

// 3. API Lấy thông tin một user theo ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
});

// 4. API Cập nhật thông tin user theo ID
router.put('/:id', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, age },
            { new: true, runValidators: true }
        );
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User updated successfully!', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
});

// 5. API Xóa user theo ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});

module.exports = router;
