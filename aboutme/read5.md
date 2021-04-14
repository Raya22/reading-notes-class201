## Images

There are many reasons to add an image to a web page it
can improve the design and the appearance of a web page and it can help to understand what are you talk about on your bage

but you cant just add the image to your web page , you have to link it in your html file first
you can use `<img>` tag to embed an image in a web page.

The `<img>` tag has two required attributes:
* src : Specifies the path to the image.
* alt : Specifies an alternate text for the image.

```html
<img src="img_chania.jpg" alt="Flowers in Chania">

```

```html
<img src="url" alt="alternatetext">
```

A picture can say a thousand words, and great
images help make the difference between an
average-looking site and a really engaging one

**Storing Images on Your Site**
If you are building a site from scratch, it is good
practice to create a folder for all of the images
the site uses.

you can control the width and height of your image

```html
<style>
img {
  width: 100%;
}
```


Where an image is placed
in the code will affect how it
is displayed.

* before a paragraph
* inside the start of a
paragraph
*  in the middle of a
paragraph

![](https://helveticamediuma.com/wp-content/uploads/2019/05/website.png)



```css
img {
    vertical-align: middle;

}
```


**Image Dimensions**

The images you use on your website should be
saved at the same width and height that you
want them to appear on the page.

cropping images important not to
lose valuable information, It is best to source
images that are the correct shape if possible.

Photographs are best saved as JPEGs; illustrations or
logos that use flat colors are better saved as GIFs.


![](https://i.stack.imgur.com/4LMiK.png)


### colors
in css you can use the Colors to bring your pages to life.
it will be more attractive
color can be specified by using a predefined color name
```css
p
{
    background-color:DodgerBlue;
    color:Tomato;
    
}
```

colors can also be specified using RGB values, HEX values, HSL values, RGBA values

```css
p
{
   color: rgba(255, 99, 71, 0.5);
   backgroung-color:#ff6347;
}
div
{
    background-color : hsl(9, 100%, 64%);
}
```
you can git Hex values from google search

![](https://i.pinimg.com/736x/6e/9d/ca/6e9dcada75a3f3413baa573e97ea4c25.jpg)




## Text

HTML contains several elements for defining text with a special meaning 

**Formatting elements were designed to display special types of text:**

* `<b>` - Bold text
* `<strong>` - Important text
* `<i>` - Italic text
* `<em>` - Emphasized text
* `<mark>` - Marked text
* `<small>` - Smaller text
* `<del>` - Deleted text
* `<ins>` - Inserted text
* `<sub>` - Subscript text
* `<sup>` - Superscript text

and with the **css** we can do:
* directly affect the font and its appearance
(including the typeface, whether it is regular, bold or italic,
and the size of the text)
* effects on text no matter
what font you were using (including the color of text and
the spacing between words and letters)

![](https://cdn.mos.cms.futurecdn.net/1839807f86c3d84478a7f0eb0abe86f4.jpg)

![](https://www.computerhope.com/jargon/m/monospace.gif)


the size of font can change with css , using pixles , Percentages , Ems
```css
body {
font-family: Arial, Verdana, sans-serif;
font-size: 12px;}
h1 {
font-size: 200%;}
h2 {
font-size: 1.3em;}
```

and the font-family too
```html
<style type="text/css">
 body {
 font-family: Georgia, Times, serif;}
 h1, h2 {
 font-family: Arial, Verdana, sans-serif;}
 .credits {
 font-family: "Courier New", Courier,
 monospace;}
 </style>
 ```
font size and the style can change 

```css
.credits {
font-weight: bold;
font-style: italic;}
```


**UpperCase & LowerCase**

we can control the upper case to our text to make all the words with capital or the lower case to make it with small letters , or we have another choice to capitalize so just the first letter will be capital

![](https://mobile.htmlgoodies.com/imagesvr_ce/2759/CSS%20uppercase%20and%20CSS%20lowercase_fig1.gif)


**Text decoration**

![](https://s3.amazonaws.com/webucator-how-tos/2288.png)



**line-height**

![](https://uploads-ssl.webflow.com/601c29da18d61c02899ae601/6048d1e6db6cbf7d3fe6d128_Artboard.jpeg)


```css
p {
line-height: 1.4em;}
```

letter-spacing, word-spacing

```css
h1, h2 {
text-transform: uppercase;
letter-spacing: 0.2em;}
.credits {
font-weight: bold;
word-spacing: 1em;}
```
![](https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2014/12/letter-spacing-example.png)


**vertical-align**

sets the vertical alignment of an element

```css
#six-months {
vertical-align: text-top;}
#one-year {
vertical-align: baseline;}
#two-years {
vertical-align: text-bottom;}
```

**text-shadow**

adds shadow to text.


```css
h1 {
  text-shadow: 2px 2px #ff0000;
}
```

![](https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2014/12/text-shadow-syntax-img1.png)

![](https://i.stack.imgur.com/R3rg7.png)


### Responding to Users
:hover, :active, :focus

```css
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}
```

```css
.ignored {
  -moz-user-focus: ignore;
}
```
![](https://i.stack.imgur.com/tSAXe.png)



