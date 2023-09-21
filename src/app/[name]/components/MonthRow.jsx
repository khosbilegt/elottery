import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Text } = Typography;


function MonthRow(props) {

  const pathName = usePathname();


  const deleteMonth = () => {
    const cachedJson = localStorage.getItem('elottery');
    let newJson = JSON.parse(cachedJson);
    const cleanPathname = pathName.replaceAll('/', '');
    console.log(newJson[cleanPathname])
    for(var i = 0; i < newJson[cleanPathname].months.length; i++) {
      if(props.name == newJson[cleanPathname].months[i].month) {
        newJson[cleanPathname].months.pop(newJson[cleanPathname].months[i]);
      }
    }
    localStorage.setItem('elottery', JSON.stringify(newJson));
    window.location.reload();
  }

  return (
    <Link href={pathName + "/" + props.name} className='flex items-center justify-between w-full hover:bg-blue-300 duration-300 rounded-lg border-2 border-black-800 hover:border-blue-300 p-4'>
        <Text>{props.name}</Text>
        <Button shape="circle" icon={<CloseOutlined className='text-white'/>} onClick={deleteMonth}
        className='bg-red-500 hover:bg-red-400 border-none' />
    </Link>
  )
}

export default MonthRow;