class QwertyCorrector {
    constructor() {
        this.qwertyMapping = {
            "ת": ",", ",": "ת",
            "ף": ";", ";": "ף",
            "ץ": ".", ".": "ץ",
            "ש": "a", "a": "ש",
            "נ": "b", "b": "נ",
            "ב": "c", "c": "ב",
            "ג": "d", "d": "ג",
            "ק": "e", "e": "ק",
            "כ": "f", "f": "כ",
            "ע": "g", "g": "ע",
            "י": "h", "h": "י",
            "ן": "i", "i": "ן",
            "ח": "j", "j": 'ח',
            "ל": "k", "k": "ל",
            "ך": "l", "l": "ך",
            "צ": "m", "m": "צ",
            "מ": "n", "n": "מ",
            "ם": "o", "o": "ם",
            "פ": "p", "p": "פ",
            "/": "q", "q": "/",
            "ר": "r", "r": "ר",
            "ד": "s", "s": "ד",
            "א": "t", "t": "א",
            "ו": "u", "u": "ו",
            "ה": "v", "v": "ה",
            "'": "w", "w": "'",
            "ס": "x", "x": "ס",
            "ט": "y", "y": "ט"
        };
    }

    correctChar(oldChar) {
        console.logg(this.qwertyMapping[oldChar]);
        return this.qwertyMapping[oldChar] || oldChar;
    }
    correctString(oldString) {
        let result = '';
        for (let i = 0; i < oldString.length; i++) {
            result += this.qwertyMapping[oldString[i]] || oldString[i];
        }
        console.log(result);
        return result;
    }
}

export default QwertyCorrector;
