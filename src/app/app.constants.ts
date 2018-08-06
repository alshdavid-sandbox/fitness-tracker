export const constants = {
    defaultRedirectUrl: 'https://google.com.au',
    http: {
        defaultApi: 'http://localhost:3000/',
    },
    aws: {
        urls: {
            login: 'https://sms-to-impress.auth.ap-southeast-2.amazoncognito.com/login?response_type=code&client_id=778hjcisnlacq9amah79k45poo&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fidentity',
            validateCode: 'https://sms-to-impress.auth.ap-southeast-2.amazoncognito.com/oauth2/token'
        }
    }
};
