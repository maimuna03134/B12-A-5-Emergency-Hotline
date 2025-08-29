1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll are:

  i. getElementById is a method that selects one element by its ID. It returns a single element and is fast and simple.

  ii. getElementsByClassName is a method that selects all elements with a specific class. It returns a live HTMLCollection (updates if DOM changes).

  iii. querySelector is a method that selects the first element that matches any CSS selector (ID, class, tag, etc.).

  iv. querySelectorAll is a method that selects all elements that match any CSS selector. It returns a static NodeList (does not update automatically).

2. How do you **create and insert a new element into the DOM**?
Ans: For creating and inserting a new element into the DOM, we follow these steps:
  i. Create the element => document.createElement()
  ii. Add content or attributes => text, class, id, etc.
  iii. Select the parent element => where you want to insert it.
  iv. Insert the element into the DOM => appendChild(),   insertBefore(), or append()

3. What is **Event Bubbling** and how does it work?
Ans: Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.
* How does it work:
  1. Suppose you have a <button> inside a <div> inside <body>.
  2. When you click the button:
    i. The click event first triggers on the button (the target).
    ii. Then it bubbles up to the <div>, executing any click listeners on the div.
    iii. Finally, it bubbles up to <body>, and so on, until document.
Example: 
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
document.getElementById("parent").addEventListener("click", () => {
  alert("Parent clicked!");
});

document.getElementById("child").addEventListener("click", () => {
  alert("Child clicked!");
});
</script>

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

 * Why is it useful?
 i. Fewer event listeners => better performance, especially for many elements.
 ii. Dynamic elements => works for elements added later without attaching new listeners.
 iii. Simpler code => easier to manage and maintain.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: Difference between preventDefault() and stopPropagation() methods in JavaScript:

  JavaScript preventDefault() Method: 
  i. It is a method present in the event interface. This method prevent the default action of browsers taking on that event.
  ii. It is a method present in the Event interface.
  iii. For example, it prevents the browser from following a link.
  iv. Its syntax is -: event.preventDefault();

On the other hand,
  JavaScript stopPropagation() event method: 
  i. This method is used to prevent further propagation of  current events by parent or child element
  ii. This method is also present in the Event interface.
  iii. It can not stop the default behavior of the browser.
  iv. Its syntax is -: event.stopPropagation();