import showButtonCheck from '../../utils';


describe("Show Button", () => {
    it("should return false when minimum tiles and maximum tiles equals",()=>{
        expect(showButtonCheck(5,2,2)).toBeFalsy();
    });
    it("should return false when minimum tiles and product list length equals",()=>{
        expect(showButtonCheck(2,5,2)).toBeFalsy();
    });
    it("should return true when minimum tiles and max tiles is different and product list length is diff from both",()=>{
        expect(showButtonCheck(4,5,2)).toBeTruthy();
    });
})