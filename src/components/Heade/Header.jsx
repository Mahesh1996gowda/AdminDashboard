import React from 'react'
import { Badge, Image, Space, Typography } from 'antd'
import {MailOutlined,BellFilled} from '@ant-design/icons'
const Header = () => {
  return (
    <div className='Header'>
     <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMijbmFRFWhzLJ1DBM2BOD_NCJm-JWRQlmkg&usqp=CAU" height={"50px"}width={'50px'}></Image>
     <Typography.Title>Mahesh DashBoard</Typography.Title>
     <Space style={{marginRight:'50px'}}>
        <Badge dot count={3}>
        <MailOutlined style={{fontSize:"20px"}}/>
        </Badge>
        <Badge count={20}>
        <BellFilled  style={{fontSize:"20px"}}/>
        </Badge>
     </Space>
    </div>
  )    
}

export default Header
