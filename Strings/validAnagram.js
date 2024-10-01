const isAnagram = (str1, str2) => {
    const cleanedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // Sort the characters of each string and compare
    const sortedStr1 = cleanedStr1.split('').sort().join('');
    const sortedStr2 = cleanedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
};