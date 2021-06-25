import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollections } from "./CharactersCollections";
import { LinkedList } from "./LinkedList";

const data = new NumbersCollection([-9, 2, -96, 7, 4]);
data.sort();
console.log(data.data);

const data2 = new CharactersCollections("Shivam");
data2.sort();
console.log(data2.data);

const linkedList = new LinkedList();

linkedList.add(12);
linkedList.add(234);
linkedList.add(-23);
linkedList.add(79);
linkedList.print();
linkedList.sort()
linkedList.print();