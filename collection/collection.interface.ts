import { Iterable } from "./iterable.interface";

/**
 * The root interface in the collection hierarchy. A collection represents a group of objects, known as its elements. 
 * Some collections allow duplicate elements and others do not. Some are ordered and others unordered.
 */
export interface Collection<E> extends Iterable<E> {
  /**
   * Ensures that this collection contains the specified element (optional operation).
   * @param element that will be added to the collection
   */
  add(element: E): boolean;

  /**
   * ents in the specified collection to this collection (optional operation).
   * @param values represents a collection of element
   */
  addAll(values: Collection<any extends E ? E : any>): boolean;

  /**
   * Removes all of the elements from this collection (optional operation).
   */
  clear(): void;

  /**
   * Returns true if this collection contains the specified element.
   * @param object we are searching.
   */
  contains(object: Object): boolean;

  /**
   * Returns true if this collection contains all of the elements in the specified collection.
   * @param c collection to be checked for containment in this collection
   */
  containsAll(c: Collection<any>): boolean;

  /**
   * Compares the specified object with this collection for equality.
   * @param object to be compared for equality with this collection
   */
  equals(object: Object): boolean;

  /**
   * Returns true if this collection contains no elements.
   */
  isEmpty(): boolean;

  /**
   * Removes a single instance of the specified element from this collection, if it is present 
   * (optional operation). More formally, removes an element e such that 
   * (o==null ? e==null : o.equals(e)), if this collection contains one or more such elements.
   *  Returns true if this collection contained the specified element (or equivalently,
   *  if this collection changed as a result of the call).
   * @param object  element to be removed from this collection, if present
   */
  remove(object: Object): boolean;

  /**
   * Removes all of this collection's elements that are also contained in the specified collection 
   * (optional operation). After this call returns, this collection will contain no elements in 
   * common with the specified collection.
   * 
   * Returns true if this collection changed as a result of the call.
   * 
   * @param c collection containing elements to be removed from this collection
   */
  removeAll(c: Collection<any>): boolean;

  /**
   * Retains only the elements in this collection that are contained in the specified collection 
   * (optional operation). In other words, removes from this collection all of its elements that
   *  are not contained in the specified collection.
   * Returns true if this collection changed as a result of the call
   * @param c collection containing elements to be retained in this collection
   */
  retainAll(c: Collection<any>): boolean;

  /**
   * Returns the number of elements in this collection. 
   */
  size(): number;

  /**
   * Returns an array containing all of the elements in this collection.
   */
  toArray(): Array<E>;
}
