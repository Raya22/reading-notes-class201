## JavaScript Object Literal

a comma-separated list of name-value pairs wrapped in curly braces. values can be of any data type, including array literals, functions, and nested object literals,and You define (and create) a JavaScript object with an object literal:

```js
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

### Accessing Object Properties

* `objectName.propertyName`
* `objectName["propertyName"]`

```js
person.lastName;
```

```js
person["lastName"];
```

### Document Object Model

The DOM is a W3C (World Wide Web Consortium) standard for accessing documents.

With the object model, JavaScript gets all the power it needs to create dynamic HTML:
* can change all the HTML elements
* can change all the HTML attributes
* can change all the CSS styles
* can remove existing HTML elements and attributes
* can add new HTML elements and attributes
* can react to all existing HTML events
* can create new HTML events

![](https://www.w3schools.com/js/pic_htmltree.gif)


Accessing and updating the DOM tree involves two steps: 

1-  Locate the node that represents the element you want to work with.

2-  Use its text content, child elements, and attributes.



**ACCESSING ELEMENTS**

DOM queries may return one element, or they may return a Nodelist, 
which is a collection of nodes

`getElementByld(id)` 

`querySel ector( "css selector")` 


`getElementsByClassName( "class")`

`getEl ementsByTagName( "tagName")`

`querySelectorAll ("css selector")`


```html
<hl id="header">List King<lhl> 
<h2>Buy groceries<lh2> 
<ul> 
<li id="one" class="hot"><em>fresh<lem> 
figs<lli> 
<li id="two" class="hot">pine nuts<lli> 
<li id="three" class="hot">honey<lli> 
<li id="four">balsamic vi negar<ll i> 
</ul>
```

```js
II Select the element and store it in a variable. 
var el = document.getElementByid('one'); 
II Change the value of the class attribute. 
el.className ='cool ' ; 
```


**Selecting elements using class attributes**

```js
var elements = document .getEl ementsByClassName('hot');
if (elements.l ength> 2) { 
var el = elements[2]; 
el.className = 'cool';
} 
```
or by **Tag name**

```js
var elements = document.getElementsByTagName('li ');
if (elements.length> O) { 
l;IJiliii 
var el = elements[O]; 
el.className = 'cool';
```

or **css selectors**
```js
var el = document .querySel ector('li .hot ' }; 
el .cl assName = ' cool' ; 
var els = document .querySelectorAll('li .hot') ; 
els[l] .className = ' cool' ; 
```


### Repeating actions for an entire nodelist

we can loop through each node in the collectionand apply the same statements to each

```js
var hotlt ems = document .querySelectorAll ('li.hot') ;
if (hot ltems.length > O)
 { 
for (var i=O; i<hotl tems.length; i++) {
hotltems[i] .className = 'cool';
}}
```

From an element node, you can access and update its 
content using properties such as text Content and 
inner HTML or using DOM manipulation techniques. 

An element node can contain multiple text nodes and 
child elements that are siblings of each other.

![](https://www.w3schools.com/XML/navigate.gif)

Browsers offer tools for viewing the DOM tree 

![](https://developer.mozilla.org/en-US/docs/Tools/DOM_Property_Viewer/dom_inspector_search_box.png)


