// Linked List
//     A Linked List is a linear data structure where each element points to the next element.
//     Each item = a Node (with two parts: value + next).

//     Why?
//     Easy to insert or delete items (no shifting like arrays).
//     Useful when:
//     * You don't know the final size in advance.
//     * You need dynamic memory usage.
//     * You want fast insertions/deletions.

// Ex
// Create 3 friends (nodes)
let node1 = { value: 10, next: null };
let node2 = { value: 20, next: null };
let node3 = { value: 30, next: null };

// Connect them like a chain
node1.next = node2;
node2.next = node3;

// node1 is the head (start point)

// Let's travel the list
let current = node1;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

// Output:
// 10
// 20
// 30

// Node  | Value | Points to
// node1 | 10    | node2
// node2 | 20    | node3
// node3 | 30    | null

// 🔥 KEY IDEA:
// Each node has data + next pointer.
// Next tells who comes after.

// 🎯 Very Tiny Summary:
// Linked List = chain of nodes connected together.
// Every node knows only who is next.
