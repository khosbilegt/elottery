import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button, FloatButton, List, Form, DatePicker, Modal, Typography } from 'antd';
import type { DatePickerProps } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { MonthRow } from './';


const { Title } = Typography;

function Months() {
  const [months, setMonths] = useState<{ [key: string]: any }>({});
  const [userNames, setUserNames] = useState<string[]>([]);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [date, setDate] = useState('');

  const onChange: DatePickerProps['onChange'] = (dateTemp, dateString) => {
    setDate(dateString);
  }

  const showDatePickerModal = () => {
    setDatePickerOpen(true);
  }

  const handleDatePickerOk = () => {
    const cachedJson = localStorage.getItem('elottery') || '{}';
    let newJson = JSON.parse(cachedJson);
    const pathname = usePathname().replace('/', '');

    if(newJson[pathname].months != null) {
        newJson[pathname].months[date] = date;
    } else {
        newJson[pathname] = {
          [date]: date
        };
    }
    localStorage.setItem('elottery', JSON.stringify(newJson));
    window.location.reload();
    setDatePickerOpen(false);
  };

  const handleDatePickerCancel = () => {
    setDatePickerOpen(false);
  };

  useEffect(() => {
    const cachedJson: { months?: any } = JSON.parse(localStorage.getItem('elottery') || '{}');
    console.log(cachedJson);
    if (cachedJson.months != null) {
      console.log(months)
    }
  }, []);

  useEffect(() => {
    const keys = Object.keys(months);
    setUserNames(keys);
  }, [months]);


  useEffect(() => {
    const keys = Object.keys(months);
    setUserNames(keys);
  }, [isDatePickerOpen]);

  return (
    <div className='w-1/3 h-full text-center flex flex-col'>
      <List 
        className='text-center'
        header={<Title className='font-medium'>{usePathname().replace('/', '')}</Title>}
        dataSource={[]}
        renderItem={(item) => (
          <List.Item>
            {/* <Button mark className='w-full' onClick={showModal}>{item}</Button> */}
            <MonthRow name={item}/>
          </List.Item>
        )}
      />
      <FloatButton type='primary' onClick={showDatePickerModal} icon={<UserAddOutlined />} className='w-[75px] h-[75px]'/>
      <Modal 
        title="Хэрэглэгч үүсгэх" 
        open={isDatePickerOpen}
        onCancel={handleDatePickerCancel}
        footer={<Button className='btn primary' onClick={handleDatePickerOk}>Үүсгэх</Button>}
      >
        <Form>
          <Form.Item label="Баримтын сарыг сонгоно уу: ">
            <DatePicker onChange={onChange} picker="month" className='w-full text-center'/>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Months;
