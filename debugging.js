'use strict'
/*
Implement a debugging code snippet that can be injected to any page by passing the code in the browser console which will show all ancestors of a currently hovered element.

1. The widget should be fixed to the bottom left of the page
2. The content of the widget should show the hierarchy of the currently hovered element
3. The hierarchy should look like this: "html > body > div > div > div > ul > li"

Hints
  1. Use console.dir to see attributes of a DOM node
  2. Use `.localName` property of a DOM node to get the tag name

Bonus:
  1. Apply nicer styling to the widget (add background color, padding, and gradual coloring for each child using `hsl`)
  2. Add classes and ids to the widget (body.my-class > div#root > div.btn.btn-small)
*/

// create a div with the class all-parents
const markup = `
      <div class="all-parents" style="position: fixed; bottom: 0px; left: 0px; border: 5px dashed #fff; background-color: #000; color: #fff;width: 500px; height: 150px; padding: 50px; text-align: center; z-index: 1000;">
      </div>      
      `

// insert markup to body of the document
document.body.innerHTML += markup

// getParents function
function getParents(el) {
  // set parentSelector constant to be the document
  const parentSelector = document

  // initialize parents array
  const parentsArray = []

  // initialize parent variable as given el parentNode
  let parent = el.parentNode

  // while the parent is not the parentSelector e.g. the document, and not null
  while (parent !== parentSelector && parent !== null) {
    // set element variable equal the parent variable
    let element = parent
    // unshift element.nodeName.toLowerCase to preventsArray
    parentsArray.unshift(element.nodeName.toLowerCase())
    // set parent variable to be its own parent
    parent = element.parentNode
  }

  // finally, unshift the document's nodeName.slice(1) itself to parentsArray
  parentsArray.unshift(parentSelector.nodeName.slice(1))

  // initialize pTag variable to be an opening p tag
  let pTag = `<p style="font-size: 1rem">`
  // set parents constant to be a string of parentsArray joined with ` > `
  const parents = parentsArray.join(` > `)

  // concat pTag string with parents string and a closing p tag
  pTag += parents + `</p>`

  // set innerHTML of div with "all-parents" class to be the pTag string
  document.querySelector('.all-parents').innerHTML = pTag
}

// set "all" as an HTMLCollection of all of the document's tags
const all = document.getElementsByTagName('*')

// loop through all elements in the document
for (const el of all) {
  // add to each element an event listener, so that on mouse over the getParents function will be called
  el.addEventListener('mouseover', (e) => getParents(e.target))
}
