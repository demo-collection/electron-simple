import { remote } from 'electron';
import MenuItemConstructorOptions = Electron.MenuItemConstructorOptions;

const Menu = remote.Menu;
const MenuItem = remote.MenuItem;

// 点击按钮打开菜单

const $openMenu = document.getElementById('open-menu');

const openMenu = () => {
  const template: MenuItemConstructorOptions[] = [
    {
      label: '第一个菜单',
    },
    {
      label: '点击测试', click: () => {
        console.log('click');
      },
    },
    {
      role: 'undo',
    },
    {
      label: '旅游',
      type: 'checkbox',
      checked: true,
    },
    {
      label: '吃',
      type: 'checkbox',
      checked: true,
    },
    {
      label: '逛街',
      type: 'checkbox',
      checked: false,
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  menu.popup();
};

$openMenu.addEventListener('click', openMenu);

export default {}
