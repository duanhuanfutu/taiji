let html = document.querySelector('#demo');
let style = document.querySelector('#style')
let string = `
/*你好，我是一名前端新人
*接下来我展示一下我的前端功底
*首先我要准备一个div*/
#div1{
    border: 1px solid red;
    width :200px ;
    height :200px;
}
/*接下来我把div变成一个太极图
*注意看好了
*首先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*太极是阴阳形成的
*一黑一白*/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*接下来就是加两个阴阳鱼*/
#div1::before{
    width:100px;
    height:100px;
    left:0;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: #000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: #fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;

let string2 = ""
let n = 0

let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += "<br>"
        } else if (string[n] === " ") {
            string2 += "&nbsp; "
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0,99999);
        demo.scrollTo(0,99999);
        if (n + 1 < string.length) {
            n += 1
            step()
        } else {
        }
    }, 50)
}

step()

