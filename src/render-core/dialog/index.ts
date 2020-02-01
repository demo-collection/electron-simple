import { remote } from 'electron';

const dialog = remote.dialog;

const $openDialog = document.getElementById('open-dialog');

$openDialog.addEventListener('click', () => {
  const files = dialog.showOpenDialogSync({
    title: '请选择文件',
  });
  console.log('files', files);
});

export default {};
