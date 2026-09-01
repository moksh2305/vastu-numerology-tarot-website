const fs = require('fs');
const html = fs.readFileSync('index_backup.html', 'utf-8');
const match = html.match(/<img src="(data:image\/jpeg;base64,[^"]+)"/);
if (match) {
  const base64Data = match[1].replace(/^data:image\/jpeg;base64,/, '');
  fs.mkdirSync('src/assets', { recursive: true });
  fs.writeFileSync('src/assets/hero.jpg', base64Data, 'base64');
  console.log('Image saved to src/assets/hero.jpg');
} else {
  console.log('Image not found in index_backup.html');
}
