import { BaseListNode } from "./linked-list-base.abstract";
import { ListNode } from "./list-node.interface";

export default class LinkedList<E> extends BaseListNode<E> {
  add(element: E): boolean;
  
  add(element: E, index?: number): void;
  
  add(element: any, index?: any): boolean | void {
    throw new Error("Method not implemented.");
  }
  addFirst(element: E): void {
    throw new Error("Method not implemented.");
  }
  addLast(element: E): void {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
  clone(): ListNode<E> {
    throw new Error("Method not implemented.");
  }
  contains(element: E): boolean {
    throw new Error("Method not implemented.");
  }
  element(): E | undefined {
    throw new Error("Method not implemented.");
  }
  get(index: number): E | undefined {
    throw new Error("Method not implemented.");
  }
  getFirst(): E | undefined {
    throw new Error("Method not implemented.");
  }
  getLast(): E | undefined {
    throw new Error("Method not implemented.");
  }
  indexOf(element: E): number {
    throw new Error("Method not implemented.");
  }
  lastIndexOf(element: E): number {
    throw new Error("Method not implemented.");
  }
  offer(element: E): boolean {
    throw new Error("Method not implemented.");
  }
  offerFirst(element: E): boolean {
    throw new Error("Method not implemented.");
  }
  offerLast(element: E): boolean {
    throw new Error("Method not implemented.");
  }
  peek(): ListNode<E> | undefined {
    throw new Error("Method not implemented.");
  }
  peekFirst(): E | undefined {
    throw new Error("Method not implemented.");
  }
  peekLast(): E | undefined {
    throw new Error("Method not implemented.");
  }
  poll(): ListNode<E> | undefined {
    throw new Error("Method not implemented.");
  }
  pollFirst(): E | undefined {
    throw new Error("Method not implemented.");
  }
  pollLast(): E | undefined {
    throw new Error("Method not implemented.");
  }
  pop(): E {
    throw new Error("Method not implemented.");
  }
  push(element: E): void {
    throw new Error("Method not implemented.");
  }
  remove(index?: number): E;
  remove(element: E): boolean;
  remove(element?: any): boolean | E {
    throw new Error("Method not implemented.");
  }
  removeFirst(): E | undefined {
    throw new Error("Method not implemented.");
  }
  removeFirstOccurence(element: E): boolean {
    throw new Error("Method not implemented.");
  }
  removeLast(): E {
    throw new Error("Method not implemented.");
  }
  removeLastOccurence(element: E): boolean {
    throw new Error("Method not implemented.");
  }
  set(index: number, element: E): E {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
  toArray(): E[] {
    throw new Error("Method not implemented.");
  }

}