
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
        min: [10, 'Minimum 10 numbers allow'],
        max: [10, 'Maximum 10 numbers allow']
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Please enter the email']
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'Please enter the password']
    },

    token: {
        type: String,
        trim: true,
    }
};