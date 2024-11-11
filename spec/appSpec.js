import { Main } from "../src/app.js";

describe("Converting timestamp into Berlin Clock Kata", function(){
    const main = new Main();

    it("When minutes are equals to 0", function(){
        const result = main.getSimpleMinutesLine(0);

        expect(result).toBe("XXXX");
    });

    it("When minutes are equals to 1", function(){
        const result = main.getSimpleMinutesLine(1);

        expect(result).toBe("JXXX");
    });
});