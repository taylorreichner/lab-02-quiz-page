export function countsAsAYes(answer) {
    return answer.charAt(0).toUpperCase() === 'Y';

}

export function countsAsANo(answer) {
    return answer.charAt(0).toUpperCase() === 'N';
}