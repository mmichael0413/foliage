# Foliage
This repository holds the styles used for each service within ThirdChannel. It attempts to provide a common location for all CSS styles and builds, providing (ideally) a single style sheet per app. 

In addition, Foliage provides a mechanism to build our app css, serve it locally in a dev environment, AND act as a central method to control our CSS structure and design philosophy.


### CSS Structure / Design Philosophy

As anyone who has ever worked with CSS before can tell you, it's difficult to keep straight - particularly with a team of any size. Before you know it, your style sheets will be a maze of dis-organized nested classes, with little common naming strategy and potential conflicts. Many of them may even be unused in the current site.

Tools like [Sass][sass] and [Less](http://lesscss.org/) exist to help with this organization (and to provide helpful features like variables, functions, etc). However, they may help with file organization and convenience, but do not provide a philosophy or guide on how to approach the design or class organization. Such an approach can be called a _Design System_. 

We've been attempting to redesign exactly how we work with CSS at ThirdChannel, and have been looking at two popular Design Systems, [SMACCS][smaccs] and [Atomic Design][atomic-design].

#### SMACCS
[SMACCS][smaccs] is a system / style guide which suggests both how to structure your css files and to think about your design. It calls for you - as the designer / css engineer - to conceptualize your css and structure it in terms of 5 categories:

__Base__: Base styles are those that are applied globally for each base tag / element in the page. No classes or id selectors should be placed here. In addition, any normalization styles (e.g. Normalize.css) should be loaded or located here.
Example:

```
a {
	color: #cccccc;
}

p {
	padding: 1em;
}

h1,h2,h3,h4 {
	color: #bada55
}
```

__Layout__: Any __major__ structural layout concerns. General placement of items (later referred to as _organisms_ or _molecules_) within a page should be done here. There's a subtle different between high-level placement, versus low-level padding, margin, or internal structure between our smaller components. 
In other words, these styles should be very high-level and may be relatively small compared to the other sections.

__Modules__: Discrete components within a page. Navigation items, form widgets, footers, etc.,  all count as modules. If using [Sass][sass], Each module should be contained within its' own .scss file.

__State__: Any rules which augment or override existing rules. Some examples could include classes which mark a section as 'collapsed', 'active', 'clicked', etc. SMACCS makes a distinction between _global_ and _module-specific_ rules; specifically, global state rules should be in their own structural section, whereas states that apply to a module should be located within or alongside the module (e.g. within the module file).

__Theme__: A theme defines colors, fonts, images, etc. which all give a site its look and feel. SMACCS considers this particular section purely optional, but can have certain advantages if adopted.
Essentially, when using themes, one should break out all theme-able attributes from a module's css into a theme file. An example, from SMACCS:

```
// in module-name.css
.mod {
    border: 1px solid;
}

// in theme.css
.mod {
    border-color: blue;
}
```
In this way, we break up and identify which attributes we consider to be theme-able into a separate file.


#### Atomic Design
[Atomic design][atomic-design] is less about structure, and more about how to conceptualize design of your pages and drive the build of your css classes. At it's basis, each element of your page can be thought of as an Atom... and it builds up from there, in 5 categories:

__Atom__: An atom is the smallest conceptual unit on your page. A single paragraph, a single form input, a single image, a single item in your navigation menu, etc.

__Molecule__: Molecules are a collection of atoms with a very specific unified goal. E.g.: a navigation menu; the label, input, and button of a search box.

__Organism__: A collection of molecules with a slightly less specific goal. E.g. A Header bar which may contain a nav menu, a search widget, and a company logo.

__templates__: Collections of organisms which may not be fully filled in; an empty skeleton structure of a page type.

__pages__: Final, fleshed-out templates.


#### Our Approach
There are properties of both approaches that we like. With Atomic Design, we love the approach of designing around Atoms, Molecules, and Organisms, although don't have much use for Templates or Pages, conceptually.

With SMACCS, the organizational structure and class type breakdown is appealing; however, there's an emphasis on multiple small classes, whereas we'd prefer to have a bit of hierarchy around our page structure that Atomic Design provides.

Our goal is to take the structural breakdown of SMACCS, but replace the concept of _module_ with Organism -> Molecule -> Atom from Atomic Design.

###### Structure

Foliage is designed to provide an array of Base, Layout, and Molecules/Atom files, upon which each ThirdChannel service can compose their individual `.css` file. Or, simply use the `global.css` file, which comprises most of the files contained within.

We use [Sass][sass], so each module, base, and layout concept can be broken up into its own file, then rebuilt during compile time. The key part here is the `css` and `scss` folders within Foliage, which we attempt to explain here, although further explanation can be found in sub-READMEs.

__CSS Folder__
Contains the following folders:

*	`dist`: The compiled `.css` files, one for each application + the global.css
*	`lib`: Any shared css libraries that are not `.scss`.
*	`scss`: The reason why we're here; see the next section for more info.

__SCSS Folder__
Contains the following folders:

*	`apps`: Contains sub folders for each app/service. Each folder should have a `main.scss` file, and may contain files with unique styles for each service
*	`base`: Contains files for base styles, according to the [SMACCS][smaccs] concept
*	`layout`: Files for classes relating to global/major layout
*	`lib`: Library css files in .scss format
*	`modules`: Couldn't think of an appropriate name for this, but this folder contains files containing organisms and molecules. Atoms should __generally__ be contained within the hierarchy of the organism.
*	`state`: Global states should be placed here. 
*	`theme`: Should contain overrides for the above, although - differing from SMACCS - no 'base' theme is placed here; the rest of the folders contain the 'base' style.

##### Design Guidelines
TODO

### Working with Foliage

Nearly all css should be placed within Foliage, and your service or app should reference its own css file from Foliage. The idea here is that eventually, our css will all be hosted on S3, so it will be referenced externally anyway.

We use [NodeJS][nodejs] to serve up the files and to generated a Cross Origin Policy header, and all CSS should be built using [Sass][sass]

##### Dev dependencies

*	Install [Node][nodejs] from [http://nodejs.org/][nodejs] or via HomeBrew
*	Install the various node modules and libraries (specifically [grunt][grunt]) by running `npm install` from the command line.



At this point you should now have [NodeJS][nodejs] and [Grunt][grunt] installed and ready to go. Grunt will allow you to execute various tasks, such as:

__Compile Sass__

```
> grunt sass
```

__Watch for Sass Changes__

```
> grunt watch
```

__Run the Node Server__

```
> grunt
```

[smaccs]: https://smacss.com/ "SMACCS"
[atomic-design]: http://bradfrostweb.com/blog/post/atomic-web-design/ "Atomic Design"
[nodejs]: http://nodejs.org/ "NodeJS"
[grunt]: http://gruntjs.com/ "Grunt"
[sass]: http://sass-lang.com/ "Sass"

