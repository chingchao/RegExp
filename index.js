// import './style.less';

let regInp = document.querySelector('#regInp');
let testText = document.querySelector('#testText');

//常用正则
let regList = document.querySelector('.js-reg-list');
regList.onclick = function (e) {
    let reg = e.target.getAttribute('data-reg');
    if (!reg) return false;
    regInp.value = reg;
    testFn();
};

//正则匹配
testText.oninput = () => testFn();
regInp.oninput = () => testFn();

function testFn () {
    let html = testText.value;
    let resultBox = document.querySelector('#resultBox');
    resultBox.innerHTML = html;
    let regText = document.querySelector('#regInp').value;
    regInp.classList.remove('br');

    //判断输入是否是正则
    let reg = null;
    try {
        reg = eval(regText);
        if (Object.prototype.toString.call(reg) !== '[object RegExp]') {
            throw 'not RegExp';
        }
        if (/\/\/\/$/.test(regText)) {
            throw 'not RegExp';
        }
    } catch (e) {
        console.log('not RegExp');
        regInp.value !== '' ? regInp.classList.add('br') : '';
        return false;
    }

    //显示匹配
    let text = testText.value;
    console.log(reg);
    html = text.replace(reg, `<span class="match-text">$&</span>`);
    resultBox.innerHTML = html;
}
