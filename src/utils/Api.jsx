class Api {
    constructor({ baseUrl, headers }) {
        this._link = baseUrl;
        this._headers = headers;
    }

    _getHeaders() {
        const token = localStorage.getItem('token');
        return {
            'x-auth': token,
            ...this._headers,
        };
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getInitialValues() {
        return fetch(`${this._link}ru/data/v3/testmethods/docs/userdocs/get`, {
            headers: this._getHeaders()
        })
            .then(this._getResponseData);

    }

    addRow(data) {
        return fetch(`${this._link}ru/data/v3/testmethods/docs/userdocs/create`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify(data)
        })

            .then(this._getResponseData);
    }

    deleteRow(id) {
        return fetch(`${this._link}ru/data/v3/testmethods/docs/userdocs/delete/${id}`, {
            method: 'POST',
            headers: this._getHeaders(),
        })

            .then(this._getResponseData);
    }

    editRow(id, data) {
        return fetch(`${this._link}ru/data/v3/testmethods/docs/userdocs/set/${id}`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify(data),
        })

            .then(this._getResponseData);
    }

}

export const api = new Api({
    baseUrl: 'https://test.v5.pryaniky.com/',
    headers: {
        'Content-Type': 'application/json',
    }
});