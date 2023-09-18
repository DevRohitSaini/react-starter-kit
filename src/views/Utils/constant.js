/*need to chage as per development or prodcution*/

const serverURL = "http://localhost:4000";
const apiURL = serverURL + "/api";
const siteURL = "http://localhost:3000";

const constant = {     
    isAws: false,
    serverURL : serverURL,
    apiURL: apiURL,
    siteURL: siteURL,

    adminLoginApi: apiURL + '/auth/admin-login',
    empLoginApi: apiURL + '/auth/employee-login',
    checkCredential: apiURL + '/auth/check-credentials',
    changePassword: apiURL + '/auth/change-password',  

    adminApi: apiURL + '/admin/',    
    employeeApi: apiURL + '/employee/',

    
};

export default constant;