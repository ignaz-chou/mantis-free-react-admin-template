// 导入React中的StrictMode模式，可以帮助检测潜在的问题并显示警告
import { StrictMode } from 'react';

// 导入react-dom中的createRoot函数，用于创建React根节点
import { createRoot } from 'react-dom/client';

// 导入react-router-dom中的BrowserRouter组件，用于提供基于浏览器的路由功能
import { BrowserRouter } from 'react-router-dom';

// 导入simplebar的样式文件，用于自定义滚动条样式
import 'simplebar/src/simplebar.css';

// 导入第三方库中的ReduxProvider组件，用于在React应用中集成Redux状态管理
import { Provider as ReduxProvider } from 'react-redux';

// 导入apex-chart的样式文件，用于展示图表数据
import 'assets/third-party/apex-chart.css';

// 导入项目中的App组件，即应用的主组件
import App from './App';

// 导入项目中的Redux store，用于管理应用的状态
import { store } from 'store';

// 导入reportWebVitals函数，用于测量应用的性能数据
import reportWebVitals from './reportWebVitals';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

// 获取DOM中id为'root'的元素，作为React应用的容器
const container = document.getElementById('root');

// 使用createRoot函数创建React根节点，并将其挂载到容器中
const root = createRoot(container); // 如果使用TypeScript，请改为createRoot(container!)
root.render(
  // 使用StrictMode组件包裹应用，以启用严格模式，检查潜在问题并显示警告
  <StrictMode>
    {/* 使用ReduxProvider组件将Redux store传递给应用 */}
    <ReduxProvider store={store}>
      {/* 使用BrowserRouter组件提供浏览器路由功能，并指定应用的基本URL为"/free" */}
      <BrowserRouter basename="/free">
        {/* 渲染应用的主组件 */}
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);

// 如果你想要开始测量应用的性能，可以传递一个函数给reportWebVitals
// 该函数可以记录结果（例如：reportWebVitals(console.log)）或将结果发送到分析服务端点。
// 了解更多：https://bit.ly/CRA-vitals
reportWebVitals();
