import React from 'react';
import { Card, Row, Col, Typography } from 'antd';

function Percentages(props) {

     const { Text, Title } = Typography;

     const convertToPercentage = (n) => {
          const percentage = n * 100;
          return `${percentage.toFixed(5)}%`;
     }

     const countUniqueSubstrings = (arr, n) => {
          const uniqueSubstrings = new Set();
        
          props.receipts.forEach((str) => {
            const lastNCharacters = str.slice(-n);
        
            uniqueSubstrings.add(lastNCharacters);
          });
        
          return uniqueSubstrings.size;
     }

     return (
     <Card title="Ялах Магадлал" className='mt-5'>
          <Row gutter={[16, 16]}>
               <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
                    <Card title="3 орон">
                         <Title level={5}>{props.receipts.length <= 10 ? "30,000₮" : props.receipts.length <= 50 ? "40,000₮" : "60,000₮"}</Title>
                         <Text>{convertToPercentage(countUniqueSubstrings(3) / (10 ** 3))}</Text>
                    </Card>
               </Col>
               <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
                    <Card title="4 орон">
                         <Title level={5}>{props.receipts.length <= 10 ? "40,000₮" : props.receipts.length <= 50 ? "60,000₮" : "100,000₮"}</Title>
                         <Text>{convertToPercentage(countUniqueSubstrings(4) / (10 ** 4))}</Text>
                    </Card>
               </Col>
               <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
                    <Card title="5 орон">
                         <Title level={5}>{props.receipts.length <= 10 ? "60,000₮" : props.receipts.length <= 50 ? "100,000₮" : "500,000₮"}</Title>
                         <Text>{convertToPercentage(countUniqueSubstrings(5) / (10 ** 5))}</Text>
                    </Card>
               </Col>
               <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
                    <Card title="6 орон">
                         <Title level={5}>{props.receipts.length <= 10 ? "100,000₮" : props.receipts.length <= 50 ? "500,000₮" : "5,000,000₮"}</Title>
                         <Text>{convertToPercentage(countUniqueSubstrings(6) / (10 ** 6))}</Text>
                    </Card>
               </Col>
               <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
                    <Card title="7 орон">
                         <Title level={5}>{props.receipts.length <= 10 ? "500,000₮" : props.receipts.length <= 50 ? "5,000,000₮" : "10,000,000₮"}</Title>
                         <Text>{convertToPercentage(countUniqueSubstrings(7) / (10 ** 7))}</Text>
                    </Card>
               </Col>
               <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
                    <Card title="8 орон">
                         <Title level={5}>{props.receipts.length <= 10 ? "5,000,000₮" : props.receipts.length <= 50 ? "10,000,000₮" : "30,000,000₮"}</Title>
                         <Text>{convertToPercentage(countUniqueSubstrings(8) / (10 ** 8))}</Text>
                    </Card>
               </Col>
          </Row>
     </Card>
     )
}

export default Percentages;