import { Sortable } from './Sortable';

export class Sorter {
    protected collection: Sortable;

    public constructor(collection: Sortable) {
        this.collection = collection;
    }

    public sortCollection(): void {
        const { length } = this.collection;
        for (let i: number = 0; i < length; i++) {
            for (let j: number = 0; j < length - i - 1; j++) {
                const left: number = j;
                const right: number = j + 1;
                // console.log(left, right);
                this.collection.compare(left, right) && this.collection.swap(left, right);
            }
        }
    }
}
