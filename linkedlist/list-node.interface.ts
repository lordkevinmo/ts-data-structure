/**
 * We define the generic type of linkedlist.
 * By definition, basically, a linkedlist is a list with a head that contains an element and a pointer to the next element
 */
export interface ListNode<E> {
  item: E;
  prev: ListNode<E> | null;
  next: ListNode<E> | null;
}
