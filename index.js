function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  const grandNode = document.querySelectorAll('#grand-node')
  var current = grandNode
  var next = [] 
  
  while(current) {
    if (current[0].children.length === 0) {
      return current[0]
    }
    
    for(let i = 0; i < current.length; i++) {
      next.push(current[i].children)
    }
    current = next.shift()
  }
  return current[0]
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list li')
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + (n)
  }
}

