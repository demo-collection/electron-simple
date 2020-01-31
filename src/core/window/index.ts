const openWindow = () => window.open('https://www.baidu.com', 'baidu');

const $openWindow = document.getElementById('click-to-open-window');
$openWindow.addEventListener('click', openWindow);

export default {};
