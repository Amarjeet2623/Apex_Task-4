function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }
  
  function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function addTask() {
    const input = document.getElementById('taskInput');
    const tasks = getTasks();
    if (input.value.trim() !== '') {
      tasks.push(input.value.trim());
      saveTasks(tasks);
      input.value = '';
      renderTasks();
    }
  }
  
  function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
  }
  
  function renderTasks() {
    const tasks = getTasks();
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    tasks.forEach((task, i) => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${task} <button onclick="deleteTask(${i})">❌</button>
      `;
      list.appendChild(li);
    });
  }
  
  renderTasks();

// ---------------- Products Section ----------------
const products = [
  { name: 'Laptop', price: 95000, category: 'electronics', image: 'laptop.jpg' },
  { name: 'Smartphone', price: 60000, category: 'electronics', image: 'smartphone.jpg' },
  { name: 'Shirt', price: 1200, category: 'clothing', image: 'shirt.jpg' },
  { name: 'Jeans', price: 3000, category: 'clothing', image: 'jeans.jpg' },
  
];

function renderProducts() {
  const category = document.getElementById('categoryFilter').value;
  const sort = document.getElementById('priceSort').value;
  let filtered = [...products];

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  const container = document.getElementById('productList');
  container.innerHTML = '';
  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-item';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
    `;
    container.appendChild(div);
  });
}

renderProducts();