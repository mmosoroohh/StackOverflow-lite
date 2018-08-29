const baseUrl = 'http://127.0.0.1:5000/api/v2';

const api = {
    
  post(endpoint, data, token = null) {
    return fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
            mode: 'no-cors'      
        }
    });
  }


}

export default api;