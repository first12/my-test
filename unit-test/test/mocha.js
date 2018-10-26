const assert = require('assert');
const {add, mul} = require('../math');


describe('add', function() {
  describe('add()', function() {
    it('add 1 + 2 = 3', function() {
      assert.equal(add(1,2),3);
    });
  });
});
describe('mul', function() {
  describe('mul()', function() {
    it('mul 12 - 2 = 10', function() {
      assert.equal(mul(12,2),10);
    });
  });
});

// describe("cover",function () {
//   it("cover(3,1) equal 2", function(){
//     assert.equal(cover(3,1),2);
//   })
//   it("cover(3,3) equal 3", function(){
//     assert.equal(cover(3,3),3);
//   })
//   it("cover(1,3) equal 6", function(){
//     assert.equal(cover(1,3),6);
//   })
// })