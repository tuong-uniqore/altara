import fs from 'fs';

const files = ['src/pages/index.astro', 'src/pages/en.astro'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Fix images src: BASE_URL + "photos/" -> BASE_URL + "/photos/"
    // since we already wrote BASE_URL + "photos/...", let's just replace the exact strings
    content = content.replace(/BASE_URL \+ "photos\//g, 'BASE_URL + "/photos/');
    content = content.replace(/BASE_URL \+ "en"/g, 'BASE_URL + "/en"');

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Urls slashes fixed!');
