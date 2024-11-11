export class Main {
    getSimpleMinutesLine(minutes){
        let yellowCounter = minutes % 5;
        let offCounter = 4 - yellowCounter;
        let result = "";
        result = this.turnOnYellowLights(yellowCounter, result);
        result = this.turnOffYellowLights(offCounter, result);
        return result;
    }

    turnOffYellowLights(offCounter, result) {
        while (offCounter > 0) {
            result += "X";
            offCounter--;
        }
        return result;
    }

    turnOnYellowLights(yellowCounter, result) {
        while (yellowCounter > 0) {
            result += "J";
            yellowCounter--;
        }
        return result;
    }

    getFiveMinutesLine(minutes){
        if(minutes === 5) return "JXXXXXXXXXX";
        if(minutes === 10) return "JJXXXXXXXXX";
        return "XXXXXXXXXXX";
    }
}