import { Col, Layout, Row } from 'antd';
import './App.css';
import { Head } from './Head/Head';
import Title from 'antd/lib/typography/Title';
import { Shoes } from './Shoes/Shoes';

const { Footer, Content } = Layout;

export function App() {
  return (
    <Layout className="container">
      <Head />
      <Content>
        <Row>
          <Col span={6}>
            <Title>Nike Air Edge 270</Title>
            <Title level={2}>
              The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens.
            </Title>
          </Col>
          <Col span={18}>
            <Shoes />
          </Col>
        </Row>
        ,
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
