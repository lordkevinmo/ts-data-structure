import { Collection } from '../collection/collection.interface';
import { Iterator } from '../collection/iterator.interface';
import { ListNode } from './list-node.interface';

/**
 * We defined here the common operations of a linkedlist
 */
export abstract class BaseListNode<E> implements Collection<E> {
  /**
   * First element in the list.
   * @type { Object }
   * @private
   */
  head: ListNode<E> | null = null;

  /**
   * Last element in the list.
   * @type { Object }
   * @private
   */
  tail: ListNode<E> | null = null;

  /**
   * Length of the list.
   * @type { number }
   */
  _length: number = 0;

  /**
   * Inserts the specified element at the specified position in the list
   * @param element represents the data we will add to the list
   * @param index represents the position where we want to insert the element.
   *              Its value is optional
   */
  abstract add(element: E, index?: number): boolean;

  /**
   * Inserts the specified element at the beginning of the list
   * @param element represents the data we will add to the list
   */
  abstract addFirst(element: E): void;

  /**
   * Inserts the specified element at the end of the list
   * @param element represents the data we will add to the list
   */
  abstract addLast(element: E): void;

  /**
   * Removes all of the elements from this list
   */
  abstract clear(): void;

  /**
   * Returns a shallow copy of this linkedlist
   */
  abstract clone(): ListNode<E>;

  /**
   * Returns true if this list contains the specified element.
   * @param element represents the data we are searching in the list
   */
  abstract contains(element: E): boolean;

  /**
   * Retrieves, but does not remove, the head (first element) of this list.
   */
  abstract element(): E | undefined;

  /**
   * Returns the element if exists at the specified position in this list or undefined.
   * @param index is the position where we want to get the element.
   */
  abstract get(index: number): E | undefined;

  /**
   * Returns the first element in this list.
   */
  abstract getFirst(): E | undefined;

  /**
   * Returns the last element in this list.
   */
  abstract getLast(): E | undefined;

  /**
   * Return sthe index of the first occurence of the specified element in this list,
   * or -1 if this list does not contain the element.
   * @param element represents the data that we are searching index for.
   */
  abstract indexOf(element: E): number;

  /**
   * Return sthe index of the last occurence of the specified element in this list,
   * or -1 if this list does not contain the element.
   * @param element represents the data that we are searching index for.
   */
  abstract lastIndexOf(element: E): number;

  /**
   * Adds the specified element as the tail (last element) of this list.
   * @param element represents the data we are offering.
   */
  abstract offer(element: E): boolean;

  /**
   * Inserts the specified element at the front of this list
   * @param element represents the data we are offering.
   */
  abstract offerFirst(element: E): boolean;

  /**
   * Inserts the specified element ath the end of this list.
   * @param element represents the data we are offering.
   */
  abstract offerLast(element: E): boolean;

  /**
   * Retrieves, but does not remove, the head (first element) of this list or returns
   * undefined if this list is empty.
   */
  abstract peek(): ListNode<E> | undefined;

  /**
   * Retrieves, but does not remove, the first element of this list, or returns
   * undefined if this list is empty.
   */
  abstract peekFirst(): E | undefined;

  /**
   * Retrieves, but does not remove, the last element of this list, or returns
   * undefined if this list is empty.
   */
  abstract peekLast(): E | undefined;

  /**
   * Retrieves and removes the head (first element) of this list.
   */
  abstract poll(): ListNode<E> | undefined;

  /**
   * Retrieves and removes the first element of this list, or returns undefined if this list is empty.
   */
  abstract pollFirst(): E | undefined;

  /**
   * Retrieves and removes the last element of this list, or returns undefined if this list is empty.
   */
  abstract pollLast(): E | undefined;

  /**
   * Pops an element from the stack represented by this list.
   */
  abstract pop(): E;

  /**
   * Pushes an element onto the stack represented by this list.
   * @param element represents the data we are pushing tho the list.
   */
  abstract push(element: E): void;

  /**
   * Removes the element at the specified position in this list. If the position is not specified,
   * we retrieves and removes the head (first element) of this list.
   */
  abstract remove(index?: number): E;

  /**
   * Removes the first occurrence of the specified element from this list, if it is present.
   * @param element represents the data we are removing from the list.
   */
  abstract remove(element: E): boolean;

  /**
   * Removes and returns the first element from this list or returns undefined if the list is empty.
   */
  abstract removeFirst(): E | undefined;

  /**
   * Removes the first occurrence of the specified element in this list (when traversing the list
   * from head to tail).
   * @param element represents the data we are removing from the list.
   */
  abstract removeFirstOccurence(element: E): boolean;

  /**
   * Removes and returns the last element from this list.
   */
  abstract removeLast(): E;

  /**
   * Removes the last occurrence of the specified element in this list (when traversing the list
   * from head to tail).
   * @param element represents the data we are removing from the list.
   */
  abstract removeLastOccurence(element: E): boolean;

  /**
   * Replaces the element at the specified position in this list with the specified element.
   * @param index represents the position in the list where we are replacing the element.
   * @param element represents the data we are setting.
   */
  abstract set(index: number, element: E): E;

  /**
   * Returns the number of elements in this list.
   */
  abstract size(): number;

  /**
   * Returns an array containing all of the elements in this list in proper sequence
   * (from first to last element).
   */
  abstract toArray(): Array<E>;

  addAll(values: Collection<any extends E ? E : any>): boolean {
    throw new Error('Method not implemented.');
  }
  containsAll(c: Collection<any>): boolean {
    throw new Error('Method not implemented.');
  }
  equals(object: Object): boolean {
    throw new Error('Method not implemented.');
  }
  isEmpty(): boolean {
    throw new Error('Method not implemented.');
  }
  removeAll(c: Collection<any>): boolean {
    throw new Error('Method not implemented.');
  }
  retainAll(c: Collection<any>): boolean {
    throw new Error('Method not implemented.');
  }
  iterator(): Iterator<E> {
    throw new Error('Method not implemented.');
  }
}
