/**
 *
 * mocha 가 es6 문법과 함께 돌기 위해서는
  "babel": "6.3.13",
  "babel-core": "6.1.18",
  "babel-preset-es2015": "6.3.13",
 위 세개의 패키지가 6.x.x 버전 이상인 것들과 함께 빌드해서 아래와 같은 커맨드로 돌려야 한다.
 "mocha --compilers js:babel-core/register test/test.js"
 참고
 @link : http://krasimirtsonev.com/blog/article/using-mocha-with-es6-spec-files
 */
// const config = require('../config/config.js');
import {token, clientId} from "../config/config";

var assert = require('assert');
describe('config', function() {
    describe('#token', function() {
        it('should have a value', function() {
            console.log(token);
            assert.ok(token !== "");
        });
    });
    describe('#clientId', function() {
        it('should have a value', function() {
            console.log(clientId);
            assert.ok(clientId !== "");
        });
    });
});
