**IMPORTANT: This is only a draft. The module is still in development**

Version: 0.3.1


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
	css, // main method
	Display, FontSize, Width, Height, Margin, Border, Position, Top, Left, // properties
	calc, // methods
	em, px, cm, x, // measures
	BLACK, SOLID // constants
} from 'emotive';

let myStyle = css(
	Display.BLOCK,
	FontSize(em(10)),
	Width(px(80)),
	Height.AUTO,
	Margin(px(20,10,10)),
	Border(px(1), SOLID, BLACK),
	Position.ABSOLUTE,
	Top(cm(50)),
	Left(calc(x(50), px(-40))))
``` 

Importing the entire module with a single statement can be a solution, but the resulting code became difficult to read.

```js
import * as e from 'emotive';

let myStyle = css(
	e.Display.BLOCK,
	e.FontSize(e.em(10)),
	e.Width(e.px(80)),
	e.Height.AUTO,
	e.Margin(e.px(20,10,10)),
	e.Border(e.px(1), e.SOLID, e.BLACK),
	e.Position.ABSOLUTE,
	e.Top(e.cm(50)),
	e.Left(e.calc(e.x(50), e.px(-40)))
) 
```

For this reason, Emotive provides some container objects, one for each major category of the library.

```js
import { Properties, Methods, Measures, Colors } from 'emotive';

let myStyle = css(
	Properties.Display.BLOCK,
	Properties.FontSize(Measures.em(10)),
	Properties.Width(Measures.px(80)),
	Properties.Height.AUTO,
	Properties.Margin(Measures.px(20,10,10)),
	Properties.Border.solid(Measures.px(1), Colors.BLACK),
	Properties.Position.ABSOLUTE,
	Properties.Top(Measures.cm(50)),
	Properties.Left(Methods.calc(Measures.x(50), Measures.px(-40)))
)
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
	css,
	Properties as Property,
	Colors as Color,
	px, em, cm, x,
	calc
} from 'emotive';

let myStyle = css(
	Property.Display.BLOCK,
	Property.FontSize(em(10)),
	Property.Width(px(80)),
	Property.Height.AUTO,
	Property.Margin(px(20,10,10)),
	Property.Border.solid(px(1), Color.BLACK),
	Property.Position.ABSOLUTE,
	Property.Top(cm(50)),
	Property.Left(calc(x(50), px(-40)))
)
```

