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

    it("Five minutes line: When minutes are equals to 5", function(){
        const result = main.getFiveMinutesLine(new Date("2024-11-01T09:05:00").getMinutes()); 

        expect(result).toBe("JXXXXXXXXXX");
    });

    it("Five minutes line: When minutes are equals to 10", function(){
        const result = main.getFiveMinutesLine(new Date("2024-11-01T09:10:00").getMinutes());

        expect(result).toBe("JJXXXXXXXXX");
    });

    it("Five minutes line: When minutes are equals to 15", function(){
        const result = main.getFiveMinutesLine(new Date("2024-11-01T09:15:00").getMinutes());

        expect(result).toBe("JJRXXXXXXXX");
    });

    it("Five minutes line: When minutes are equals to 20", function(){
        const result = main.getFiveMinutesLine(new Date("2024-11-01T09:20:00").getMinutes());

        expect(result).toBe("JJRJXXXXXXX");
    });

    it("Five minutes line: When minutes are equals to 47", function(){
        const result = main.getFiveMinutesLine(new Date("2024-11-01T09:47:00").getMinutes());

        expect(result).toBe("JJRJJRJJRXX");
    });

    it("Five minutes line: When minutes are equals to 49", function(){
        const result = main.getFiveMinutesLine(new Date("2024-11-01T09:49:00").getMinutes());

        expect(result).toBe("JJRJJRJJRXX");
    });

    it("Simple hours line: When hours are equals to 0", function(){
        const result = main.getSimpleHoursLine(0);

        expect(result).toBe("XXXX");
    });

    it("Simple hours line: When hours are equals to 1", function(){
        const result = main.getSimpleHoursLine(new Date("2024-11-01T01:00:00").getHours());

        expect(result).toBe("RXXX");
    });

    it("Simple hours line: When hours are equals to 2", function(){
        const result = main.getSimpleHoursLine(new Date("2024-11-01T02:00:00").getHours());

        expect(result).toBe("RRXX");
    });
    it("Simple hours line: When hours are equals to 3", function(){
        const result = main.getSimpleHoursLine(new Date("2024-11-01T03:00:00").getHours());

        expect(result).toBe("RRRX");
    });
    it("Simple hours line: When hours are equals to 4", function(){
        const result = main.getSimpleHoursLine(new Date("2024-11-01T04:00:00").getHours());

        expect(result).toBe("RRRR");
    });
    it("Simple hours line: When hours are equals to 5", function(){
        const result = main.getSimpleHoursLine(new Date("2024-11-01T05:00:00").getHours());

        expect(result).toBe("XXXX");
    });
    it("Simple hours line: When hours are equals to 6", function(){
        const result = main.getSimpleHoursLine(new Date("2024-11-01T06:00:00").getHours());

        expect(result).toBe("RXXX");
    });
    it("Simple hours line: When hours are equals to 13", function(){
        const result = main.getSimpleHoursLine(new Date("2024-11-01T13:00:00").getHours());

        expect(result).toBe("RRRX");
    });
    it("Five hours line: When hours are equals to 0", function(){
        const result = main.getFiveHoursLine(new Date("2024-11-01T00:00:00").getHours());

        expect(result).toBe("XXXX");
    });
    it("Five hours line: When hours are equals to 5", function(){
        const result = main.getFiveHoursLine(new Date("2024-11-01T05:00:00").getHours());

        expect(result).toBe("RXXX");
    });
    it("Five hours line: When hours are equals to 6", function(){
        const result = main.getFiveHoursLine(new Date("2024-11-01T06:00:00").getHours());

        expect(result).toBe("RXXX");
    });
    it("Five hours line: When hours are equals to 13", function(){
        const result = main.getFiveHoursLine(new Date("2024-11-01T13:00:00").getHours());

        expect(result).toBe("RRXX");
    });
    it("Five hours line: When hours are equals to 18", function(){
        const result = main.getFiveHoursLine(new Date("2024-11-01T18:00:00").getHours());

        expect(result).toBe("RRRX");
    });
    it("Five hours line: When hours are equals to 23", function(){
        const result = main.getFiveHoursLine(new Date("2024-11-01T23:00:00").getHours());

        expect(result).toBe("RRRR");
    });
    it("Seconds line: when seconds equal 0", function(){
        const result = main.getSecondsLine(new Date("2024-11-01T23:00:00").getSeconds());

        expect(result).toBe("R");
    });
    it("Seconds line: when seconds equal 1", function(){
        const result = main.getSecondsLine(new Date("2024-11-01T23:00:01").getSeconds());

        expect(result).toBe("X");
    }); 
    it("Seconds line: when seconds equal 2", function(){
        const result = main.getSecondsLine(new Date("2024-11-01T23:00:02").getSeconds());

        expect(result).toBe("R");
    }); 
    it("Seconds line: when seconds equal 3", function(){
        const result = main.getSecondsLine(new Date("2024-11-01T23:00:03").getSeconds());

        expect(result).toBe("X");
    }); 
    it("Seconds line: when seconds equal 49", function(){
        const result = main.getSecondsLine(new Date("2024-11-01T23:00:49").getSeconds());

        expect(result).toBe("X");
    }); 

    it("Berlin clock: when time equal 00:00:00", function(){
        const result = main.berlinClock(new Date("2024-11-01T00:00:00"));

        expect(result).toBe("R\nXXXX\nXXXX\nXXXXXXXXXXX\nXXXX");
    }); 

    it("Berlin clock: when time equal 18:12:23", function(){
        const result = main.berlinClock(new Date("2024-11-01T18:12:23"));

        expect(result).toBe("X\nRRRX\nRRRX\nJJXXXXXXXXX\nJJXX");
    }); 
});