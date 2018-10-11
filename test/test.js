var chai = require('chai')
const cheerio = require('cheerio')
const pug = require('pug');
const compiledFile = pug.renderFile('views/index.pug');
const $ = cheerio.load(compiledFile);
console.log(compiledFile);

var assert = require('assert');

describe('Numbers', function() {
  describe('Number container', function() {
    it('should be present', function() {
      var x = $('#numbers').length;
      assert(x === 1, '#numbers container exists');
    });
  });
});