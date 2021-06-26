import { Collection } from "./collection.interface";
import { Iterator } from "./iterator.interface";

export abstract class AbstractCollection<E> extends Object implements Collection<E> {
  
  protected constructor() {
    super()
  }
  add(element: E): boolean {
    throw new Error("Method not implemented.");
  }
  addAll(values: Collection<any extends E ? E : any>): boolean {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
  contains(object: Object): boolean {
    throw new Error("Method not implemented.");
  }
  containsAll(c: Collection<any>): boolean {
    throw new Error("Method not implemented.");
  }
  equals(object: Object): boolean {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  remove(object: Object): boolean {
    throw new Error("Method not implemented.");
  }
  removeAll(c: Collection<any>): boolean {
    throw new Error("Method not implemented.");
  }
  retainAll(c: Collection<any>): boolean {
    throw new Error("Method not implemented.");
  }
  abstract size(): number;

  toArray(): E[] {
    throw new Error("Method not implemented.");
  }
  
  abstract iterator(): Iterator<E>;
}
