
function shuffleCards(array) {   
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }   
    return array;  
}

function createRandomIcons(array, amount) {
    if (amount === 8) {
        return shuffleCards([...array, ...array])
    }
    const icons = shuffleCards(array).slice(0, (amount **2 / 2))
    return shuffleCards([...icons, ...icons])
}

export default createRandomIcons;