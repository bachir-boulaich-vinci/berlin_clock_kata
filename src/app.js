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
}