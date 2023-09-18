
const signupApi = async (url, data) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            return data;
        })
        .catch(error => {
            return error;
        });
};

const loginApi = async (url, data) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            return data;
        })
        .catch(error => {
            return error;
        });

};

const checkCredentialApi = async (url, data) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            return data;
        })
        .catch(error => {
            return error;
        });
};

const changePasswordApi = async (url, data) => {

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            return data;
        })
        .catch(error => {
            return error;
        });
};

const postApi = async (url, token, data) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    };

    return fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            return data;
        })
        .catch(error => {
            return error;
        });
};

const fetchApi = async (url, token) => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    return fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            return data;
        })
        .catch(error => {
            return error;
        });
};

const putApi = async (url, token, data) => {

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    };
    return fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            return data;
        })
        .catch(error => {
            return error;
        });
};

const deleteApi = async (url, token) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    };
    return fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            return data;
        })
        .catch(error => {
            return error;
        });
};

const uploadImg = async (url, token, data) => {

    return await fetch(
        url,
        {
            method: 'post',
            body: data,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
        }
    )
        .then(result => {
            let data = JSON.parse(result);
            console.log('result=>', result);
            console.log('data=>', data);
            return data;
        })
        .catch(error => {
            console.log('error=>', error);
            return error;
        });
};

export {
    signupApi,
    loginApi,
    checkCredentialApi,
    changePasswordApi,

    postApi,
    fetchApi,
    putApi,
    deleteApi,

    uploadImg
};