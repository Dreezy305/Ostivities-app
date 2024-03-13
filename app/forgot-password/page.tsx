import AuthLayout from '@/app/components/AuthLayout/AuthLayout';
import ForgotPasswordForm from '@/app/components/forms/ForgotPasswordForm';
import { Heading3, Paragraph } from '@/app/components/typography/Typography';
import { Space } from 'antd';
import React from 'react';

function ForgotPassword() {
  return (
    <AuthLayout>
      <div className="w-4/5 mx-auto flex flex-col space-y-8 pt-48">
        <Space direction="vertical" size={'small'} className="w-5/6">
          <Heading3 content={'Forgot Password'} className="" />
          <Paragraph
            content="Please provide the email address associated with your account, and we will send you instructions on how to reset your password."
            className=""
          />
        </Space>
        <ForgotPasswordForm />
      </div>
    </AuthLayout>
  );
}

export default ForgotPassword;
