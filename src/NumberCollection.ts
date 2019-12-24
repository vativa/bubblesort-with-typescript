import { BaseCollection } from './BaseCollection';
import { Sortable } from './Sortable';
import { Sorter } from './Sorter';

export class NumberCollection extends BaseCollection implements Sortable {
    protected _data: number[];

    public constructor(data: number[]) {
        super();
        this._data = [...data];
    }

    public get length(): number {
        return this._data.length;
    }

    public compare(left: number, right: number): boolean {
        return this._data[left] > this._data[right];
    }

    public swap(left: number, right: number): void {
        [this._data[left], this._data[right]] = [this._data[right], this._data[left]];
    }

    public sort(): Sortable {
        const sorter = new Sorter(this);
        sorter.sortCollection();
        return this;
    }

    public toString(): string {
        return this._data.join(', ');
    }
}
