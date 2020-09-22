class windows {
    constructor() {
        this.Url = () => {
            return window.location.href;
        }
        this.Urlhash = () => {
            return window.location.hash;
        }
        this.Urlsearch = () => {
            return window.location.search;
        }
        this.Width = () => {
            return window.innerWidth;
        }
        this.Height = () => {
            return window.innerHeight;
        }
        this.ScreenWidth = () => {
            return window.screen.width;
        }
        this.ScreenHeight = () => {
            return window.screen.height;
        }
        this.Urlorigin = () => {
            return window.location.origin;
        }
        this.Open = (url, name, optional, object = () => {}) => {
            object()
            return window.open(url, name, optional);
        }
        this.moveTo = (object, num1, num2) => {
            return object.moveTo(num1, num2)
        }
        this.resizeTo = (object, num1, num2) => {
            return object.resizeTo(num1, num2)
        }
        this.resizeBy = (object, num1, num2) => {
            return object.resizeBy(num1, num2)
        }
        this.Print = () => {
            return window.print();
        }
        this.Copy = (text = () => {}) => {
            window.addEventListener('copy', (event) => {
                text()
            });
        }
        this.Load = (text = () => {}) => {
            window.addEventListener('load', (event) => {
                text()
            });
        }
        this.Alert = (text) => {
            return window.alert(text);
        }
        this.setInterval = (Callback, num) => {
            return window.setInterval(Callback, num);
        }
        this.onresize = () => {
            return window.onresize
        }
    }
}
let Window = new windows();
export default Window;