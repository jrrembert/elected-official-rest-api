'use strict';

var assert = require('assert');
var request = require('supertest');

describe('extend prototypes', function() {
    describe('String.prototype.capitalize', function() {

        require('../utils');
        it('should capitalize the first letter in each space-delimited word passed to it', function() {
            assert.equal('Foo,bar%baz', 'foo,bar%baz'.capitalize());
            assert.equal('Foo Bar Baz', 'Foo bar baz'.capitalize());
            assert.equal('Foo', 'foo'.capitalize());
        });
    });
});

describe('test API server and routing', function() {
    var server;
    beforeEach(function() {
        server = require('../app');
    });
    afterEach(function() {
        server.close();
    });
    it('server responds to / (root)', function(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('server responds to /governors', function(done) {
        request(server)
            // TODO: pass in api version as slug
            .get('/v1/governors')
            .expect(200, done);
    });
    it('404 on routes that don\'t exist', function(done) {
        request(server)
            .get('/sultans')
            .expect(404, done);
    });

});
