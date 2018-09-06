**IMPORTANT: This is only a draft. The module is still in development**

Version: 0.3.0

# Emotive
Dynamic ***"css in js"*** without interpolation or language injection.
```js
let myStyle = css(
	Display.BLOCK,
	FontSize(em(10)),
	Width(px(80)),
	Height.AUTO,
	Margin(px(20,10,10)),
	Border.solid(px(1), BLACK),
	Position.ABSOLUTE,
	Top(cm(50),
	Left(calc(X(50), px(-40)))
)
```
this code is equivalent to:
```css
/* CSS */
	display: block;
	font-size: 10em;
	width: 80px;
	height: auto;
	margin: 20px 10px 10px;
	border: 1px solid black;
	position: absolute;
	top: 50cm;
	left: calc(50% + -40px);
```
Install with [Npm](https://www.npmjs.com/)
```
npm install --save emotive
```
or [Yarn](https://yarnpkg.com/lang/en/)
```
yarn add emotive
```

## What does "Emotive" do?
Emotive essentially provides an easy way to write and populate any CSS property without having trouble converting javascript data types into CSS compatbile one. Furthermore it provides a complete list of ready-to-use constants and methods to compose your stylesheets without boring and confusing wrap operations, language injection or value interpolation.
That it means: "No more quotes! No more backticks!".


# Usage
Using Emotive is easy. You know CSS, you know Emotive too. Just follow the steps listed below.

## Properties
**Every CSS property** has a corrisponding Javascript method (*UpperCamelCase*  notation).
| CSS property | Emotive method
| -- | -- |
| display | Display
| font-size | FontSize
| border-top-width | BorderTopWidth
| z-index | ZIndex |
You can use these methods to set the corresponding property value. Remember, it doesn't matter how many parameters you use; Emotive will concat them putting a space in between. Strings and numbers are both accepted and completely interchangeable.
```js
// these sentences are equivalent
Animation('myAnim 5s linear 2s 3 alternate')
Animation('myAnim', '5s', 'linear', '2s', 3, 'alternate')
```

## Units
**Every CSS unit** has a corresponding method with its name:
| CSS unit | Emotive method |
| -- | -- |
| px (pixels) | px |
| s (seconds) | s |
| deg (degrees) | deg |
```js
Width(px(10)) // width: 10px
Margin(cm(2), px(1)) // margin: 2cm 1cm
FontSize(em(10)) // font-size: 10em
```
The only exception to this convenction is the *percentage (%)* unit:
| CSS unit | Emotive method | Emotive shorthand method
| -- | -- | -- |
| % (percentage) | percent | x |
```js
Top('50%')
Top(percent(50))
Top(x(50))
// top: 50%
```
Finally, you can also put many values within the same unit method, obtaining a list of values with the same unit appended to them:
```js
Padding(px(20), px(10), px(15))
Padding(px(20, 10, 15))
// padding: 20px 10px 15px
```

## List
Some properties accept a ***"list" of values***, commonly separated by commas in CSS. You can specify theme with **arrays**:
```js
FontFamily(['Sans Extrabold', 'sans-serif']) // font-family: Sans Extrabold, sans-serif;
FontFamily(['sans-serif'] ) // font-family: sans-serif;
FontFamily('sans-serif') // font-family: sans-serif;
```
even with shorthands properties:
```js
Font(em(1.2), 'bolder', ['Sans Extrabold', 'sans-serif'])
// font: 1.2em bolder 'Gill Sans Extrabold', 'sans-serif';
```
if you need to specify a ***list of complex values***, each composed by many argouments, just use **nested arrays**:
```js
// these sentences are equivalent
Transition('width 2s ease, height 1s linear')
Transition(['width 2s ease', 'height 1s linear'])
Transition([
	['width', s(2), 'ease'],
	['height', s(1), 'linear']
])
// transition: width 2s ease, height 1s linear;
```

## Methods
 **Every CSS method** is avaiable as well (*lowerCamelCase* notation).
| CSS method | Emotive method
| -- | -- |
| rgb | rgb |
| rotateX | rotateX |
| linear-gradient | linearGradient |
They behave similar to the properties, but passed parameters will be rendered with a comma ( **,** ) between them (instead of a space)
```js
color(rgb(255,0,0)) // color: rgb(255,0,0);
transform(rotateX(deg(45))) //transform: rotateX(45deg);
```
Again, you can use ***arrays*** to specify complex parameter (each possibly composed by many argouments)
```js
background(linearGradient('to top left', ['blue', '50%'], 'red', ['white', '30%']))
// background: linear-gradient(to top left, blue 50%, red, white 30%);
```

[...]
