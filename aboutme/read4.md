> ## links
Links are the defining feature of the web
because they allow you to move from
one web page to another
Links are found in nearly all web pages.
The HTML `<a>` tag defines a hyperlink.

```html
<a href="https://www.google.com/">visit google.com</a>
```


Directory Structure

placing the
pages for each different section of the site into a new folder. Folders on a
website are sometimes referred to as directories.

* Structure
* Relationships
* Homepages

![](https://docs.jboss.org/jbossas/guides/installguide/r1/en/html/images/jboss_directory_structure.jpg)


**Relative URLs**

linking to pages within your own
website. They provide a shorthand way of telling the browser where to
find your files.

![](https://image.slidesharecdn.com/filestructure-150217095111-conversion-gate01/95/file-structure-3-638.jpg?cb=1424188441)



**Email Links**

To create a link that starts up
the user's email program and
addresses an email to a specified
email address, 


```html
<!DOCTYPE html>
<html>
<body>

<p>To create a link that opens in the user's email program (to let them send a new email), use mailto: inside the href attribute:</p>

<p><a href="mailto:someone@example.com">Send email</a></p>

</body>
</html>
```

![](https://i0.wp.com/digitalfortress.tech/wp-content/uploads/2018/05/mail-to.png?resize=672%2C377&ssl=1)


## Layout

in css you can control your html code and the structure of the elements and places

**Building Blocks**
  
  CSS treats each HTML element as if it is in its
own box. 

![](https://miro.medium.com/max/733/1*pBPPK_ZIS2KTRCvGVs2Q1g.png)


![](https://1.bp.blogspot.com/-byyR6UhzRlw/XqPR9QUH12I/AAAAAAAACf8/_h6ITaQ45h0dazPFuifNqe7OSMFNbZopgCLcBGAsYHQ/s1600/HTML%2Blayout.png)


**Normal Flow**

any boxes in normal flow will be part of a formatting context. They can be either block or inline, but not both at once

```html
<body>
<h1>The Evolution of the Bicycle</h1>
<p>In 1817 Baron von Drais invented a walking
 machine that would help him get around the
 royal gardens faster...</p>
</body>
```

```css
body {
width: 750px;
font-family: Arial, Verdana, sans-serif;
color: #665544;}
h1 {
background-color: #efefef;
padding: 10px;}
p {
width: 450px;}

```


**Relative Positioning**

```html
<body>
<h1>The Evolution of the Bicycle</h1>
<p>In 1817 Baron von Drais invented a walking
 machine that would help him get around the
 royal gardens faster...</p>
</body>

```

```css
p.example {
position: relative;
top: 10px;
left: 100px;
}
```

**Floating Element**

allows you
to take an element in normal
flow and place it as far to the
left or right of the containing
element as possible.

The float property moves content to the left or right
of the page and can be used to create multi-column
layouts. (Floated items require a defined width.)
![](https://css-tricks.com/wp-content/uploads/2021/02/web-text-wrap.png)

![](https://www.pagedmedia.org/wp-content/uploads/2018/04/article-figure-08-2.png)


**grid**
![](https://visme.co/blog/wp-content/uploads/2018/03/How-Grids-Can-Help-You-Create-Professional-Looking-Designs-Column-Grid-magazine-02.png)

### functions in JavaScript

a block of code designed to perform a particular task
executed when "something" invokes it (calls it).

```js
var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
```

**methods** are actions that can be performed on objects
method is a property containing a function definition.


![](https://i.ytimg.com/vi/mxlcjTB_i98/maxresdefault.jpg)

![](https://flaviocopes.com/javascript-functions/methods-this.png)



### objects

Objects are variables, But objects can contain many values

```js
var car = {type:"Fiat", model:"500", color:"white"};
```

```js
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```
Accessing Object Properties
You can access object properties in two ways:
*  objectName.propertyName
*  objectName["propertyName"]



```js
person.lastName;
```

```js
person["lastName"];
```
