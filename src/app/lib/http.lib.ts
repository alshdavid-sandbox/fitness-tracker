import { constants } from '../app.constants';
import { includes } from 'lodash';

export class HttpUtility {

    static get({ endpoint = '', headers = {}, url = '' } = {}): Promise<any> {
        return this.fetchCreator(`${url}${endpoint}`, {
            method: 'GET',
            headers: { ...headers }
        });
    }

    static post({ endpoint = '', body = {}, headers = {}, url = '' } = {}): Promise<any> {
        return this.fetchCreator(`${url}${endpoint}`, {
            method: 'POST',
            body,
            headers: { ...headers }
        });
    }

    static put({ endpoint = '', body = {}, headers = {}, url = '' } = {}): Promise<any> {
        return this.fetchCreator(`${url}${endpoint}`, {
            method: 'PUT',
            body,
            headers: { ...headers }
        });
    }

    static patch({ endpoint = '', body = {}, headers = {}, url = '' } = {}): Promise<any> {
        return this.fetchCreator(`${url}${endpoint}`, {
            method: 'PATCH',
            body,
            headers: { ...headers }
        });
    }

    static delete({ endpoint = '', headers = {}, url = '' } = {}): Promise<any> {
        return this.fetchCreator(`${url}${endpoint}`, {
            method: 'DELETE',
            headers: { ...headers }
        });
    }

    static async fetchCreator(url, options) {
        if (
            options.body && !options.headers['content-type'] || 
            options.body && options.headers['content-type'] == 'application/json'
        ) {
            options.headers['content-type'] = 'application/json';
            options.body = JSON.stringify(options.body);
        }

        const response = await fetch(url, options);

        const __meta__ = {
            status: response.status,
            message: response.statusText,
            url: url
        };

        const appResponse = {
            __meta__,
            body: undefined
        };

        if (includes(response.headers.get('content-type'), 'application/json') && response.body) {
            appResponse.body = await response.json();
        } else {
            appResponse.body = await response.text();
        }

        if (__meta__.status <= 199 || __meta__.status >= 300) {
            throw appResponse;
        }

        return appResponse;
    }
}
