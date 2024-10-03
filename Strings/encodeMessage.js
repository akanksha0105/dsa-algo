function encode(message) {
    // If the message is empty, return an empty string
    if (!message || message.length === 0) {
        return "";
    }

    let encodedMessage = "";
    let count = 1;

    // Iterate through the string
    for (let i = 1; i < message.length; i++) {
        // If the current character is the same as the previous one, increment count
        if (message[i] === message[i - 1]) {
            count++;
        } else {
            // Append the character and its count to the result
            encodedMessage += message[i - 1] + count;
            count = 1;  // Reset count for the next character
        }
    }

    // Append the last character and its count
    encodedMessage += message[message.length - 1] + count;

    return encodedMessage;
}
