'use client';

import DashboardLayout from '@/app/components/DashboardLayout/DashboardLayout';
import Summary from '@/app/components/Discovery/Summary';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Form, Input, Select, Row, Col } from 'antd';
import { useState } from 'react';
import "@/app/globals.css";
import { Heading5 } from '@/app/components/typography/Typography';

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  phoneNumber: string;
  additionalField1: string;
  additionalField2: string;
  additionalField3: string;
}

const ContactForm = () => {
  const router = useRouter();
  const title = (
    <div className="flex-center gap-2">
      <Image
        src="/icons/back-arrow.svg"
        alt=""
        height={25}
        width={25}
        onClick={() => router.back()}
        className="cursor-pointer"
      />
      <h1 style={{ fontSize: '24px' }}>Contact Information</h1>
    </div>
  );

  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);

  const onFinish = (values: Inputs) => {
    console.log(values);
  };

  const validateForm = async () => {
    try {
      await form.validateFields();
      setIsFormValid(true);
    } catch (error) {
      setIsFormValid(false);
    }
  };

  return (
    <DashboardLayout title={title} isLoggedIn>
      <section className="flex gap-12">
        <section className="flex-1 pr-1">
          <div className="flex-center justify-between">
            <div className="flex-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-OWANBE_PRY/10 flex-center justify-center">
                <Image
                  src="/icons/calendar.svg"
                  alt=""
                  height={25}
                  width={25}
                />
              </div>
              <div>
                <h3 className="text-sm"style={{ fontWeight: 600 }}>Date</h3> 
                <span>14 December, 2023</span>
              </div>
            </div>
            <div className="flex-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-OWANBE_PRY/10 flex-center justify-center">
                <Image src="/icons/time.svg" alt="" height={25} width={25} />
              </div>
              <div>
                <h3 className="text-sm"style={{ fontWeight: 600 }}>Time</h3>
                <span>5:00PM - 10:00PM WAT</span>
              </div>
            </div>
          </div>
          <div className="pr-full mt-16">
          <h3 className="text-OWANBE_FADE text-md font-BricolageGrotesqueRegular my-4">
          Please fill out the form with your information so we can send you your ticket.</h3>
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              className="form-spacing"
              onValuesChange={validateForm}
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please provide your first name' }]}
                  >
                    <Input placeholder="Enter First Name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please provide your last name' }]}
                  >
                    <Input placeholder="Enter Last Name" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: 'Please provide your email' }]}
              >
                <Input type="email" placeholder="Enter Email Address" />
              </Form.Item>
              <Form.Item
                label="Confirm Email"
                name="confirmEmail"
                rules={[{ required: true, message: 'Please confirm your email' }]}
              >
                <Input type="email" placeholder="Confirm Email Address" />
              </Form.Item>
              <Form.Item 
                label="Phone Number"
                name="phoneNumber"
                rules={[{ required: true, message: 'Please provide your phone number' }]}
              >
                <Input
                  addonBefore={
                    <Select defaultValue="234">
                      {Array.from({ length: 1 }, (_, index) => (
                        <Select.Option key={index} value={`23${index + 4}`}>
                          +23{index + 4}
                        </Select.Option>
                      ))}
                    </Select>
                  }
                  placeholder="Enter Phone Number"
                />
              </Form.Item>

              <Heading5 className="pt-10 pb-5" content={"Additional Informations"} />

              <Form.Item
                label="Info 1"
                name="Info 1"
                rules={[{ required: true, message: 'Please provide additional information' }]}
              >
                <Input placeholder="Enter Additional Information 1" />
              </Form.Item>
              <Form.Item
                label="Info 2"
                name="Info 2"
                rules={[{ required: true, message: 'Please provide additional information' }]}
              >
                <Input placeholder="Enter Additional Information 2" />
              </Form.Item>
            </Form>
          </div>
        </section>
        <Summary continueBtn to={"/Dashboard/payment"} />
      </section>
    </DashboardLayout>
  );
};

export default ContactForm;
