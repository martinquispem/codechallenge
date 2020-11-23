const axios = require('axios');
const querystring = require('querystring');

const API = () => {
    const login = async (url, { username, password }) => {
        try {
            return await axios({
                method: 'POST',
                data: querystring.stringify({ username, password }),
                url,
            });
        } catch (e) {
            return e;
        }
    }

    return {
        login
    }
}

exports.API = API