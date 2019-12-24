import { NumberCollection } from './src/NumberCollection';
import { CharacterCollection } from './src/CharacterCollection';
import { LinkedList } from './src/LinkedList';

const unsortedNumbers = [10, 8, -5, 8];
const unsortedString = 'Xaslkdnvajbnaljflaksjdfjabslnkvalksf';
const numberCollection = new NumberCollection(unsortedNumbers);
console.log('>>> Sort numbers:', unsortedNumbers, `${numberCollection.sort()}`);
const charCollection = new CharacterCollection(unsortedString);
console.log('>>> Sort characters:', unsortedString, `${charCollection.sort()}`);
const linkedList = new LinkedList(unsortedNumbers);
console.log('>>> Sort linkedList:', unsortedNumbers, `${linkedList.sort()}`);
