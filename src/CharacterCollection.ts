import { BaseCollection } from './BaseCollection';
import { Sortable } from './Sortable';
import { Sorter } from './Sorter';

export class CharacterCollection extends BaseCollection implements Sortable {
    protected _data: string;

    public constructor(data: string) {
        super();
        this._data = data;
    }

    public get length(): number {
        return this._data.length;
    }

    public compare(left: number, right: number): boolean {
        return this._data.toLowerCase().charCodeAt(left) > this._data.toLowerCase().charCodeAt(right);
    }

    public swap(left: number, right: number): void {
        const chars = this._data.split('');
        [chars[left], chars[right]] = [chars[right], chars[left]];
        this._data = chars.join('');
    }

    public sort(): Sortable {
        const sorter = new Sorter(this);
        sorter.sortCollection();
        return this;
    }

    public toString(): string {
        return this._data;
    }
}
