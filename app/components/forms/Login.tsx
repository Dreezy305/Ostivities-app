'use client';
import { Small } from '@/app/components/typography/Typography';
import Auth from '@/app/utils/Auth';
import { Button, Form, Input, Space, Switch } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

function LoginForm(): JSX.Element {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = (value: any) => {
    console.log(value, 'value');
    if (value?.email && value?.password) {
      router.push('/Dashboard');
    }
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
          name={'email'}
          noStyle
          rules={[{ required: true, message: 'Please input your email' }]}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="placeholder:font-BricolageGrotesqueRegular"
            autoComplete="off"
          />
        </Form.Item>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        hasFeedback
        rules={[{ required: true, message: 'Please input your password' }]}
      >
        <Input.Password
          placeholder="Enter your password"
          className="placeholder:font-BricolageGrotesqueRegular"
        />
      </Form.Item>
      <Form.Item name="remember">
        <div className="flex flex-row items-center justify-between">
          <Form.Item
            label="Remember me"
            name="remember"
            valuePropName="checked"
            noStyle
            rules={[{ required: false }]}
          >
            <Space direction="horizontal" size={'small'} align="baseline">
              <input type="checkbox" name="" className="cursor-pointer" />
              <span className="font-BricolageGrotesqueRegular font-normal text-OWANBE_LIGHT_DARK">
                Remember me
              </span>
            </Space>
          </Form.Item>

          <Link
            className="text-OWANBE_PRY underline hover:text-OWANBE_PRY hover:underline font-BricolageGrotesqueSemiBold font-semibold"
            href="/forgot-password"
          >
            Forgot password?
          </Link>
        </div>
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
          Sign In
        </Button>
      </Form.Item>

      <div className="mx-auto flex flex-col space-y-5 mt-4 mb-5">
        <Small
          content="or sign in with"
          className="font-BricolageGrotesqueRegular text-sm text-center"
        />

        <Auth />
      </div>
    </Form>
  );
}

export default LoginForm;
