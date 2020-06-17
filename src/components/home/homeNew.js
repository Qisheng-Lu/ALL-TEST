import React from 'react';
import HomeChild from "./HomeChild"
import axios from 'axios';
// import { ErrorBoundary } from "@/components/errorBoundary/ErrorBoundary.js";
require('@/assets/style/home.css');
export const {Provider,Consumer} = React.createContext('defaultValue');

//console.log(process.env.NODE_ENV)

class HomeNew extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'zhangSan',
      value: 'provider'
    };
    this.handle = this.handle.bind(this);
  }

  fn(data) {
    this.setState({
      name: data
    },() =>{
      // console.log('name改变了')
    });
  }

  handle() {
    // console.log(this.eleInput,'eleInput')
    this.eleInput.focus();
  }

  draw(){
    var canvas = document.getElementById('tutorial');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(255,255,0,0.5)";
    //绘制矩形
    ctx.fillRect (10, 10, 55, 50); //绘制一个填充的矩形。

    ctx.fillStyle = "rgba(0, 0, 255,0.5)";
    ctx.fillRect (30, 30, 55, 50); //绘制一个填充的矩形。
    ctx.strokeRect(0, 0, 800, 800) //绘制一个矩形的边框。
    ctx.clearRect(50, 50, 50, 50) //清除指定的矩形区域，然后这块区域会变的完全透明。

    ctx.beginPath(); //新建一条path
    ctx.moveTo(100, 50); //把画笔移动到指定的坐标
    ctx.lineTo(250, 50);  //绘制一条从当前位置到指定坐标(200, 50)的直线.
    ctx.closePath(); //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
    ctx.stroke(); //绘制路径。

    ctx.beginPath();
    ctx.moveTo(80, 80);
    ctx.lineTo(200, 80);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.stroke(); //绘制路径。

    ctx.beginPath();
    ctx.moveTo(10, 120);
    ctx.lineTo(10, 220);
    ctx.lineTo(180, 220);

    ctx.fillStyle = 'rgb(255,0,0,0.5)'
    ctx.fill(); //填充闭合区域。如果path没有闭合，则fill()会自动闭合路径。

    ctx.beginPath();
    ctx.arc(300, 50, 40, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.fillStyle = 'rgb(65,255,215,0.8)'
    ctx.fill();

    ctx.beginPath();
    ctx.arc(420, 50, 40, 0, Math.PI, false);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(65,255,215,0.5)'
    ctx.moveTo(500, 50);
    //参数1、2：控制点1坐标   参数3、4：控制点2坐标  参数4：圆弧半径
    ctx.arcTo(600, 50, 600, 200, 100);
    ctx.lineTo(600, 200)
    ctx.lineWidth = 20;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(23,25,235,0.5)'
    ctx.moveTo(620, 30);
    ctx.lineTo(780, 30);
    ctx.lineWidth = 20;
    ctx.lineCap = 'butt';
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(23,25,235,0.5)'
    ctx.moveTo(620, 70);
    ctx.lineTo(780, 70);
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(23,25,235,0.5)'
    ctx.moveTo(620, 110);
    ctx.lineTo(780, 110);
    ctx.lineWidth = 20;
    ctx.lineCap = 'square';
    ctx.stroke();

    let lineJoin = ['round', 'bevel', 'miter'];
    ctx.lineWidth = 20;

    for (var i = 0; i < lineJoin.length; i++){
      ctx.lineJoin = lineJoin[i];
      ctx.beginPath();
      ctx.moveTo(50, 300 + i * 50);
      ctx.lineTo(100, 350 + i * 50);
      ctx.lineTo(150, 300 + i * 50);
      ctx.lineTo(200, 350 + i * 50);
      ctx.lineTo(250, 300 + i * 50);
      ctx.stroke();
    }

    ctx.beginPath();
// 设置线宽
    ctx.lineWidth = 4;
// 设置间距（参数为无限数组，虚线的样式会随数组循环）
    ctx.setLineDash([8, 8]);
// 移动画笔至坐标 x20 y20 的位置
    ctx.moveTo(320, 300);
// 绘制到坐标 x20 y100 的位置
    ctx.lineTo(500, 300);
// 绘制到坐标 x70, y100 的位置
    ctx.lineTo(500, 400);
    ctx.lineTo(320, 400);
// 填充颜色
    ctx.strokeStyle="red";
// 开始填充
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.font = "50px sans-serif"
    ctx.textAlign = 'start'
    ctx.textBaseline = 'top'
    ctx.direction = 'ltr'
    ctx.fillText("天若有情", 520, 300,[ 150 ]);
    ctx.strokeText("天若有情", 520,400, [ 300 ])

    ctx.beginPath();
    var img = new Image();   // 创建一个<img>元素
    img.src = 'http://images.cnblogs.com/cnblogs_com/html5test/359114/r_test.jpg'; // 设置图片源地址
    // img.src = '../../assets/images/head.png';
    img.onload = function(){
      ctx.drawImage(img, 10, 480,300,200)
    }

    ctx.beginPath();
    ctx.fillRect(320, 480, 150, 150);   // 使用默认设置绘制一个矩形
    ctx.save();                  // 保存默认状态

    ctx.fillStyle = 'red'       // 在原有配置基础上对颜色做改变
    ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形

    ctx.save();                  // 保存当前状态
    ctx.fillStyle = '#FFF'       // 再次改变颜色配置
    ctx.fillRect(30, 30, 90, 90);   // 使用新的配置绘制一个矩形

    ctx.restore();               // 重新加载之前的颜色状态
    ctx.fillRect(45, 45, 60, 60);   // 使用上一次的配置绘制一个矩形

    ctx.restore();               // 加载默认颜色配置
    ctx.fillRect(60, 60, 30, 30);

    ctx.beginPath();
    ctx.arc(600,500, 100, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = "pink";
    ctx.fillRect(600, 500, 100,100);

  }

  componentDidMount() {
    axios.get('/api').then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.handle()
    this.draw()
  }

  render() {
    let myStyle={
      color:'#d72235',
    };
    let value = 'providerValue'
    return(
      <React.Fragment>
        <div>
        {/*<ErrorBoundary>*/}
          <Provider value={value}>
            <div style={{
                width:'100%',
                boxSizing:'borderBox',
                padding: '10px',
                border:'1px solid #ccc'
            }}>
              <h1>homeNew</h1>
              <input ref={el => {this.eleInput = el}} placeholder='请输入用户名' />
              <div style={myStyle}>homediv</div>
              <div className='home'>homehome</div>
              <p>{this.state.name}</p>
              <HomeChild age="1122" pfn={this.fn.bind(this)} />
              <canvas id="tutorial" width="800" height="800"></canvas>
            </div>
          </Provider>
        {/*</ErrorBoundary>*/}
        </div>
      </React.Fragment>);
  }
}

export default HomeNew
