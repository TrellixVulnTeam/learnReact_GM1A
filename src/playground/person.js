const isAdult = (x) => {
    if (x >= 18) return true;
    return false;
}
const canDrink = (x) => x >= 21;
const isSenjor = (x) => x >= 65;

export {
    isAdult,
    canDrink,
    isSenjor as default
}