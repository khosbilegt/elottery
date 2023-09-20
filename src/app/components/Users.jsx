import React, { useEffect, useState } from 'react';
import { Button, FloatButton, List, Form, Input, Modal, Typography } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { UserRow } from './';

const { Title } = Typography;

function Users() {
  const [users, setUsers] = useState({});
  const [userNames, setUserNames] = useState([]);
  const [isUserCreateOpen, setUserCreateOpen] = useState(false);
  const [username, setUsername] = useState('');

  const setName = (e) => {
     setUsername(e.target.value);
  }

  const showUserCreateModal = () => {
    setUserCreateOpen(true);
  }

  const handleUserCreateOk = () => {
    const cachedJson = localStorage.getItem('elottery') || '{}';
    let newJson = JSON.parse(cachedJson);
    if(cachedJson) {
        newJson[username] = {};
    } else {
        newJson = {
              [username]: {}
        };
    }
    localStorage.setItem('elottery', JSON.stringify(newJson));
    window.location.reload();
    setUserCreateOpen(false);
  };

  const handleUserCreateCancel = () => {
    setUserCreateOpen(false);
  };

  useEffect(() => {
    const cachedJson = localStorage.getItem('elottery');
    if(cachedJson) {
      setUsers(JSON.parse(cachedJson));
    }
    console.log(cachedJson);
  }, []);

  useEffect(() => {
    const keys = Object.keys(users);
    setUserNames(keys);
  }, [users]);


  useEffect(() => {
    const keys = Object.keys(users);
    setUserNames(keys);
  }, [isUserCreateOpen]);

  return (
    <div className='w-1/3 h-full text-center flex flex-col'>
      <List 
        className='text-center'
        header={<Title className='font-medium'>Хэрэглэгчид</Title>}
        dataSource={userNames}
        renderItem={(item) => (
          <List.Item>
            {/* <Button mark className='w-full' onClick={showModal}>{item}</Button> */}
            <UserRow name={item}/>
          </List.Item>
        )}
      />
      <FloatButton type='primary' onClick={showUserCreateModal} icon={<UserAddOutlined />} className='w-[75px] h-[75px]'/>
      <Modal 
        title="Хэрэглэгч үүсгэх" 
        open={isUserCreateOpen}
        onCancel={handleUserCreateCancel}
        footer={<Button className='btn primary' onClick={handleUserCreateOk}>Үүсгэх</Button>}
      >
        <Form className='flex flex-col justify-center'>
            <Form.Item
                  label='Нэр:'
                  name='name'>
                  <Input placeholder='Бат' onChange={setName}/>
            </Form.Item>
         </Form>
      </Modal>
    </div>
  )
}

export default Users;