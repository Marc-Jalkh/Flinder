function ValidateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function ValidatePassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(password);
}

export {ValidateEmail,ValidatePassword}; 