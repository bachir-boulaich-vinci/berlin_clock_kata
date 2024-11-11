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
        let yellowCounter = Math.floor(minutes / 5);
        let result = "";
        for(let i = 1; i <= 11; i++){
            if(yellowCounter >= i){
                if(i % 3 === 0) result += "R";
                else result += "J";
            } else{
                result += "X";
            }
        }
        return result;
    }
}