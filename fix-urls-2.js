const fs = require('fs');

const files = ['src/pages/index.astro', 'src/pages/en.astro'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Replace images src
    let replaced1 = content.replace(/src="\/photos\//g, 'src={import.meta.env.BASE_URL + "photos/');
    // Now close them correctly - previous used ([^"]+) which might not match if there are spaces, but there shouldn't be.
    let replaced2 = replaced1.replace(/src={import.meta.env.BASE_URL \+ "photos\/([^"]+)"/g, 'src={import.meta.env.BASE_URL + "photos/$1"}');

    // Replace href="/"
    let replaced3 = replaced2.replace(/href="\/"/g, 'href={import.meta.env.BASE_URL}');

    // Replace href="/en"
    let replaced4 = replaced3.replace(/href="\/en"/g, 'href={import.meta.env.BASE_URL + "en"}');

    fs.writeFileSync(file, replaced4, 'utf8');
});

console.log('Urls updated successfully with simplified regex!');
