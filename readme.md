
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---


### . Answer:

1. getElementById returns a single element with the given ID, since IDs are unique.

   getElementsByClassName returns a HTMLCollection of all elements with that class name, so you may need to loop through them.

    querySelector accepts any CSS selector and returns the first matching element.

    querySelectorAll also accepts any CSS selector but returns a NodeList of all matching elements.

2. To create a new element in the DOM, we use document.createElement().

    Then we can set its properties, text, or attributes.

    Finally, we insert it into the DOM using methods like appendChild(), append() etc.


3. Event bubbling is the process where an event starts from the target element and then propagates upward through its ancestors in the DOM hierarchy.

    For example, if you click on a button inside a div, the click event first triggers on the button, then on the parent div, then on the body and so on, unless stopped using event.stopPropagation().

    This mechanism allows us to use event delegation, where instead of adding listeners to many child elements, we can add a single listener on a parent and handle events for its children.


4. Event Delegation is a technique where instead of attaching event listeners to multiple child elements, we attach a single event listener to their parent element.
  Since events bubble up through the DOM, the parent can listen for events on its children and handle them accordingly.



5. preventDefault() is used to prevent the default browser behavior of an element.
  For example, prevent a form from submitting or prevent a link from navigating.

    stopPropagation() is used to stop the event from bubbling (or capturing) up or down the DOM tree.
     prevents the event from being passed to parent (or ancestor) elements.