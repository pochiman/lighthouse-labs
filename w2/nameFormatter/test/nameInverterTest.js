const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {

  it('must return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('must return a single name when passed a single name', function() {
    const inputName = "Bart";
    const expectedOutput = "Bart";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('must return a single name when passed a single name with extra spaces', function() {
    const inputName = " Homer ";
    const expectedOutput = "Homer";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('must return a last-name, first-name when passed a first and last-name', function() {
    const inputName = "Bart Simpson";
    const expectedOutput = "Simpson, Bart";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('Stretch: must return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)', function() {
    const inputName = " Homer Simpson ";
    const expectedOutput = "Simpson, Homer";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('must return an empty string when passed a single honorific', function() {
    const inputName = "Dr. ";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('must return a honorific first-name when passed a honorific first-name', function() {
    const inputName = "Dr. Homer";
    const expectedOutput = "Dr. Homer";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('must return a honorific last-name, first-name when passed a honorific first-name last-name', function() {
    const inputName = "Dr. Bart Simpson";
    const expectedOutput = "Dr. Simpson, Bart";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('must return a honorific last-name, first-name when passed a honorific first-name last-name with extra spaces around the words', function() {
    const inputName = " Dr. Homer Simpson ";
    const expectedOutput = "Dr. Simpson, Homer";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  
  it('must throw an error when name is undefined', function() {
    const inputName = undefined;
    const expectedOutput = "Error";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

});