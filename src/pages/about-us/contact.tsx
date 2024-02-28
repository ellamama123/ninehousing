import React from "react";
import { Tabs, Image, Row, Col, Button, Form, Input, message } from "antd";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import axios from "axios";
import useTrans from '../../layout/useTrans'

const { TabPane } = Tabs;
const { TextArea } = Input;

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export default function Contact() {
  const [messageApi, contextHolder] = message.useMessage();
  const trans = useTrans()  

  const onFinish = (values: any) => {
    axios.post('https://web-developing.site/api/customer-contact', {
      "name": values.name,
      "email": values.email,
      "phone": values.phone,
      "subject": values.subject,
      "message": values.message,
    }).then((response) => {
      messageApi.success('Your contact has been sent.', 1);
    }).catch((error) => {
      messageApi.error(error.response.data.message, 1);

    });
  };

  return (
    <>
      {contextHolder}
      <h1 className="contact-location-title" style={{ margin: '30px 0', fontSize: '48px' }}>{trans.contact.location}</h1>
        <iframe src="https://www.google.com/maps/d/u/3/embed?mid=1YT1gyB8JWMM23tRdHdIHrz3AkBl99Ss&ehbc=2E312F" width="100%" height="500px"></iframe>
      <div style={{ marginTop: '50px'}}>
        <h1 className="contact-title" style={{ fontSize: '48px', width: '50%' }}>{trans.contact.desc}</h1>
        <div style={{ marginTop: '30px' }}>
          <Row>
            <Col lg={12} span={24}>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item<FieldType>
                  name="name"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input style={{ borderColor: '#3C3C3C'}} placeholder={trans.contact.name} />
                </Form.Item>

                <Form.Item<FieldType>
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input style={{ borderColor: '#3C3C3C'}} placeholder={trans.contact.email} />
                </Form.Item>

                <Form.Item<FieldType>
                  name="phone"
                  rules={[
                    { required: true, message: "Please input your phone!" },
                  ]}
                >
                  <Input style={{ borderColor: '#3C3C3C'}} placeholder={trans.contact.phone} />
                </Form.Item>

                <Form.Item<FieldType>
                  name="subject"
                >
                  <Input style={{ borderColor: '#3C3C3C'}} placeholder={trans.contact.subject} />
                </Form.Item>

                <Form.Item<FieldType>
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <TextArea style={{ borderColor: '#3C3C3C'}} placeholder={trans.contact.message} rows={4} />
                </Form.Item>

                <Form.Item>
                  <Button style={{width: '100%', backgroundColor: '#DEB25F', fontWeight: '600'}} type="primary" htmlType="submit">
                    {trans.contact.send}
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col lg={12} span={24}>
              <div
                style={{
                  backgroundColor: "black",
                  height: "max-content",
                  borderRadius: "5px",
                  color: "white",
                  padding: "20px 20px 100px",
                }}
              >
                <h4 style={{ fontSize: '24px'}}>{trans.contact.detail}</h4>
                <div style={{ marginTop: '5px' }}>
                  <div>
                    <Row style={{ marginTop: '10px' }}>
                      <Col span={2} style={{paddingTop: '7px'}}>
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 8H13M19 4H1M16 12H13M11 15C10.6218 13.2883 8.97467 12 7 12C5.03262 12 3.39034 13.2788 3.00424 14.9811M7 8H7.01M3.00424 14.9811C3.31776 15 3.70396 15 4.2 15H15.8C16.9201 15 17.4802 15 17.908 14.782C18.2843 14.5903 18.5903 14.2843 18.782 13.908C19 13.4802 19 12.9201 19 11.8V4.2C19 3.0799 19 2.51984 18.782 2.09202C18.5903 1.71569 18.2843 1.40973 17.908 1.21799C17.4802 1 16.9201 1 15.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2V11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.33038 14.9035 2.60979 14.9572 3.00424 14.9811ZM8 8C8 8.55228 7.55228 9 7 9C6.44772 9 6 8.55228 6 8C6 7.44772 6.44772 7 7 7C7.55228 7 8 7.44772 8 8Z"
                            stroke="white"
                            strokeWidth="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Col>
                      <Col span={20} >
                        <span style={{ fontSize: '18px' }}>
                        No 34/12 Dao Tan, Ba Dinh Dist, Ha Noi, Viet Nam
                        </span>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>
                      <Col span={2} style={{paddingTop: '7px'}}>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4L6.44992 7.63328C7.73295 8.48863 8.37446 8.91631 9.06785 9.08247C9.68061 9.22931 10.3194 9.22931 10.9322 9.08247C11.6255 8.91631 12.2671 8.48863 13.5501 7.63328L19 4M4.2 15H15.8C16.9201 15 17.4802 15 17.908 14.782C18.2843 14.5903 18.5903 14.2843 18.782 13.908C19 13.4802 19 12.9201 19 11.8V4.2C19 3.0799 19 2.51984 18.782 2.09202C18.5903 1.71569 18.2843 1.40973 17.908 1.21799C17.4802 1 16.9201 1 15.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2V11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.51984 15 3.07989 15 4.2 15Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </Col>
                      <Col span={20}>
                        <span style={{ fontSize: '18px' }}> 
                          ninehousing99@mail.com
                        </span>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>
                      <Col span={2} style={{paddingTop: '7px'}}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 3.5C19 12.0604 12.0604 19 3.5 19C3.11378 19 2.73086 18.9859 2.35172 18.9581C1.91662 18.9262 1.69906 18.9103 1.50103 18.7963C1.33701 18.7019 1.18146 18.5345 1.09925 18.364C1 18.1582 1 17.9181 1 17.438V14.6207C1 14.2169 1 14.015 1.06645 13.842C1.12515 13.6891 1.22049 13.553 1.3441 13.4456C1.48403 13.324 1.67376 13.255 2.05321 13.117L5.26005 11.9509C5.70153 11.7904 5.92227 11.7101 6.1317 11.7237C6.31637 11.7357 6.49408 11.7988 6.64506 11.9058C6.81628 12.0271 6.93713 12.2285 7.17882 12.6314L8 14C10.6499 12.7999 12.7981 10.6489 14 8L12.6314 7.17882C12.2285 6.93713 12.0271 6.81628 11.9058 6.64506C11.7988 6.49408 11.7357 6.31637 11.7237 6.1317C11.7101 5.92227 11.7904 5.70153 11.9509 5.26005L11.9509 5.26005L13.117 2.05321C13.255 1.67376 13.324 1.48403 13.4456 1.3441C13.553 1.22049 13.6891 1.12515 13.842 1.06645C14.015 1 14.2169 1 14.6207 1H17.438C17.9181 1 18.1582 1 18.364 1.09925C18.5345 1.18146 18.7019 1.33701 18.7963 1.50103C18.9103 1.69907 18.9262 1.91662 18.9581 2.35173C18.9859 2.73086 19 3.11378 19 3.5Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </Col>
                      <Col span={20}>
                        <span style={{ fontSize: '18px' }}>
                          0968.071.393
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
