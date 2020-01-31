const openWindow = () => window.open('./pages/pop_page.html', 'pop_page');

const $openWindow = document.getElementById('click-to-open-window');
$openWindow.addEventListener('click', openWindow);

window.addEventListener('message', message => {
  console.log(message)
});

export default {};
