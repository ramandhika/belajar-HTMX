const express = require('express');

const app = express();
const port = 3000;

// Atur static folder
app.use(express.static('public'));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Define your routes here
app.get('/users', async (req, res) => {
    setTimeout(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        res.send(`
        <h1 class="text-2xl font-bold my-4">Users</h1>
        <ul>
          ${data.map((user) => `<li>${user.name}</li>`).join('')}
        </ul>
      `);
    }, 2000);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
