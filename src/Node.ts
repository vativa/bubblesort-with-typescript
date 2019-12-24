export class Node {
    protected _data: number;
    protected _next: Node | null = null;

    constructor(data: number) {
        this._data = data;
    }

    public get data(): number {
        return this._data;
    }

    public set data(data: number) {
        this._data = data;
    }

    public set next(node: Node | null) {
        this._next = node;
    }

    public get next(): Node | null {
        return this._next;
    }
}
