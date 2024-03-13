'use client';
import { Button, Form, Input } from 'antd';
import React from 'react';

function PasswordResetForm(): JSX.Element {
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
        label="Enter reset code"
        style={{ fontFamily: 'BricolageGrotesqueRegular' }}
        className="font-BricolageGrotesqueRegular"
      >
        <Form.Item
          name="resetcode"
          label="Reset Code"
          noStyle
          rules={[{ required: true, message: 'Please input reset code' }]}
        >
          <Input
            placeholder="Enter your code"
            className="placeholder:font-BricolageGrotesqueRegular"
          />
        </Form.Item>
      </Form.Item>

      <Form.Item
        label="New Password"
        name="password"
        hasFeedback
        rules={[{ required: true, message: 'Please input your password' }]}
      >
        <Input.Password
          placeholder="Enter your password"
          className="placeholder:font-BricolageGrotesqueRegular"
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Re-enter Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The new password that you entered do not match!')
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Re-enter your password"
          className="placeholder:font-BricolageGrotesqueRegular"
        />
      </Form.Item>

      <Form.Item>
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
        >
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  );
}

export default PasswordResetForm;
