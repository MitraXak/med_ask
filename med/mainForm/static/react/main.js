

const logo = (
    <header>
        <div id="poslogo">
            <ul>
                <li id="siteLogo"><a href="www.med-ask.com">www.med-ask.com</a></li>
                <li id="logo"><a href="#">logo</a></li>
                <li id="mailLogo"><a href="#">test.intern@med-ask.com</a></li>
            </ul>
        </div>
    </header>
);
const caption = (
    <div>
        <h1>Начальное окно</h1>
    </div>
);
const windowComponent = (
    <div class="main">
        <h2>Проверка услуг медицинского страхования</h2>
        <div id="check">
            <a href="#" id="oms" onClick={defoms}>OMC</a>
            <a href="#" id="dms" onClick={defdms}>ДМС</a>
        </div>
        <div id="OMS">
            <div id="enter">
                <input type="text" id="polis" placeholder="Введите номер полиса"/>
                <input type="text" id="strax" placeholder="Выберите страховую компанию"/>
            </div>
            <div id="medUs">
                <h4>Выберите медицинские услуги</h4>
                <input type="text" placeholder="Введите запрашиваемую услугу для пациента"/>
            </div>
            <div class="printServies">
                <div id="serv"><span>&times;</span></div>
            </div>
            <div id="checkUs">
            <a href="#">Проверить</a>
            </div>
        </div>
        <div id="DMS">
            <div id="enter">
                <input type="text" placeholder="Введите номер полиса"/>
                <input type="text" placeholder="Выберите страховую компанию"/>
            </div>
            <div id="medUs">
                <h4>Выберите медицинские услуги</h4>
                <input type="text" placeholder="Введите запрашиваемую услугу для пациента"/>
            </div>
            <div id="takeServies">

            </div>
            <div id="checkUs">
                <a href="#">Проверить</a>
            </div>
        </div>
    </div>
);
const root = document.querySelector('#root');
ReactDOM.render(logo, root);
const lowerMenu = document.querySelector('#lowerMenu')
ReactDOM.render(caption, lowerMenu)
const win = document.querySelector('#window')
ReactDOM.render(windowComponent, win)
