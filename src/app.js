export class Main {
    getSimpleMinutesLine(minutes){
        if(minutes === 1) return "JXXX";
        if(minutes === 2) return "JJXX";
        return "XXXX";
    }
}