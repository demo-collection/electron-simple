let subWin: Window;

const openWindow = () => {
  subWin = window.open('./pages/pop_page.html', 'pop_page');
};

const closeWindow = () => subWin.close();

const $openWindow = document.getElementById('click-to-open-window');
const $closeWindow = document.getElementById('close-window');

$openWindow.addEventListener('click', openWindow);
$closeWindow.addEventListener('click', closeWindow);

window.addEventListener('message', message => {
  console.log(message);
});


export default {};
