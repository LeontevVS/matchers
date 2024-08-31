export function getSortedCharactersList(charactersList) {
    const sortedCharactersList = [...charactersList];
    return sortedCharactersList.sort((a, b) => b.health - a.health);
}