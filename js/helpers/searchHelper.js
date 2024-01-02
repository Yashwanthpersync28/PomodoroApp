export const searchFilter = (data, searchText, searchWith) => {
    const filteredArray = data.filter(item => {
        return [searchText].some(char => item[searchWith].toLowerCase().includes(char.toLowerCase()));
    });

    return filteredArray
}