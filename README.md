# Faux Slide Deck: Introductory Finance Presentation
An introductory finance slide deck that I presented to project staff on a project I worked on at the Reserve Bank of Australia.

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

## File structure
*
-public
|-\data\... holds the .js file that contains the HTML data for the slides (stored in a JSON object). Also contains a stringified JSON object that is used by app.js
|-\images\... contains the SVG images used on a few slides. The SVG images were created via MS Excel and are vector images, which mean they won't be pixelated if the user adjusts the zoom in the browser UI
|-\scripts\app.js... holds app.js, the main app file that imports the JSON HTML data, and that defines the React components
|-\styles\style.css... contains the styling for the app

