const chai = require("chai");

const { SinglyLinkedList } = require("../../LinkedList");

describe("[SinglyLinkedList]", () => {
  const mockSinglyLinkedList = {
    data: 1,
    next: { data: 2, next: { data: 3, next: { data: 4, next: null } } },
  };

  it("Should Create SinglyLinkedList correctly", () => {
    const result = new SinglyLinkedList(
      1,
      new SinglyLinkedList(
        2,
        new SinglyLinkedList(3, new SinglyLinkedList(4, null))
      )
    );

    chai.expect(mockSinglyLinkedList).deep.equal(result);
  });

  it("Should Create SinglyLinkedList from array", () => {
    const linkedList = SinglyLinkedList.fromArray([1, 2, 3, 4]);

    chai.expect(mockSinglyLinkedList).deep.equal(linkedList);
  });

  it("Should Create SinglyLinkedList from reverse array", () => {
    const expected = {
      data: 4,
      next: { data: 3, next: { data: 2, next: { data: 1, next: null } } },
    };
    const linkedList = SinglyLinkedList.fromReverseArray([1, 2, 3, 4]);

    chai.expect(expected).deep.equal(linkedList);
  });

  it("Should Convert SinglyLinkedList to array", () => {
    const linkedList = SinglyLinkedList.toArray(mockSinglyLinkedList);

    chai.expect(linkedList).deep.equal([1, 2, 3, 4]);
  });

  it("Should Convert SinglyLinkedList to reverse array", () => {
    const linkedList = SinglyLinkedList.toReverseArray(mockSinglyLinkedList);

    chai.expect(linkedList).deep.equal([4, 3, 2, 1]);
  });
});
