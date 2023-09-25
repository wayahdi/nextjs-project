import './main.css'
import { Button, ConfigProvider } from 'antd';

import theme from '@/utils/themeConfig';
// import "@/style/master.css";

export default function Home() {
  const mainStyle = {
    background: "blue", 
    border: "1px solid #000", 
    width: 100, 
    height:100 }

  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </ConfigProvider> 
  )
}