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

const html = `
      <div class="all-parents" style="position: fixed; bottom: 0px; left: 0px; border: 5px dashed #fff; background-color: #000; color: #fff;width: 500px; height: 150px; padding: 50px; text-align: center; z-index: 1000;">
      </div>      
      `

document.body.innerHTML += html

function getParents(el) {
  const parentSelector = document

  const parentsArray = []

  let parent = el.parentNode

  while (parent !== parentSelector && parent !== null) {
    let element = parent
    parentsArray.unshift(element.nodeName.toLowerCase())
    parent = element.parentNode
  }

  parentsArray.unshift(parentSelector.nodeName.slice(1))

  let pTag = `<p style="font-size: 1rem">`
  const parents = parentsArray.join(` > `)

  pTag += parents + `</p>`

  document.querySelector('.all-parents').innerHTML = pTag
}

const all = document.getElementsByTagName('*')

for (const el of all) {
  el.addEventListener('mouseover', (e) => getParents(e.target))
}
