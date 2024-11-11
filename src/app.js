export class Main {
    getSimpleMinutesLine(minutes){
        let yellowCounter = minutes % 5;
        return this.turnOnSimpleMinutesLights(yellowCounter);

    }

    turnOnSimpleMinutesLights(yellowCounter) {
        let result = "";
        for (let i = 1; i <= 4; i++) {
            if (yellowCounter >= i) {
                result += "J";
            } else {
                result += "X";
            }
        }
        return result;
    }

    getFiveMinutesLine(minutes){
        let yellowCounter = Math.floor(minutes / 5);
        return this.turnOnFiveMinutesLights(yellowCounter);
    }

    turnOnFiveMinutesLights(yellowCounter) {
        let result = "";
        for (let i = 1; i <= 11; i++) {
            if (yellowCounter >= i) {
                result = this.isLightRedOrYellow(i, result);
            } else {
                result += "X";
            }
        }
        return result;
    }

    isLightRedOrYellow(i, result) {
        if (i % 3 === 0) result += "R";
        else result += "J";
        return result;
    }

    getSimpleHoursLine(hours){
        return "XXXX";
    }
}