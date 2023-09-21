import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button, FloatButton, List, Form, DatePicker, Modal, Typography } from 'antd';
import type { DatePickerProps } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { MonthRow } from './';


const { Title } = Typography;

function Months() {
  const [months, setMonths] = useState<{ [key: string]: any }>({});
  const [monthNames, setMonthNames] = useState<string[]>([]);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [date, setDate] = useState('');

  const path = usePathname().replace('/', '');

  const onChange: DatePickerProps['onChange'] = (dateTemp, dateString) => {
    setDate(dateString);
  }

  const showDatePickerModal = () => {
    setDatePickerOpen(true);
  }

  const handleDatePickerOk = () => {
    const cachedJson = localStorage.getItem('elottery') || '{}';
    let newJson = JSON.parse(cachedJson);

    if(newJson[path].months[date] != null) {
    } else {
      newJson[path].months.push({
        month: date,
        receipts: []
      })
    }

    localStorage.setItem('elottery', JSON.stringify(newJson));
    window.location.reload();
    setDatePickerOpen(false);
  };

  const handleDatePickerCancel = () => {
    setDatePickerOpen(false);
  };

  useEffect(() => {
    const cachedJson: { [key: string]: any } = JSON.parse(localStorage.getItem('elottery') || '{}');
    
    if (cachedJson[path].months != null) {
      setMonths(cachedJson[path].months)
    }
  }, []);

  useEffect(() => {
    if (months != null) {
      const updatedMonthNames = Object.keys(months).map((key) => months[key].month);
      setMonthNames(updatedMonthNames);
    }
  }, [months]);


  useEffect(() => {
    if (months != null) {
      const updatedMonthNames = Object.keys(months).map((key) => months[key].month);
      setMonthNames(updatedMonthNames);
    }
  }, [isDatePickerOpen]);

  return (
    <div className='w-1/3 h-full text-center flex flex-col'>
      <List 
        className='text-center'
        header={<Title className='font-medium'>{path.replace('/', '')}</Title>}
        dataSource={monthNames}
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
