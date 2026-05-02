const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /#D4AF37/g, to: '#D4B2A7' },
  { from: /212, 175, 55/g, to: '212, 178, 167' }
];

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        walk(fullPath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      replacements.forEach(r => {
        if (r.from.test(content)) {
          content = content.replace(r.from, r.to);
          modified = true;
        }
      });
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  });
}

walk(process.cwd());
