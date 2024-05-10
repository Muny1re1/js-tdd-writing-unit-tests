export function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
        points += /[aeiou]/i.test(char.toLowerCase()) ? 1 : 2;
    }
    return points;
}
