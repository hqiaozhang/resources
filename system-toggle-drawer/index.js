// SystemToggleDrawer.js
export default class SystemToggleDrawer {
  constructor(options) {
    this.menus = options.menus;
    this.onChange = options.onChange;
    this.container = options.container || document.body; // 支持自定义挂载点
    this.keyword = '';
    this.drawerVisible = false;
    this.init();
  }

  init() {
    this.renderTooltip();
    this.renderDrawer();
    this.renderMask(); // 初始化遮罩
  }

  renderTooltip() {
    const tooltip = document.createElement('div');
    tooltip.className = 'system-action';
    tooltip.innerHTML = `
      <i class="icon-system-toggle"></i>
    `;
    tooltip.addEventListener('click', () => this.openDrawer(true));
    this.container.appendChild(tooltip); // 挂载到指定容器
  }

  renderDrawer() {
    this.drawer = document.createElement('div');
    this.drawer.className = 'system-toggle-drawer closed';
    this.drawer.innerHTML = `
      <div class="sys-drawer-body">
        <div class="sys-drawer-header"> 
        <span  class="close"><svg focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" fill-rule="evenodd" viewBox="64 64 896 896"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg></span>
          <span class="title">切换应用</span>
        </div> 
        <input class="sys-input-search" placeholder="搜索：请输入关键词" />
        <div class="main">
          <div class="item">
            <div class="item-list"></div>
          </div>
        </div>
      </div>
    `;
    this.container.appendChild(this.drawer); // 挂载到指定容器

    // 绑定搜索输入框事件（使用防抖）
    const searchInput = this.drawer.querySelector('.sys-input-search');
    searchInput.addEventListener('input', this.debounce((e) => {
      this.keyword = e.target.value;
      this.renderMenuList();
    }, 500)); // 防抖时间设置为 300ms

    this.renderMenuList();
  }

  renderMask() {
    this.mask = document.createElement('div');
    this.mask.className = 'drawer-mask';
    this.mask.style.display = 'none'; // 默认隐藏
    this.mask.addEventListener('click', () => this.onClose()); // 点击遮罩关闭弹层
    this.container.appendChild(this.mask); // 挂载到指定容器
  }

  renderMenuList() {
    const itemList = this.drawer.querySelector('.item-list');
    itemList.innerHTML = '';
    const filteredMenus = this.getSysList();
    filteredMenus.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = `item-list-item ${this.getActive(item) ? 'active' : ''}`;
      itemElement.innerHTML = `
        <p class="com-hover">${item.name}</p>
        <span class="icon ">
          <svg focusable="false"  data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
        </span>
      `;
      itemElement.addEventListener('click', () => this.selectItem(item));
      itemList.appendChild(itemElement);
    });
  }

  getSysList() {
    return this.keyword ? this.menus.filter(o => o.name.indexOf(this.keyword) !== -1) : this.menus;
  }

  openDrawer(visible) {
    this.drawerVisible = visible;
    this.drawer.classList.toggle('open', visible);
    this.drawer.classList.toggle('closed', !visible);
    this.mask.style.display = visible ? 'block' : 'none'; // 控制遮罩显示
  }

  onClose() {
    this.drawerVisible = false;
    this.drawer.classList.remove('open');
    this.drawer.classList.add('closed');
    this.mask.style.display = 'none'; // 隐藏遮罩
  }

  selectItem(item) {
    const { currentSystem, exteriorUrl } = item;
    const hostname = window.location.hostname;
    const isHost = hostname === 'localhost';
    if (exteriorUrl && exteriorUrl.includes(hostname) && !isHost) return;
    if (this.onChange) this.onChange(item);
  }

  getActive(item) {
    const { currentSystem, exteriorUrl } = item;
    const hostname = window.location.hostname;
    const isHost = hostname === 'localhost';
    return (exteriorUrl && exteriorUrl.includes(hostname) && !isHost) || (!exteriorUrl && currentSystem);
  }

  // 防抖函数
  debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }
}