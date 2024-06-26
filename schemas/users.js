import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({

    email: {
        required: true,
        unique: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    weight: {
        required: true,
        type: Number,
    },
    height: {
        required: true,
        type: Number,
    },
});

export default mongoose.model('users', usersSchema);