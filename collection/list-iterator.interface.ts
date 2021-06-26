import { Iterator } from "./iterator.interface";

/**
 * An iterator for lists that allows the programmer to traverse the list in either direction, modify the list during iteration,
 * and obtain the iterator's current position in the list. A ListIterator has no current element; its cursor position always 
 * lies between the element that would be returned by a call to previous() and the element that would be returned by a call to next().
 */
export interface ListIterator<E> extends Iterator<E> {
  /**
   * Inserts the specified element into the list (optional operation).
   * @param element to add to the list.
   */
  add(element: E): void;

  /**
   * Returns true if this list iterator has more elements when traversing the list in the reverse direction.
   */
  hasPrevious(): boolean;

  /**
   * Returns the index of the element that would be returned by a subsequent call to next().
   */
  nextIndex(): number;

  /**
   * Returns the previous element in the list and moves the cursor position backwards.
   */
  previous(): E;

  /**
   * Returns the index of the element that would be returned by a subsequent call to previous().
   */
  previousIndex(): number;

  /**
   * Replaces the last element returned by next() or previous() with the specified element (optional operation).
   * @param element that will be setted in th elist.
   */
  set(element: E): void;
}