export class Main {
    getSimpleMinutesLine(minutes){
        if(minutes === 1) return "JXXX";
        if(minutes === 2) return "JJXX";
        if(minutes === 3) return "JJJX";
        if(minutes === 4) return "JJJJ";
        return "XXXX";
    }
}