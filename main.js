let input_task = document.getElementById('input_task')
let btn_task = document.getElementById('btn_task')
let boxs = document.querySelectorAll('.list .box')
let drag = null


// add Task
let addTask = (task) => {
  if (task != '') {
    boxs[0].innerHTML += `
  <p class="item" draggable="true">${task}</p>
  `
    input_task.value = ''
  }
}

btn_task.addEventListener('click', (e) => {
  addTask(input_task.value)
  drag_drop()
})

let drag_drop = () => {
  let items = document.querySelectorAll('.list .box .item')
  items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
      drag = item
      e.target.style.opacity = '0.5'
    })
    item.addEventListener('dragend', (e) => {
      drag = null
      e.target.style.opacity = '1'
    })

    boxs.forEach(box => {
      box.addEventListener('dragover', (e) => {
        e.preventDefault()
        box.style.backgroundColor = '#00aa39'
        box.style.color = '#fff'
      })
      box.addEventListener('dragleave', () => {
        box.style.backgroundColor = '#fff'
        box.style.color = '#000'
      })

      box.addEventListener('drop', (e) => {
        box.appendChild(drag)
        box.style.backgroundColor = '#fff'
        box.style.color = '#000'
      })
    });
  })
}

