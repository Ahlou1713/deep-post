import React, { ReactNode } from 'react'
import { Avatar, Flex } from 'antd'
import {UserOutlined} from "@ant-design/icons";
import {Typography} from 'antd';

const { Title, Text } = Typography;

interface Props {
    children: ReactNode
}

const UserAvatar = ({children}: Props) => {
  return (
    <Flex align='center' justify='space-between'>
        <Avatar size={60} icon={<UserOutlined />} />
        <Title level={4} type='success' >{children}</Title>
    </Flex>
  )
}

export default UserAvatar