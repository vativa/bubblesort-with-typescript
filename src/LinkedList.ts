import { BaseCollection } from './BaseCollection';
import { Sortable } from './Sortable';
import { Linkable } from './Linkable';
import { Sorter } from './Sorter';
import { Node } from './Node';

export class LinkedList extends BaseCollection implements Sortable, Linkable {
    protected _head: Node;// strong reference
    protected _length: number;

    public constructor(data: number[]) {
        super();
        const first: number | undefined = data[0];
        if (first === undefined) {
            throw new Error("Empty array given to LinkedList");
        }
        this._head = new Node(first);
        data.forEach((num: number, idx: number) => idx && this.attachNode(num));
        this._length = data.length;
    }

    public get length(): number {
        return this._length;
    }

    public attachNode(number: number): void {
        let tail = this._head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = new Node(number);
    }

    public getNodeAt(index: number): Node {
        let node = this._head;
        for (let c = 0; node.next; c++) {
            if (c === index) {
                break;
            }
            node = node.next;
        }
        // console.log('>>> LinkedList::getNodeAt', index, node.data);
        return node;
    }

    public compare(left: number, right: number): boolean {
        // console.log('>>> LinkedList::compare', left, right);
        const leftHand = this.getNodeAt(left).data;
        const rightHand = this.getNodeAt(right).data;
        return leftHand > rightHand;
    }

    public swap(left: number, right: number): void {
        const ln: Node = this.getNodeAt(left);
        const rn: Node = this.getNodeAt(right);
        const lnData: number = ln.data;
        ln.data = rn.data;
        rn.data = lnData;
    }

    public sort(): Sortable {
        const sorter = new Sorter(this);
        sorter.sortCollection();
        return this;
    }

    public toString(): string {
        let node: Node = this._head;
        let values: number[] = [node.data];
        while (node.next) {
            node = node.next;
            values.push(node.data);
        }
        return values.join(', ');
    }
}
