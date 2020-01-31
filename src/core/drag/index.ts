import { map } from 'lodash';
import * as fs from 'fs';


const $drag = document.getElementById('drag');

$drag.addEventListener('drop', (e: DragEvent) => {
  e.preventDefault();
  const files: FileList = e.dataTransfer.files;

  map(files, item => {
    const content = fs.readFileSync(item.path, { encoding: 'utf8' });
    console.log(content);
  });
});

$drag.addEventListener('dragover', (e: DragEvent) => {
  e.preventDefault();
});

export default {};
