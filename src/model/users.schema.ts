
export const UserSchema = {
    
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Please enter the first name']
    },

    lastName: {
        type: String,
        trim: true,
        required: [true, 'Please enter the last name']
    },

    phoneNo: {
        type: Number,
        required: [true, 'Please enter the phone number']
        // min: [8, 'Minimum 8 numbers allow'],
        // max: [11, 'Maximum 10 numbers allow']
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Please enter the email'],
        unique: [true, 'This email has already exist']
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'Please enter the password']
    },

    accessToken: {
        type: String,
        trim: true,
    }
};