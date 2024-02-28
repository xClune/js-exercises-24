const palindromes = function (string) {
    noSpaces = string.split(' ');
    for (i = 0, j = noSpaces.length - 1; i < noSpaces.length, j >= 0; i++, j--) {
        if (noSpaces[i] != noSpaces[j]) {
                return false;
            }
        }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
