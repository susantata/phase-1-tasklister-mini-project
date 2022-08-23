document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleTodo(e.target.new_task.value);
    form.reset();
  })
});

function handleTodo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  let listItem = document.createElement('li');
  btn.textContent = 'x';
  btn.addEventListener('click', handleDelete);
  p.textContent = `${todo} `;
    p.appendChild(btn)
  listItem.appendChild(p);
  document.querySelector('#tasks').appendChild(listItem);
}

function handleDelete(e) {
  e.target.parentNode.parentNode.remove();
  
}
