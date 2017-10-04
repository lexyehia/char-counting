function countLetters(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((result, item) => {
        result[item] = 0;
        return result;
    }, {});

    str = str.toLowerCase();

    for (char of str) {
        if (char in alphabet) alphabet[char]++;
    }

    for (key in alphabet) {
        if (alphabet[key] === 0) delete alphabet[key];
    }

    return alphabet;
}

console.log(countLetters('Hello there Darth Vader!'));
