
**IMPORTANT: This is only a draft. The module is still in development**
Actual version: 0.5

# Emotive
Dynamic ***"css in js"*** without interpolation or language injection.

```js
let myStyle = Css.sheet(
	Css.Display.BLOCK,
	Css.FontSize.em(10),
	Css.Width.px(80),
	Css.Height.AUTO,
	Css.Margin.px(20,10,10),
	Css.Border.solid(Size.px(1), BLACK),
	Css.Position.ABSOLUTE,
	Css.Top.cm(50),
	Css.Left.calc(Size.x(50), Size.px(-40))
);
```
this code is equivalent to JS object:
```js
let myStyle = {
	display: 'block';
	fontSize: '10em';
	width: '80px';
	height: 'auto';
	margin: '20px 10px 10px';
	border: '1px solid black';
	position: 'absolute';
	top: '50cm';
	left: 'calc(50% + -40px)';
};
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
	- [Constants](#constants)
	- [Units](#units)
		- [Unit shorthands](#unit-shorthands)
	- [Multi-value](#multi-value-list)
	- [Methods](#methods)
		- [Calculations](#calculations-calc)
		- [Colors](#colors-hex)
		- [Exceptions](#exceptions)
	- [Work in progress](#work-in-progress)
		- [Method sub-methods](#method-sub-methods-wip)
		- [Method shorthands](#method-shorthands-wip)
- [Utility](#utility)
	- [Import table](#import-table)

## What does "Emotive" do?
Emotive essentially provides an easy way to write and populate any CSS property without having trouble converting javascript data types into CSS compatbile one. Furthermore it provides a complete list of ready-to-use constants and methods to compose your stylesheets without boring and confusing wrap operations, language injection or value interpolation.

That it means: "No more quotes! No more backticks!".

## Do I need this?
Emotive is meant to take full advantage of javascript inline styling; that's the reason why **React** is the best fit framework in which to use this library.
```jsx
import Css from 'emotive';

const fooFontSize = 12;
const fooColor = '#ffeeee';

let fooStyle = Css.sheet(
	Css.FontSize.px(fooFontSize),
	Css.FontWeight.BOLDER,
	Css.Color.set(fooColor)
);

export const fooComponent = (props) => (
	<span style={fooStyle}>
		Emotive is COOL!
	</span>
);
```
This does not mean you cannot use Emotive in any other Javascript context.

# Usage
Write styles with Emotive is easy. You know CSS, you know Emotive too.
In most cases it's enough to import the generic `Css` object and use the `sheet()` method to compose your styles:
```js
import Css from 'emotive';

let fooStyle = Css.sheet(
	Css.Display.BLOCK,        // display: flex;
	Css.Position.ABSOLUTE,    // position: absolute;
	Css.FontSize.px(14)       // font-size: 14px;
);
```
`sheet()` essentially merges all passed object, each representing an atomic property, and creates a new single one containing all.

## Properties
**Every CSS property** has a corrisponding Javascript object (*UpperCamelCase* notation) inside the global `Css` object.

| CSS property | Emotive JS object |
| --- | --- |
| `display` | `Css.Display` |
| `font-size` | `Css.FontSize` |
| `border-top-width` | `Css.BorderTopWidth` |
| `z-index` | `Css.ZIndex` |

As a general rule, use `<property>.set()` to manually populate the corresponding property value. Remember: it doesn't matter how many parameters you use; Emotive will concat them putting a space in between. Strings and numbers are both accepted and completely interchangeable.

```js
// these sentences are equivalent
Css.Animation.set('myAnim 5s linear 2s 3 alternate')
Css.Animation.set('myAnim 5s linear', '2s 3 alternate')
Css.Animation.set('myAnim', '5s', 'linear', '2s', 3, 'alternate')
```
The result of such a calls are JS style objects containing the single populated property they represents.
```js
{ animation: 'myAnim 5s linear 2s 3 alternate' }
```
In fact, they are completely valid styles and can be used as stand-alone single-property sheets.
```js
export const fooComponent = (props) => (
	<span style={Css.Color.RED}>
		Emotive is COOL!
	</span>
);
```

## Constants
**Every CSS constant** that can set as value for a property is directly available using the corresponding property sub-object (*UPPER_CASE* notation).

```js
// value set manually
Css.Display.set('block')
Css.Display.set('flex')
Css.Display.set('inline-block')

// value set using constant
Css.Display.BLOCK
Css.Display.FLEX
Css.Display.INLINE_BLOCK
```
Also, all constants are always avaiable inside some JS container:

| Emotive object | Constants | CSS Value |
| --- | --- | --- |
| `Keyword` | `SOLID`, `TOP`, `NONE`, ... | `solid`, `top`, `none`, ... |
| `Color` | `RED`, `BLUE`, `AQUA`, ... | `red`, `blue`, `aqua`, ... |
| `Unit` | `PX`, `DEG`, `CM`, ... | `px`, `deg`, `cm`, ... |
| `Property` | `DISPLAY`, `MARGIN_LEFT`, ... | `display`, `margin-left`, ... | 

You may need to use some CSS constant to populate complex properties, such as `border` shorthand property.
```js
import Css, { Color, Keyword, Unit } from 'emotive';

// these sentences are equivalent
Css.Border.set('1px solid black')
Css.Border.set(1+Unit.PX, Keyword.SOLID, Color.BLACK)
```
But there's easier ways to achieve the same result. Just keep reading.

## Units
**Every CSS unit** has a corresponding method with the same name; they are split up in 5 categories, one for every data type.

| Emotive object | Methods |
| --- | --- |
| `Size` | `px()`, `rem()`,`cm()`, ...  |
| `Angle` | `deg()`, `rad()`, `grad()`, ... |
| `Time` | `s()`, `ms()` |
| `Frequency` | `Hz()`, `kHz()` |
| `Resolution` | `dpi()`, `dpcm()`, `dppx()` |

The only exception is the **percentage unit** that is avaiable too, but with the name of `x()`, under the `Size` object.

Values passed to these methods will be concatenated and the unit symbol is appended at the end of each.
```js
import Css, { Size, Time } from 'emotive';

Size.cm(10) // 10cm
Time.s(10) // 10s
Size.x(50) // 50%

Size.px(20, 10, 15) // 20px 10px 15px
Time.ms(200, 400) // 200ms 400ms
Size.x(50, 20) // 50% 20%
```
### Unit shorthands
Using these methods directly could make properties more difficult to write. For this reason, every emotive property object has a set of **specific sub-methods** (depending on the property data-type) that automatically applies the corresponding unit to all the passed arguments:
```js
// these sentences are equivalent
Css.Padding.set(Size.x(50, 20))
Css.Padding.x(50,20)

// other examples
Css.Margin.cm(2,5,2,4) // margin: 2cm 5cm 2cm 4cm;
Css.Top.x(50) // top: 50%
Css.BorderSize.px(1) // border-size: 1px
```

## Multi-value (list)
Some properties accept a ***"list" of values***, commonly separated by commas in CSS. You can specify theme with **arrays**:

```js
Css.FontFamily.set(['"Sans Extrabold"', 'sans-serif'])
// font-family: "Sans Extrabold", sans-serif;

Css.Transition.set(['width 2s ease', 'height 1s linear'])
// transition: width 2s ease, height 1s linear;
```

even with shorthands properties: 

```js
Css.Font.set(Size.em(1.2), Keyword.SOLID, ['"Sans Extrabold"', 'sans-serif'])
// font: 1.2em bolder "Sans Extrabold", sans-serif;
```

If you need to specify a ***list of complex values***, each possibly composed by many argouments, just use **nested arrays**:

```js
// these sentences are equivalent
Css.Transition.set('width 2s ease, height 1s linear')
Css.Transition.set(['width 2s ease', 'height 1s linear'])
Css.Transition.set([
	[Property.WIDTH, Time.s(2), Keyword.EASE],
	[Property.HEIGHT, Time.s(1), Keyword.LINEAR]
])
```

## Methods
**Every CSS method** is available as well (*lowerCamelCase* notation) inside a container called `Method`
They behave similar to the properties, but passed parameters will be rendered with a comma ( **,** ) between them (instead of a space)
```js
Method.rgb(255,0,0) // rgb(255,0,0);
Method.rotateX(Angle.deg(45)) // rotateX(45deg);
```

Again, you can use ***arrays*** to specify complex parameter (composed by many argouments)

```js
Method.linearGradient(Keyword.TO_TOP_LEFT,
	[Color.BLUE, Size.x(50)],
	[Color.WHITE, Size.x(30)]
)
// background: linear-gradient(to top left, blue 50%, white 30%);
```



### Calculations (calc)
As for all the other methods, CSS' `calc()` has its own corresponding in Emotive, but it behave slightly different from the other methods in the library.

By default, passed parameters are summed together:

```js
Method.calc(Size.x(50), Size.px(20)) // calc(50% + 20px)

const customSize = 20;
Method.calc(Size.x(50), Size.px(15), Size.em(customSize)) // calc(50% + 15px + 20em)
```

First-level multiplications with constants can be made Javascript-side:

```js
const customSize = 20;
Method.calc(Size.px(15), Size.em(2*customSize)) // calc(15px + 40em)
```

Subtractions can be written by simply negate the value to subtract:

```js
Method.calc(Size.x(50), Size.px(-20)) // calc(50% + -20px)

const size1 = 20;
Method.calc(Size.x(50), Size.px(-size1)) // calc(50% + -20px)

// WRONG!
const size2 = Size.px(20);
Method.calc(Size.x(50), -size2) // you cannot negate a string!
```

Any more complex formula can be written in two different ways:
- Using additional `add(), sub(), mul()` and `div()` methods:
	```js
	const size = Size.px(20);

	Method.calc(Method.div(size, 2)) // calc(20px / 2)

	Method.calc(Method.div(Method.add(Size.x(50), size), 2)) // calc((50% + 20px) / 2)
	```
- Using **arrays**. This approach is reccomended due to its easy writing.
	Parameters passed inside an array are multiplied together:
	```js
	Method.calc([Size.px(50), 2]) // calc(50px * 2)

	Method.calc(Size.px(50), [Size.px(20), 2]) // calc(50% + (20px * 2))

	Method.calc([Size.px(50), .5], [Size.px(-20), 2]) // calc((50% * .5) + (-20px * 2))
	```
	As usual, parameters passed into **nested arrays** restore default behavior, letting arguments to be summed toghether, and so on:
	```js
	Method.calc([[Size.x(50), Size.px(-20)], 2])) // calc((50px + -20px) * 2)
	
	Method.calc([[Size.x(50), [2.5, Size.px(-20)]], 2])) // calc((50px + (2.5 * -20px)) * 2)
	```

**Dont' forget!** If you don't need to use Javascript variables inside it, it is always possible to use custom strings:
```js
Method.calc('(50px + -20px) * 2')  // calc((50px + -20px) * 2)
```

### Colors (hex)

Other than classic css' `rgb(), rgba(), hsl()` and `hsla()` methods, Emotive also implement two exclusive methods related to **hex color** format.

`hex()` method just append a "sharp" `#` before the passed code, if not present:
```js
// These sencences are equivalent
Method.hex('aabbcc')
Method.hex('#aabbcc')
// #abcdef;

// 3/4/8-digit versions
Method.hex('abc') // #ddd;
Method.hex('abcd') // #ddda;
Method.hex('aabbccdd') // #dadadacc;
```

`hexa()` method behave the same, but accept an additional decimal parameter representing the **alpha** value:

```js
Method.hexa('aabbcc', 0) // #dadada00;
Method.hexa('aabbcc', .5) // #dadada7f;
Method.hexa('aabbcc', 1) // #dadadaff;

const myColor= hex('abcdef');
Method.hexa(myColor, .25) // #abcdef3f;
Method.hexa(Color.AQUA, .75) // #abcdefbf;
```


### Exceptions
***Some CSS methods use a completely custom notation*** to parse their parameters. It's the case of many of the method used to define *shapes* (`inset()`, `circle()`, `ellipse()`, ...)


Let's consider the CSS sample below:
```css
// CSS
clip-path: inset(22% 12% 15px round 5px)
```
CSS use the keyword *round* to understand which of the passed parameters defines the shape (`22% 12% 15px`) and which defines border radius (`5px`). Also, differently to the major part of CSS methods, parameters are not separated by commas.

For these reasons, Emotive version of these methods act similar by concatenating arguments with spaces (instead of commas).

```js
// these sentences are equivalent
Method.inset('22% 12% 15px round 5px')
Method.inset(Size.x(22), Size.x(12), Size.px(15), 'round', Size.px(5))
Method.inset(Size.x(22, 12), Size.px(15), Keyword.ROUND, Size.px(5))
```

## Work in progress

### Method sub-methods (WIP)
Emotive methods could sometimes have some sub-methods to automatically specify one of their passed parameters (*lowerCamelCase* notation).

```js
// these sentences are equivalent
Method.linearGradient('to top left', 'blue', 'red', 'white')
Method.linearGradient.toTopLeft('blue', 'red', 'white')
```

### Method shorthands (WIP)
As for the constants, also methods could sometimes be called directly from the properties objects:
```js
Css.Color.rgb(120,80,10)
Css.BackgroundColor.hexa(Color.RED, .5)
Css.BackgroundColor.linearGradient(Keyword.TO_LEFT, Color.GREEN, Color.BLUE)
Css.ClipPath.inset(Size.x(22, 12), Size.px(15), Keyword.ROUND, Size.px(5))
```

# Utility

## Import table
Below the complete list of all the importable objects and their content.

| Emotive object | Content |
| --- | --- |
| `Css` | Default export. Property objects. `sheet()` method |
| `Method` | Methods |
| `Size` | Length and percentage units methods |
| `Angle` | Angle units methods |
| `Time` | Time units methods |
| `Frequency` | Frequency units methods |
| `Resolution` | Resolution units methods |
| `Keyword` | Keywords constants |
| `Color` | Colors constants |
| `Unit` | Units constants |
| `Property` | Properties name constants |
