const ValidateMessage = {
    required: (attribute) => {
        return `The ${attribute} field is required.`;
    },
    email: (attribute) => {
        return `The ${attribute} must be a valid email address`;
    },
};

export default ValidateMessage;
