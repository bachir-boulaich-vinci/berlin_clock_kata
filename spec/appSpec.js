import { Main } from "../src/app.js";

describe("Converting timestamp into Berlin Clock Kata", function(){
    const main = new Main();

    it("Simple minutes line: When minutes are equals to 0", function(){
        const result = main.getSimpleMinutesLine(0);

        expect(result).toBe("XXXX");
    });

    it("Simple minutes line: When minutes are equals to 1", function(){
        const result = main.getSimpleMinutesLine(1);

        expect(result).toBe("JXXX");
    });

    it("Simple minutes line: When minutes are equals to 2", function(){
        const result = main.getSimpleMinutesLine(2);

        expect(result).toBe("JJXX");
    });

    it("Simple minutes line: When minutes are equals to 3", function(){
        const result = main.getSimpleMinutesLine(3);

        expect(result).toBe("JJJX");
    });

    it("Simple minutes line: When minutes are equals to 4", function(){
        const result = main.getSimpleMinutesLine(4);

        expect(result).toBe("JJJJ");
    });

    it("Simple minutes line: When minutes are equals to 5", function(){
        const result = main.getSimpleMinutesLine(5);
        
        expect(result).toBe("XXXX");
    });

    it("Simple minutes line: When minutes are equals to 6", function(){
        const result = main.getSimpleMinutesLine(6);

        expect(result).toBe("JXXX");
    });

    it("Simple minutes line: When minutes are equals to 13 (with timestamp)", function(){
        const result = main.getSimpleMinutesLine(new Date("2024-11-01T09:13:00").getMinutes());

        expect(result).toBe("JJJX");
    });

    it("Five minutes line: When minutes are equals to 0", function(){
        const result = main.getFiveMinutesLine(new Date("2024-11-01T09:00:00").getMinutes()); 

        expect(result).toBe("XXXXXXXXXXX");
    });
});