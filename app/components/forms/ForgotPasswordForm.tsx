'use client';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

function ForgotPasswordForm(): JSX.Element {
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = (value: object) => {
    console.log(value);
  };
  return (
    <Form
      name="validateOnly"
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      form={form}
      className="w-full font-BricolageGrotesqueRegular flex flex-col"
      style={{ fontFamily: 'BricolageGrotesqueRegular' }}
    >
      <Form.Item
        label="Email Address"
        style={{ fontFamily: 'BricolageGrotesqueRegular' }}
        className="font-BricolageGrotesqueRegular"
      >
        <Form.Item
          noStyle
          rules={[{ required: true, message: 'Please input your email' }]}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="placeholder:font-BricolageGrotesqueRegular"
          />
        </Form.Item>
      </Form.Item>

      <div className="flex flex-row items-center justify-between">
        <div
          onClick={() => router.back()}
          className="flex-center gap-2 cursor-pointer font-BricolageGrotesqueRegular font-normal text-OWANBE_LIGHT_DARK"
        >
          <ArrowLeftOutlined /> <span>I remember my password</span>
        </div>

        <Button
          type="text"
          className="text-OWANBE_PRY  hover:text-OWANBE_PRY  font-BricolageGrotesqueSemiBold font-semibold cursor-pointer"
          style={{ color: '#e20000' }}
        >
          Re-send Code
        </Button>
      </div>

      <Form.Item style={{ marginTop: '20px' }}>
        <Button
          type="primary"
          htmlType="submit"
          className="font-BricolageGrotesqueLight text-base"
          style={{
            background: '#E20000',
            borderRadius: '20px',
            width: '100%',
            height: '51px',
          }}
          onClick={() => router.push('/password-reset')}
        >
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ForgotPasswordForm;
