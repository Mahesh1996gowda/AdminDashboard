import React from 'react'
import Header from './components/Heade/Header'
import Pagecontent from './components/Pagecontent/Pagecontent'
import SideMenu from './components/SideMenu/SideMenu'
import Footer from './components/Footer/Footer'
import { Space } from 'antd'
import './components/Style.css'
const App = () => {
  return (
    <div className='App'>
      <Header/>
    <Space>
    <SideMenu/>
     <Pagecontent/>
    </Space>
     <Footer/>

    </div>
  )
}

export default App
