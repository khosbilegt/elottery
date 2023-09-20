import React from 'react';
import Link from 'next/link';
import { Button, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Text } = Typography;


function UserRow(props) {

  const deleteUser = () => {
    const cachedJson = localStorage.getItem('elottery');
    let newJson = JSON.parse(cachedJson);
    delete newJson[props.name];
    localStorage.setItem('elottery', JSON.stringify(newJson));
    window.location.reload();
  }

  return (
    <Link href={"/" + props.name} className='flex items-center justify-between w-full hover:bg-blue-300 duration-300 rounded-lg border-2 border-black-800 hover:border-blue-300 p-4'>
        <Text>{props.name}</Text>
        <Button shape="circle" icon={<CloseOutlined className='text-white'/>} onClick={deleteUser}
        className='bg-red-500 hover:bg-red-400 border-none' />
    </Link>
  )
}

export default UserRow;