import { Node } from './Node';

export interface Linkable {
    attachNode(number: number): void;
    getNodeAt(index: number): Node;
}
