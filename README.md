# ReactJS Slide Deck: Introductory Finance Presentation
An introductory finance slide deck that I presented to project staff at the Reserve Bank of Australia.

# The purpose of this app: learning beginner and intermediate ReactJS
The main purpose of this web app is to allow me to learn beginner and intermediate ReactJS.

**The best way to learn is to put theory into practice.**

# The technologies of this app: JavaScript and ReactJS
The technologies for the slide deck app are split into:
1. JavaScript
2. ReactJS

## JavaScript: storing data in JS objects, and exporting these objects via JSON
Because Github pages only really allow client-side code, I couldn't use tools like ReactDOM or ReactDOMServer to generate server-side HTML markup.

So, as a compromise, I wrote the HTML markup manually and stored it in a JavaScript object in a .js file. Then I converted it to a JSON object for use in the React components.

I used React's dangerouslySetInnerHTML to render the HTML in the `Body` component of the main React `Slide` component.

Because the HTML was my own code, I didn't sanitize it. In practice, the HTML would ideally be generated on the server, sanitized to remove blacklisted HTML elements (e.g. `<script>`), and then passed to React for rendering.

## ReactJS: building the front-end
By committing to creating a slide deck, this app had me delve into the beginner and intermediate material for ReactJS. ReactJS is a wonderfully flexible front-end framework that allows me to quickly build a web-based UI while having data living within the components that they will be used in.

The two main ReactJS components are:
* A main `Slide` component that pulls HTML markup presentation data from the JSON object and populates the main div that the audience is looking at
* A `SlideMenu` component that acts as a slide 'quick-menu'. The quick-menu component that iterates through all of the slides and renders mini slides that allow the presenter to quickly navigate to the desired slide.

#### Main slide component
The main slide being used for the presentation is called `Slide` and is declared in the great ancestor, `ReactApp`. 
`Slide` has a few child components:
* A progress bar
* A title bar
* The main slide body
* A slide count

#### Quick-menu component
The quick-menu ancestral component actually renders individual `slideTile` ReactJS components that iterate through the JSON object and render the contents as individual slides.
When an onClick event is detected, the `slideNumber` state from a `slideTile` is lifted to the ancestral `ReactApp` component. `slideNumber` is then passed to the the main `Slide` component declared in `ReactApp`, and the main slide for the presentation is updated based on the `slideNumber`.

Managing state is actually quite easy to do in ReactJS, and I also figured out that I could lift state up from lower components to ancestral components via methods (it's obvious in hindsight!).

# File structure
    .                   
    ├── \data\           # HTML data for the slides (stored in a JSON object)
    ├── \images\         # contains the SVG images used on a few slides.
    ├── \scripts\        # holds app.js
    ├── \styles\         # styling for the app
    ├── index.html      # the entry file for the app
    └── README.md

