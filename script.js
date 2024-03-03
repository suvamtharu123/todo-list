const item = document.querySelector('#item');
const todoBox = document.querySelector('#to-do-box');

item.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    addTodo(this.value)
    this.value = ''

  }
})

const addTodo = (item) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `  ${item}
<i class="fa fa-times"></i>`;
  todoBox.append(listItem)
  listItem.addEventListener('click', function () {
    this.classList.toggle('done')
  })
  listItem.querySelector('i').addEventListener('click', function () {
    listItem.remove()
  })
}

