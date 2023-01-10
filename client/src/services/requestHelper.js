const apiUrl = '/api';

export const get = async (entityName, id = '') => {
    return await makeRequest(`${entityName}/${id}`, 'GET');
}

export const post = async (entityName, body) => {
    return await makeRequest(entityName, 'POST', body);
}

export const put = async (entityName, id, body) => {
    return await makeRequest(`${entityName}/${id}`, 'PUT', body);
}

export const deleteReq = async (entityName, id) => {
    return await makeRequest(`${entityName}/${id}`, 'DELETE');
}

const makeRequest = async (path, method, body) => {
    try {
        const url = `${apiUrl}/${path}`
        const res = await fetch(url, {
            method,
            body: body ? JSON.stringify(body) : undefined ,
            headers: { "Content-Type": "application/json" }
        });

        const dataObj = await res.json();

        if(res.ok) {
            return dataObj;
        }

        alert(`${dataObj.message}`);
        return dataObj;
    } catch (err) {
        console.error(err);
    }
}