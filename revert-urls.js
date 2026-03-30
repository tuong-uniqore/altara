import fs from 'fs';

const files = ['src/pages/index.astro', 'src/pages/en.astro'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Remove the BASE_URL logic entirely and just use absolute paths
    // Example: src={import.meta.env.BASE_URL + "/photos/3.jpg"} -> src="/photos/3.jpg"
    content = content.replace(/src={import\.meta\.env\.BASE_URL \+ "\/photos\/([^"]+)"}/g, 'src="/photos/$1"');

    // Replace href={import.meta.env.BASE_URL} -> href="/"
    content = content.replace(/href={import\.meta\.env\.BASE_URL}/g, 'href="/"');

    // Replace href={import.meta.env.BASE_URL + "/en"} -> href="/en"
    content = content.replace(/href={import\.meta\.env\.BASE_URL \+ "\/en"}/g, 'href="/en"');

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Reverted to absolute paths for Custom Domain!');
