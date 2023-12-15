/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    // Check if list1 is empty, return list2
    if (!list1) return list2;
    // Check if list2 is empty, return list1
    else if (!list2) return list1;
    // If the value in list1 is less than or equal to the value in list2
    else if (list1.val <= list2.val) {
        // Recursively merge the rest of list1 with list2
        list1.next = mergeTwoLists(list1.next, list2);
        // Return the modified list1
        return list1;
    } else {
        // If the value in list2 is greater than in list1
        // Recursively merge the rest of list2 with list1
        list2.next = mergeTwoLists(list2.next, list1);
        // Return the modified list2
        return list2;
    }
}