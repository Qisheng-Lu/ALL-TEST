import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);

  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    // return { hasError: true };
    console.log(error,'error')
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    console.log('cuowu')
  }

  render() {
    return(
        <div>
          <h1>ErrorBoundary</h1>
        </div>
    )
  }
}

export default ErrorBoundary
