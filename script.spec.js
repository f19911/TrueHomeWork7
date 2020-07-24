describe('sum', () => {
  it('should sum two values', () => {
      expect(sum(5,2)).to.equal(7);
  });
})

describe ('functions' , () => {
  describe('sum', () => {
      it('should sum two values', () => {
          expect(sum(5,2)).to.equal(7);
      });
  });
  describe('copy', () => {
      it('should create new object', () => {
          const obj = {
              a: 2,
              b: 3,
          };
          expect(copy(obj)).not.equal(obj);
      });
      it('should create copy of object', () => {
          const obj = {
              a: 2,
              b: 3,
          };
          expect(copy(obj)).to.deep.equal(obj);
      });
  });
  describe('deepCopy', () => {
      it('should deep copy of object', () => {
          const obj = {
              a: {
                  a: 2,
              },
              b: {
                  b: 3,
              },
          };
          const objectCopy = deepCopy(obj);

          expect(objectCopy.a).not.equal(undefined);
      });
      it('should deep copy of object', () => {
          const obj = {
              a: {
                  a: 2,
              },
              b: {
                  b: 3,
              },
          };
          const objectCopy = deepCopy(obj);

          expect(objectCopy.a).not.equal(obj.a);
      });
  });    
}); 
