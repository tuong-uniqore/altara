const fs = require('fs');

const files = ['src/pages/index.astro', 'src/pages/en.astro'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Replace images src
    content = content.replace(/src="\/photos\/([^"]+)"/g, 'src={import.meta.env.BASE_URL + "photos/$1"}');
    
    // Replace hrefs
    content = content.replace(/href="\/"/g, 'href={import.meta.env.BASE_URL}');
    content = content.replace(/href="\/en"/g, 'href={import.meta.env.BASE_URL + "en"}');
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log('Urls updated successfully!');
