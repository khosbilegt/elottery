import React, { useEffect, useState } from 'react';
import { List, Card, Typography, Breadcrumb } from 'antd';
import { usePathname } from 'next/navigation';

const { Text } = Typography;


function LotteryTable() {

  const [receipts, setReceipts] = useState();

  const pathName = usePathname();

  const data = ["test", "test2"];

  useEffect(() => {
    const cachedJson = JSON.parse(localStorage.getItem('elottery'));
    if(cachedJson) {
      const pathSegments = pathName.split('/');
      for(var i = 0; i < cachedJson[pathSegments[1]].months.length; i++) {
        if(cachedJson[pathSegments[1]].months[i].month == pathSegments[2]) {
          console.log(cachedJson[pathSegments[1]].months[i])
        }
      }
    }
  }, []);

  return (
    <div className='w-1/2 h-full text-center flex flex-col mt-5'>
        <Breadcrumb className='text-lg'
          items={[
            {
              title: <a href="">{pathName.split("/")[1]}</a>,
            },
            {
              title: pathName.split("/")[2],
            },
          ]}
        />
      <Card  title={"Бүртгэгдсэн баримтууд"} className='mt-5'>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={receipts}
          renderItem={(item) => (
            <List.Item>
              <Text>{item}</Text>
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
}

export default LotteryTable;