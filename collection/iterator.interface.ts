export interface Iterator<E> {
  /**
   * Returns true if the iteration has more elements.
   */
  hasNext(): boolean;

  /**
   * Returns the next element in the iteration
   */
  next(): E;

  /**
   * Removes from th eunderlying collection the last element returned by this iterator
   */
  remove(): void;
}