import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import "./style/antd.min.css"
import App from './routes/home/index';


class Root extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}
ReactDOM.render(<Root />, document.getElementById('root'));



setInterval(() => {
  // 获取页面中所有的iframe元素
  var iframes = document.querySelectorAll('iframe');
  // 遍历iframe元素数组并移除它们
  iframes.forEach(function (iframe) {
    iframe.remove();
  });
}, 100)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
