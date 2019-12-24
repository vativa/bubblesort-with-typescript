
const unsortedNumbers = [10, 8, -5, 8];
const unsortedString = 'Xaslkdnvajbnaljflaksjdfjabslnkvalksf';
const numberCollection = new NumbersCollection_1.NumbersCollection(unsortedNumbers);
console.log('>>> Sort numbers:', unsortedNumbers, numberCollection.sort().toString());
const charCollection = new CharactersCollection_1.CharactersCollection(unsortedString);
console.log('>>> Sort characters:', unsortedString, charCollection.sort().toString());
const linkedList = new LindedList_1.LinkedList(unsortedNumbers);
console.log('>>> Sort linkedList:', unsortedNumbers, linkedList.sort().toString());
