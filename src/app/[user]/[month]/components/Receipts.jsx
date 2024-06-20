import React, { useEffect, useState } from 'react';
import { List, Card, Typography, Breadcrumb, FloatButton, Modal, Button, Form, Input, message } from 'antd';
import { usePathname } from 'next/navigation';
import { UserAddOutlined } from '@ant-design/icons';
import { Percentages } from './';

const { Text } = Typography;


function Receipts() {
  const [receipt, setReceipt] = useState();
  const [receipts, setReceipts] = useState([]);
  const [isCreateReceiptOpen, setCreateReceiptOpen] = useState(false);

  const pathName = usePathname();

  const showCreateReceiptModal = () => {
    setCreateReceiptOpen(true);
  }

  function showError(errorMessage, duration = 5) {
    message.error(errorMessage, duration);
  }

  const handleCreateReceiptOk = () => {
    if (receipt.length !== 10) {
      showError('Баримт 10 оронтой байх ёстой.');
      return;
    }
    if (!/^[A-Z]{2}/.test(receipt)) {
      showError('Баримтын эхэнд 2 үсэг байх ёстой.');
      return;
    }  
    if (!/^\d{8}$/.test(receipt.substring(2))) {
      showError('Баримтын төгсгөлд 8 тоо байх ёстой.');
      return;
    }

    const cachedJson = JSON.parse(localStorage.getItem('elottery'));
    if(cachedJson) {
      const pathSegments = pathName.split('/');
      for(var i = 0; i < cachedJson[pathSegments[1]].months.length; i++) {
        if(cachedJson[pathSegments[1]].months[i].month == pathSegments[2]) {
          const arr = cachedJson[pathSegments[1]].months[i].receipts;
          arr.push(receipt);
          cachedJson[pathSegments[1]].months[i].receipts = arr;
        }
      }
    }
    localStorage.setItem('elottery', JSON.stringify(cachedJson));
    window.location.reload();
    setCreateReceiptOpen(false);
  }

  const handleCreateReceiptCancel = () => {
    setCreateReceiptOpen(false);
  }

  useEffect(() => {
    const cachedJson = JSON.parse(localStorage.getItem('elottery'));
    if(cachedJson) {
      const pathSegments = pathName.split('/');
      for(var i = 0; i < cachedJson[pathSegments[1]].months.length; i++) {
        if(cachedJson[pathSegments[1]].months[i].month == pathSegments[2]) {
          setReceipts(cachedJson[pathSegments[1]].months[i].receipts)
        }
      }
    }
  }, []);

  return (
    <div className='w-[60vw] h-full text-center flex flex-col mt-5'>
        <Breadcrumb className='text-lg'
          items={[
            {
              title: <a href={'/projects/elottery/' + pathName.split("/")[1]}>{pathName.split("/")[1]}</a>,
            },
            {
              title: pathName.split("/")[2],
            },
          ]}
        />
        <Percentages receipts={receipts}/>
        <Card title={"Бүртгэгдсэн баримтууд: " + receipts.length} className='mt-5'>
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
        <FloatButton type='primary' onClick={showCreateReceiptModal} icon={<UserAddOutlined />} className='w-[75px] h-[75px]'/>
        <Modal 
          title="Хэрэглэгч үүсгэх" 
          open={isCreateReceiptOpen}
          onCancel={handleCreateReceiptCancel}
          footer={<Button className='btn primary' onClick={handleCreateReceiptOk} >Үүсгэх</Button>}
        >
          <Form className='flex flex-col justify-center'>
              <Form.Item
                    label='Баримтын дугаар:'
                    name='name'>
                    <Input placeholder='102324252' onChange={(e) => {setReceipt(e.target.value)}}/>
              </Form.Item>
          </Form>
        </Modal>
    </div>
  )
}

export default Receipts;