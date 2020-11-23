const { expect } = require('chai');
const { Given, When, Then } = require('cucumber');
const API = require('./../utils/api').API

const arrStatusOK = [200,201];
let globalUrl = '';
let globalResponse = '';

Given(/^el endpoint de iniciar sesion es (.*)$/, (url) => {
    globalUrl = url;
});

When(/^ingreso el usuario (.*) y contraseña (.*)$/, async (user, password) => {
    const credentials = {
        "username": user,
        password
    }
    globalResponse = await API().login(globalUrl, credentials);
});

Then(/^valido el inicio de sesión (.*)$/, (state) => {
    if (state == 'correcto' && arrStatusOK.includes(globalResponse.status)) {
        const token = globalResponse.data['token'];
        expect(token).to.be.a('string').is.not.empty;

    } else {
        const message = globalResponse.response['data']['message'];
        const type = globalResponse.response['data']['type'];
        expect(message).to.equal('Invalid login and/or password');
        expect(type).to.equal('ItemNotFoundException');
    }
});
