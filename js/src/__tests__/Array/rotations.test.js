const chai = require("chai");
const { rotateWithExtraSpace } = require("../../Array/rotations");

describe("Array rotations using temp array ", () => {
  it("It should rotateWithExtraSpace array by 2", () => {
    const result = rotateWithExtraSpace([1, 3, 3, 4, 5, 6], 2);
    chai.expect(result).deep.equal([3, 4, 5, 6, 1, 3]);
  });

  it("It should rotateWithExtraSpace array by 0", () => {
    const result = rotateWithExtraSpace([1, 3, 3, 4, 5, 6], 0);
    chai.expect(result).deep.equal([1, 3, 3, 4, 5, 6]);
  });

  it("It should rotateWithExtraSpace array by array length", () => {
    const result = rotateWithExtraSpace([1, 3, 3, 4, 5, 6], 6);
    chai.expect(result).deep.equal([1, 3, 3, 4, 5, 6]);
  });

  it("It should rotateWithExtraSpace array by array length + 2", () => {
    const result = rotateWithExtraSpace([1, 3, 3, 4, 5, 6], 8);
    chai.expect(result).deep.equal([3, 4, 5, 6, 1, 3]);
  });
});
