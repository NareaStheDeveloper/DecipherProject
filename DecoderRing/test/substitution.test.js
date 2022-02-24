// Write your tests here!
const {substitution} = require("../src/substitution");
const {expect} = require("chai");


describe("substitution", () => {
  
  it ("should encode thinkful correctly", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.eql(expected);
  })
 it ("should maintain spaces given in input", () => {
  const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
  const expected = "elp xhm xf mbymwwmfj dne";
  expect(actual).to.eql(expected);
 })
  it ("should encode 'You are an excellent spy', correctly", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
  })

  it ("should return false", () => {
    const actual = substitution("thinkful", "short");
    const expected = false;
    expect(actual).to.eql(expected);
  })

  it ("should should encode 'message'", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.eql(expected);
  })

  it ("should decode 'jrufscpw' to 'thinkful'", () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = 'thinkful';
    expect(actual).to.eql(expected);
  })

  it ("should decode 'y&ii$r&' to equal 'message'", () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message";
    expect(actual).to.eql(expected);
  })

  it ("should return false if duplicated letters are present", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.eql(expected);
  })
});