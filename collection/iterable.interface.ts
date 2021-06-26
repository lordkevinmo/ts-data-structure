import { Iterator } from "./iterator.interface";

/**
 * Implementing this interface allows an object to be the target of the "foreach" statement.
 */
export interface Iterable<T> {
  /**
   * Returns an iterator over a set of elements of type T. 
   */
  iterator(): Iterator<T>;
}