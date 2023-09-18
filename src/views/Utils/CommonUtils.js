
const setLoggedUserDetails = (token, userData, role) => {
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('role', JSON.stringify(role));
};

const getLoggedUserDetails = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return user;
    } else {
        return '';
    }
};

const getLoggedUserRole = () => {
    const role = JSON.parse(localStorage.getItem('role'));
    if (role) {
        return role;
    } else {
        return '';
    }

};

const getAuthToken = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        return token;
    } else {
        return '';
    }

};



export { setLoggedUserDetails, getLoggedUserDetails, getLoggedUserRole, getAuthToken };
