# Faux Slide Deck: Introductory Finance Presentation
An introductory finance slide deck that I presented to project staff at the Reserve Bank of Australia.

## The purpose of this app: learning beginner and intermediate ReactJS
The main purpose of this web app is to allow me to learn beginner and intermediate ReactJS.

**The best way to learn is to put theory into practice.**

## The technologies of this app: JavaScript and ReactJS
The technologies for the slide deck app are split into:
1. JavaScript
2. ReactJS

### JavaScript: storing data in JS objects, and exporting these objects via JSON


### ReactJS: building the front-end
By committing to creating a slide deck, this app had me delve into the beginner and intermediate material for ReactJS. ReactJS is a wonderfully flexible front-end framework that allows me to quickly build a web-based UI while having data living within the components that they will be used in.

The two main ReactJS components are:
* A main slide component that pulls HTML markup presentation data from the JSON object and populates the main div that the audience is looking at
* A 'quick-menu' component that iterates through all of the slides and renders mini slides that the presenter can use to quickly navigate to a slide.

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

### File structure
    .                   
    ├── \data\           # HTML data for the slides (stored in a JSON object)
    ├── \images\         # contains the SVG images used on a few slides.
    ├── \scripts\        # holds app.js
    ├── \styles\         # styling for the app
    ├── index.html      # the entry file for the app
    └── README.md

