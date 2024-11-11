export class Main {
    getSimpleMinutesLine(minutes){
        // if(minutes === 1) return "JXXX";
        // if(minutes === 2) return "JJXX";
        // if(minutes === 3) return "JJJX";
        // if(minutes === 4) return "JJJJ";
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
}