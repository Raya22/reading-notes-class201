> ## list
in html we have two types of lists :

1 - orderd list `ol` : numbered list

2 - unorderd list `ul` : without numbers


```html
<ol>
<li>Chop potatoes into quarters</li>
<li>Simmer in salted water for 15-20
 minutes until tender</li>
<li>Heat milk, butter and nutmeg</li>
<li>Drain potatoes and mash</li>
<li>Mix in the milk mixture</li>
</ol>
```

![](https://i.ytimg.com/vi/5tJBpZjMAbw/maxresdefault.jpg);


**Definition Lists**
s created with
the `<dl>` element and usually
consists of a series of terms and
their definitions.
Inside the `<dl>` element you will
usually see pairs of `<dt>` and
`<dd>` elements.

![](https://i.ytimg.com/vi/ZPJ4H1H8okc/maxresdefault.jpg);


![](https://www.w3docs.com/uploads/media/default/0001/01/61895012b984c01394157fb224f371e8463d59bc.png);


**Nested Lists**

when you put a second list inside
an `<li>` element to create a sublist or nested list.

![](https://image.slidesharecdn.com/nestedlists-160529154000/95/nested-lists-in-html-6-638.jpg?cb=1464536505);



> ##  Boxes

In CSS, the term "box model" is used when talking about design and layout.
![](https://media.geeksforgeeks.org/wp-content/uploads/box-model-1.png);

Explanation of the different parts:

Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent
The box model allows us to add a border around elements, and to define space between elements. 

![](https://hackernoon.com/hn-images/1*bidjx0hpsMVZZMGpc2DgFQ.png);



**Overflowing Content**
controls what happens to content that is too big to fit into an area.
* visible
   * it is not clipped and it renders outside the element's box
```css
   div {
  width: 200px;
  height: 50px;
  background-color: #eee;
  overflow: visible;
}
```
* hidden 
   * the overflow is clipped, and the rest of the content is hidden
```css
   div {
  overflow: hidden;
}
```
* scroll 
   * the overflow is clipped and a scrollbar is added to scroll inside the box. Note that this will add a scrollbar both horizontally and vertically
```css
   div {
  overflow: scroll;
}
```

* auto 
   * it adds scrollbars only when necessary


## ARRAYS

special type of variable it stores a list of values.
```js
var colors; 
colors ['white', 'black', ' custom']; 
var el document.getElementByld('col ors'); 
el . textContent = col ors[O]; 
```
Values in an array are accessed as if they are in 
a numbered list.

we can access and change the values
```js
// Create the array 
var colors = ['white', 
'black' , 
'custom']; 
c02/ js/ update-array.js 
II Update the third item in the array 
colors[2] = 'beige ' ; 
II Get the element with an id of col ors 
var el = document .getElementByid(' colors') ; 
II Replace with third item from the array 
el .textContent = colors[2]; 
```

### USING IF ELSE STATEMENTS

Conditional statements are used to perform different actions based on different conditions.


```js
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

### SWITCH STATEMENTS

to select one of many code blocks to be executed.

```js
var x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
```

### loops
if you want to run the same code over and over again when a condition is true, each time with a different value untill the condition is false.

   there are three common types of loops :
   * For
      * when we need to run the code specific number of times

```js
        for (var i =0 ; i< 5 ; i++)
      {
          document.write (i)

      }
```

it will print (i) five times.

![](https://i.stack.imgur.com/sScWG.png)


* while loop 
    * when we don't know how many times we will repeat the loop , we use **while** and it will break out when the condition is false
```js
   while (expression)

   {

       statement1;
       statement2;

   }
```

* do while 
the difference between **do while** and **while** loop is do while loop will execute at least one time even if the condition is false

![](https://www.bookofnetwork.com/images/javascript-images/JS_Slide-73_09Mar17_1433.png)



for loop example :

```js
for (var i =0 ; i< 5 ; i++)
{
    document.write(i);
}



the output will be
0
1
2
3
4
```


while loop example :

```js
var j = 0
while (j < 5)
{
    document.write(j);
    j++;
}




the output will be 
0
1
2
3
4
```


do while example :
```js
var k = 0
do (document.write(k))
{
    while (k < 5)
    k++;
}




the output will be 
0
1
2
3
4
5
```


