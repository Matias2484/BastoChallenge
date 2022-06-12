const request = require('supertest');
const {app, server} = require('../index');



// Testing get all animals endpoint
describe("GET /animales" , () => {
    it('respond with json containing a list of all animals', done => {
        request(app)
        .get('/animales')
        .set('Accept', 'application/json')
        .expect(200, done);
    })
})
//Testing get a single animal endopoint
describe("GET /animales/:id" , () => {
    it('respond with json containing a single animal', done => {
        request(app)
        .get('/animales/:id')
        .set('Accept', 'application/json')
        .expect(200, done);
    })
})
