import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import svSE from 'antd/lib/locale-provider/sv_SE';

import { Alert, Button, DatePicker, Popover, Popconfirm, Row, Col, Pagination, Form, Input } from 'antd';
import './App.less';

const FormItem = Form.Item;

class App extends Component {
  render() {
    return (
      <div className="app">
        <LocaleProvider locale={svSE}>
          <Row className="appear">
            <Col sm={{ span: 18, offset: 3 }} md={{ span: 16, offset: 4 }}>
              <Row className="t-center hero">
                <h1>Welcome to <i>Slant</i></h1>
                <br/>
                <p><i>Slant</i> is a slightly modified version of <a href="https://ant.design/">ant-design</a></p>
                <br/>
                <p>Below our modifications are listed, and the effect of the modifications can be previewed using the components.</p>
              </Row>
              <Row className="demo-section">
                <h2>Colors</h2>
                <p>We've altered the following colors:</p>
                <br/>
                <ul>
                  <li>
                    <code style={{ color: '#2f2f2f' }}>@primary-color: #2f2f2f</code>
                  </li>
                  <li>
                    <code style={{ color: '#555' }}>@font-color: #555</code>
                  </li>
                  <li>
                    <code style={{ color: '#3d85c6' }}>@link-color: #3d85c6</code>
                  </li>
                  <li>
                    <code style={{ color: '#68b1f3' }}>@link-hover-color: #68b1f3</code>
                  </li>
                  <li>
                    <code style={{ color: '#68b1f3' }}>@link-active-color: #68b1f3</code>
                  </li>
                </ul>
              </Row>
              <Row className="demo-section">
                <h2>Typography</h2>
                <div className="block-container">
                  <p><code>Open Sans</code> is used instead of the antd default font.</p>
                  <p>Headings are a slightly more dim color than paragraphs, illustrated below.</p>
                  <p>Paragraph</p>
                  <h6>heading 6</h6>
                  <h5>heading 5</h5>
                  <h4>heading 4</h4>
                  <h3>heading 3</h3>
                  <h2>heading 2</h2>
                  <h1>heading 1</h1>
                  <p>Optional classes exist to modify text:</p>
                  <code className="t-italic">t-italic</code>
                  <code className="t-bold">t-bold</code>
                  <code className="t-center">t-center</code>
                </div>
              </Row>
              <Row className="demo-section">
                <h2>Alerts</h2>
                <div className="block-container">
                  <p>Alerts have received changes to their borders to match our styling better.</p>
                  <Alert message="Success Tips" type="success" showIcon />
                  <Alert message="Informational Notes" type="info" showIcon />
                  <Alert message="Warning" type="warning" showIcon />
                  <Alert message="Error" type="error" showIcon />
                  <Alert
                    message="success tips"
                    description="Detailed description and advices about successful copywriting."
                    type="success"
                    showIcon
                  />
                  <Alert
                    message="Informational Notes"
                    description="Additional description and informations about copywriting."
                    type="info"
                    showIcon
                  />
                  <Alert
                    message="Warning"
                    description="This is a warning notice about copywriting."
                    type="warning"
                    showIcon
                  />
                  <Alert
                    message="Error"
                    description="This is an error message about copywriting."
                    type="error"
                    showIcon
                  />
                  <Alert message="Info Text" type="info" closeText="Close Now" />
                  <Alert message="Warning, closable" type="warning" closable />
                  <Alert message="Error, closable" description="You can close this error." type="error" closable />
                </div>
              </Row>
              <Row className="demo-section">
                <h2>Buttons</h2>
                <p>Buttons have received a slight box shadow, small buttons have 1px smaller font size.</p>
                <p>The default button has a more prominent border and text color.</p>
                <div className="block-container">
                  <Button type="primary">Here's an antd button</Button>
                  <Button size="large"><i>Here's a large antd button</i></Button>
                  <Button type="danger" size="small">A small antd button</Button>
                  <p>Loading animation:</p>
                  <Button type="primary" size="large" loading>Loading...</Button>
                  <Button type="default" size="large" loading>Loading...</Button>
                </div>
                <p>Ghost buttons:</p>
                <div className="inline-block-container" style={{ backgroundColor: '#f1f1ea', padding: '8px' }}>
                  <Button type="primary" ghost>Primary ghost</Button>
                  <span>&nbsp;</span>
                  <Button ghost>Default ghost</Button>
                  <span>&nbsp;</span>
                  <Button type="danger" ghost>Danger ghost</Button>
                </div>
              </Row>
              <Row className="demo-section">
                <h2>Input</h2>
                <p>No explicit changes are made to any input element, examples are listed for preview purposes.</p>
                <div className="inline-block-container">
                  <FormItem
                    label="Pick a date"
                  >
                    <DatePicker />
                  </FormItem>
                </div>
                <div className="block-container">
                  <FormItem
                    label="Validating"
                    hasFeedback
                    validateStatus="validating"
                    help="The information is being validated..."
                  >
                    <Input placeholder="I'm the content is being validated" id="validating" />
                  </FormItem>

                  <FormItem
                    label="Success"
                    hasFeedback
                    validateStatus="success"
                  >
                    <Input placeholder="I'm the content" id="success" />
                  </FormItem>

                  <FormItem
                    label="Warning"
                    hasFeedback
                    validateStatus="warning"
                  >
                    <Input placeholder="Warning" id="warning" />
                  </FormItem>

                  <FormItem
                    label="Fail"
                    hasFeedback
                    validateStatus="error"
                    help="Should be combination of numbers & alphabets"
                  >
                    <Input placeholder="unavailable choice" id="error" />
                  </FormItem>
                </div>
              </Row>
              <Row className="demo-section">
                <h2>Pagination</h2>
                <p>No changes, here for preview purposes</p>
                <div className="block-container">
                  <Pagination defaultCurrent={1} total={50} />
                  <Pagination size="small" total={50} />
                </div>
              </Row>
              <Row className="demo-section">
                <h2>Other components</h2>
                <p>No changes, here for preview purposes</p>
                <div className="inline-block-container">
                  <Popconfirm title="Are you sure?" okText="Yes, delete" cancelText="Cancel">
                    <a href="#delete">This is a link that deletes things</a>
                  </Popconfirm>
                  <span>&nbsp;</span>
                  <Popover content={<p>Beskrivande text</p>} title="Titel" trigger="click">
                    <Button type="default">Click me</Button>
                  </Popover>
                </div>
              </Row>
            </Col>
          </Row>
        </LocaleProvider>
      </div>
    );
  }
}

export default App;
