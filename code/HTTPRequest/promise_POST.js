const requestUrl = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject(xhr.response);
        };

        // xhr.send(body);
        xhr.send(JSON.stringify(body));
    })
}

const body = {
    name: 'Bod',
    age: 26
};

sendRequest("POST", requestUrl, body)
    .then(data => console.log(data))
    .catch(error => console.log(error));
