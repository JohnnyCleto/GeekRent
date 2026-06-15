const request =
require('supertest');

const app =
require('../../src/app');

describe(
'Auth Routes',
() => {

    test(
    'deve responder',
    async () => {

        const response =
        await request(app)
        .get('/auth');

        expect(
            response.statusCode
        ).not.toBe(500);

    });

});