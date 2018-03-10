let fs = require('fs');
let path = require('path');

let contentPath = path.join(__dirname, '../content');
let files = fs.readdirSync(contentPath, 'utf8');

files.forEach(f => {
    console.log(`Validating ${f}`);

    let raw = fs.readFileSync(path.join(contentPath, f));

    JSON.parse(raw);
});
