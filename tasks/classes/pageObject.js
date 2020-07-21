/**
 * Organize a page object structure of any app you want:
 * 1. Base page should be created
 * 2. At least one of the child pages should be inherited from the page
 * 3. Create a simple walk through scenarios using the described elements (how it was done on the sessions for Login functionality)
 */
class PageBlock {
    constructor(element, icon) {
        this.element = element;
        this.icon = icon;
    }
    viewBlock() {
        return `Block ${this.element} exist`;
    }
    viewIcon() {
        return `Icon ${this.icon} exist in ${this.element} block`;
    }
}
class Page {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    viewBaseUrl() {
        return `Base URL: ${this.baseUrl}`;
    }
    get header() {
        return new PageBlock('header');
    }
    get footer() {
        return new PageBlock('footer');
    }
    open() {
        return `Opened page: ${this.baseUrl}${this.path}`;
    }
    clickIcon() {
        return `The icon is clicked`;
    }

}

class PlayerPage extends Page {
    constructor(baseUrl, path) {
        super(baseUrl);
        this.path = path;
        this.play = 'started';
    }
    get playerArea() {
        return new PageBlock('player');
    }
    get metadataArea() {
        return new PageBlock('metadata');
    }
    get headerLink() {
        return new PageBlock('header', 'player');
    }
    get Credentials() {
        return 'Credentials Field';
    }
    get PlayButton() {
        return 'Play button';
    }
    credentials(password) {
        return `The ${password} password was set into ${this.Credentials}`;
    }
    clickPlayButton() {
        return `${this.PlayButton} is clicked`;
    }
    playback() {
        return `Playback status: ${this.play}`;
    }

}
const playerpage = new PlayerPage('www.anyvideo.com', '/player');
console.log(playerpage.viewBaseUrl());
console.log(playerpage.header.viewBlock());
console.log(playerpage.headerLink.viewIcon());
console.log(playerpage.clickIcon());
console.log(playerpage.open());
console.log(playerpage.playerArea.viewBlock());
console.log(playerpage.metadataArea.viewBlock());
console.log(playerpage.credentials('1234567'));
console.log(playerpage.clickPlayButton());
console.log(playerpage.playback());