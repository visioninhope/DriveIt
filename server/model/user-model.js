const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    staffId: { type: String, required: true, trim: true, unique: true },
    phone: { type: Number, trim: true },
    role: { type: String, enum: ['driver', 'vehicle_asignee', 'vehicle_coordinator', 'maintenance_personnel'] },
    driver: { type: mongoose.Types.ObjectId, ref: "User" },
    dept: { type: String, enum: ['SEET', 'SAAT', 'SOS', 'SEMS', 'SHIT', 'SO'] },
    pic: { type: String, trim: true, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GL8Mz5XG-_9NZ77L0xQzDdiYIBqXgfOUM4pJUnKWww&s' },
    vehicle: [{ type: mongoose.Types.ObjectId, ref: "Vehicle" }],
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)