import { createInterface } from 'readline';

const readLine = createInterface({
    input: process.stdin,
    output: process.stdout
});

export default function readLineAsync(msg) {
    return new Promise(resolve => {
        readLine.question(msg, userEntry => {
            resolve(userEntry);
        })
    })
}

/**
 *  check of a string is valid string in general retuns true or false based on the string 
 * @param {*} string 
 */
function isValidString(string) {
    return (typeof string) === 'string' ? string : false
}

function isValidName() {
    // rules for a valid string along with validation return true or false based on that
}
function isValidStringUserOption() {
    // rules for a valid string along with validation return true or false based on that
}

export { isValidString }