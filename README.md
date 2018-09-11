
**IMPORTANT: This is only a draft. The module is still in development**
Actual version: 0.3.3


# Emotive
Dynamic ***"css in js"*** without interpolation or language injection.

```js
let myStyle = style(
	Display.BLOCK,
	FontSize(em(10)),
	Width(px(80)),
	Height.AUTO,
	Margin(px(20,10,10)),
	Border.solid(px(1), BLACK),
	Position.ABSOLUTE,
	Top(cm(50)),
	Left(calc(x(50), px(-40)))
);
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

## Install

Install with [Npm](https://www.npmjs.com/package/emotive)

```
npm install --save emotive
```

or [Yarn](https://yarnpkg.com/en/package/emotive)

```
yarn add emotive
```

## Index
- [Emotive](#emotive)
	- [Install](#install)
	- [What does "Emotive" do?](#what-does-emotive-do)
	- [Do I need this?](#do-i-need-this)
- [Usage](#usage)
	- [Properties](#properties)
	- [Units](#units)
	- [List](#list)
	- [Methods](#methods)
		- [Calculations](#calculations-calc)
		- [Colors](#colors-hex)
		- [Exceptions](#exceptions)
	- [Values](#values)
	- [Constants](#constants)
- [Manage Imports](#manage-imports)

## What does "Emotive" do?
Emotive essentially provides an easy way to write and populate any CSS property without having trouble converting javascript data types into CSS compatbile one. Furthermore it provides a complete list of ready-to-use constants and methods to compose your stylesheets without boring and confusing wrap operations, language injection or value interpolation.

That it means: "No more quotes! No more backticks!".

## Do I need this?
Emotive is meant to take full advantage of javascript inline styling; that's the reason why **React** is the best fit framework in which to use this library.
```jsx
import { style, FontSize, FontWeight, px } from 'emotive';

let myStyle = style(
	FontSize(px(24)),
	FontWeight.BOLDER
);

export const myComponent = (props) => (
	<span style={myStyle}>
		Emotive is COOL!
	</span>
);
```
This does not mean you cannot use Emotive in any other Javascript context.

# Usage
Write styles with Emotive is easy. You know CSS, you know Emotive too.

## Properties
**Every CSS property** has a corrisponding Javascript method (*UpperCamelCase* notation).

| CSS property | Emotive method |
| --- | --- |
| display | Display |
| font-size | FontSize |
| border-top-width | BorderTopWidth |
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
| --- | --- |
| px (pixels) | px |
| s (seconds) | s |
| deg (degrees) | deg |

```js
Width(px(10)) // width: 10px
Margin(cm(2), px(1)) // margin: 2cm 1cm
FontSize(em(10)) // font-size: 10em
```

The only exception to this convenction is the *percentage (%)* unit:

| CSS unit | Emotive method | Emotive shorthand method |
| --- | --- | --- |
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
FontFamily(['"Sans Extrabold"', 'sans-serif']) // font-family: "Sans Extrabold", sans-serif;
FontFamily(['sans-serif'] ) // font-family: sans-serif;
FontFamily('sans-serif') // font-family: sans-serif;
```

even with shorthands properties: 

```js
Font(em(1.2), 'bolder', ['"Sans Extrabold"', 'sans-serif'])
// font: 1.2em bolder "Sans Extrabold", sans-serif;
```

If you need to specify a ***list of complex values***, each composed by many argouments, just use **nested arrays**:

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
**Every CSS method** is available as well (*lowerCamelCase* notation).
 
| CSS method | Emotive method |
| --- | --- |
| rgb | rgb |
| rotateX | rotateX |
| linear-gradient | linearGradient |

They behave similar to the properties, but passed parameters will be rendered with a comma ( **,** ) between them (instead of a space)

```js
Color(rgb(255,0,0)) // color: rgb(255,0,0);
Transform(rotateX(deg(45))) //transform: rotateX(45deg);
```

Again, you can use ***arrays*** to specify complex parameter (each possibly composed by many argouments)

```js
Background(linearGradient('to top left', ['blue', '50%'], 'red', ['white', '30%']))
// background: linear-gradient(to top left, blue 50%, red, white 30%);
```

### Calculations (calc)
As for all the other methods, css' `calc()` has its own corresponding in Emotive, but it behave slightly different.

By default, passed parameters are summed together:

```js
Top(calc(x(50), px(20)))
// top: calc(50% + 20px)

const customSize = 20;
Top(calc(x(50), px(15), em(customSize)))
// top: calc(50% + 15px + 20em)
```

Multiplications with adimensional constants can be made Javascript-side:

```js
const customSize = 20;
Top(calc(px(15), em(2*customSize)))
// top: calc(15px + 40em)
```

Subtractions can be written by simply negate the value to subtract:

```js
Top(calc(x(50), px(-20)))
// top: calc(50% + -20px)

const size1 = 20;
Top(calc(x(50), px(-size1)))
// top: calc(50% + -20px)

// WRONG!
const size2 = px(20);
Top(calc(x(50), -size1)) // you cannot negate a string!
```

Any more complex formula can be written in two different ways:
- Using additional `add(), sub(), mul()` and `div()` methods:
	```js
	const customSize = px(20);

	Top(calc(div(customSize, 2)))
	// top: calc(20px / 2)

	Top(calc(div(add(x(50), customSize), 2)))
	// top: calc((50% + 20px) / 2)
	```
- Using **arrays**. This approach is reccomended due to its easy writing.
	Parameters passed inside an array are multiplied together:
	```js
	Top(calc([px(50), 2]))
	// top: calc(50px * 2)

	Top(calc(px(50), [px(20), 2]))
	// top: calc(50% + (20px * 2))

	Top(calc([px(50), .5], [px(-20), 2]))
	// top: calc((50% * .5) + (-20px * 2))
	```
	As usual, parameters passed into **nested arrays** restore default behavior between them, and so on:
	```js
	Top(calc([[x(50), px(-20)], 2]))
	// top: calc((50px + -20px) * 2)
	
	Top(calc([[x(50), [2.5, px(-20)]], 2]))
	// top: calc((50px + (2.5 * -20px)) * 2)
	```

Finally, remember that, if you don't need to use Javascript variables inside it, it is always possible to use custom strings:
```js
Top(calc('(50px + -20px) * 2')
// top: calc((50px + -20px) * 2)
```

### Colors (hex)

Other than classic css' `rgb(), rgba(), hsl()` and `hsla()` methods, Emotive also implement two exclusive methods related to **hex color** format.

`hex()` method just append a "sharp" `#` before the passed code, if not present:
```js
// These sencences are equivalent
BacgroundColor(hex('aabbcc'))
BacgroundColor(hex('#aabbcc'))
// background-color: #abcdef;

// 3/4/8-digit versions
BacgroundColor(hex('abc')) // background-color: #ddd;
BacgroundColor(hex('abcd')) // background-color: #ddda;
BacgroundColor(hex('aabbccdd')) // background-color: #dadadacc;
```

`hexa()` method behave the same, but accept an additional decimal parameter representing the **alpha** value:

```js
BacgroundColor(hexa('aabbcc', 0)) // background-color: #dadada00;
BacgroundColor(hexa('aabbcc', .5)) // background-color: #dadada7f;
BacgroundColor(hexa('aabbcc', 1)) // background-color: #dadadaff;

const CUSTOM_COLOR = hex('abcdef');
BacgroundColor(hexa(CUSTOM_COLOR, .25)) // background-color: #abcdef3f;
BacgroundColor(hexa(AQUAMARINE, .75)) // background-color: #abcdefbf;
```

### Exceptions
***Some CSS methods use a completely custom notation*** to parse their parameters. It's the case of many of the method used to define *shapes* (`inset()`, `circle()`, `ellipse()`, ...)


Let's consider `clip-path` property and `inset()` method. 
```css
clip-path: inset(22% 12% 15px round 5px)
```
CSS use the keyword *round* to understand which of the passed parameters defines the shape (`22% 12% 15px`) and which defines border radius (`5px`). Also, differently to the major part of CSS methods, parameters are not separated by commas.

For these reasons, Emotive version of these methods act similar by concatenating arguments with spaces (instead of commas).

```js
// these sentences are equivalent
ClipPath(inset(x(22), x(12), px(15), 'round', px(5)))
ClipPath(inset(x(22, 12), px(15), ROUND, px(5)))
ClipPath(inset('22% 12% 15px round 5px'))
```

## Values
**Every value** that can be used to specify a property is directly available calling the corresponding property sub-object (*UPPER_CASE* notation).

```js
Display.BLOCK // display: block
Display.FLEX // display: flex
Display.INLINE_BLOCK // display: inline-block
Display.NONE // display: none
// [...]

Width.AUTO // width: auto
BorderStyle.SOLID // border-style: solid
```

#### Property sub-methods
For some complex properties, it is possible to use corresponding sub-methods that automatically specifies one of the property arguments (*lowerCamelCase* notation).

```js
// these sentences are equivalent
Border(px(1), 'solid', 'black')
Border.solid(px(1), 'black')
```

#### Method sub-methods
Also methods could have corresponding sub-methods to automatically specify one of their parameters (*lowerCamelCase* notation).

```js
// these sentences are equivalent
Background(linearGradient('to top left', 'blue', 'red', 'white'))
Background(linearGradient.toTopLeft('blue', 'red', 'white'))
```

## Constants
In general **every CSS constant** is available independently from properties (*UPPER_CASE* notation).

```js
// Setting a value

// ...using property sub-object
Display.FLEX
Position.ABSOLUTE
Border.solid(px(1), 'black')

// ...using constants directly
Display(FLEX)
Position(ABSOLUTE)
Border(px(1), SOLID, BLACK)

// Useful for multi-value properties
Display(INLINE, TABLE) // display: inline table
```

# Manage imports
Styling with Emotive can lead to a significant increment of the number of import statements in your code. In fact, every method or constant must be imported separately in order to obtain the best-appearing syntax.

```js
import {
	style, // main method
	Display, FontSize, Width, Height, Margin, Border, Position, Top, Left, // properties
	calc, // methods
	em, px, cm, x, // measures
	BLACK, SOLID // constants
} from 'emotive';

let myStyle = style(
	Display.BLOCK,
	FontSize(em(10)),
	Width(px(80)),
	Height.AUTO,
	Margin(px(20,10,10)),
	Border(px(1), SOLID, BLACK),
	Position.ABSOLUTE,
	Top(cm(50)),
	Left(calc(x(50), px(-40)))
);
``` 

Importing the entire module with a single statement can be a solution, but the resulting code became difficult to read.

```js
import * as e from 'emotive';

let myStyle = e.style(
	e.Display.BLOCK,
	e.FontSize(e.em(10)),
	e.Width(e.px(80)),
	e.Height.AUTO,
	e.Margin(e.px(20,10,10)),
	e.Border(e.px(1), e.SOLID, e.BLACK),
	e.Position.ABSOLUTE,
	e.Top(e.cm(50)),
	e.Left(e.calc(e.x(50), e.px(-40)))
);
```

For this reason, Emotive provides some container objects, one for each major category of the library.

```js
import { Properties, Methods, Measures, Colors, style } from 'emotive';

let myStyle = style(
	Properties.Display.BLOCK,
	Properties.FontSize(Measures.em(10)),
	Properties.Width(Measures.px(80)),
	Properties.Height.AUTO,
	Properties.Margin(Measures.px(20,10,10)),
	Properties.Border.solid(Measures.px(1), Colors.BLACK),
	Properties.Position.ABSOLUTE,
	Properties.Top(Measures.cm(50)),
	Properties.Left(Methods.calc(Measures.x(50), Measures.px(-40)))
);
```

Below the list of all the container objects.

```js
Properties  // Display, Position, Margin, ...
Methods     // calc(), rgba(), linearGradient(), ...
Measures    // px(), s(), deg(), x(), ...
Colors      // RED, BLUE, AQUAMARINE, ...
Keywords    // SOLID, LEFT, EASE_IN_OUT, ...
Units       // PX, S, DEG, PERCENTAGE, ...
```

Of corse, the best approach depends on your needs.
In most cases the best solution is a combination of different imports rules and renaming.

```js
import {
	style,
	Properties as Property,
	Colors as Color,
	px, em, cm, x,
	calc
} from 'emotive';

let myStyle = style(
	Property.Display.BLOCK,
	Property.FontSize(em(10)),
	Property.Width(px(80)),
	Property.Height.AUTO,
	Property.Margin(px(20,10,10)),
	Property.Border.solid(px(1), Color.BLACK),
	Property.Position.ABSOLUTE,
	Property.Top(cm(50)),
	Property.Left(calc(x(50), px(-40)))
);
```
