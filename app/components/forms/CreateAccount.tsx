"use client";
import { useRegister } from "@/app/hooks/auth/auth.hook";
import { ACCOUNT_TYPE } from "@/app/utils/enums";
import { IUser } from "@/app/utils/interface";
import {
  Button,
  Checkbox,
  Col,
  Form,
  FormProps,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function CreateAccount(): JSX.Element {
  const router = useRouter();
  const { registerUser } = useRegister();
  const [form] = Form.useForm();
  const { Option } = Select;
  const [val, setval] = useState<string>("");

  const accountType: string = Form.useWatch("event", form);

  const onFinish: FormProps<IUser>["onFinish"] = async (values) => {
    if (values) {
      const response = await registerUser.mutateAsync(values);
      if (response.status === 201) {
        form.resetFields();
        router.push("/login");
      }
    }
  };

  const onFinishFailed: FormProps<IUser>["onFinishFailed"] = (errorInfo) => {
    return errorInfo;
  };

  return (
    <Form
      name="validateOnly"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
      className="w-full font-BricolageGrotesqueRegular flex flex-col"
      style={{ fontFamily: "BricolageGrotesqueRegular" }}
    >
      <Form.Item
        label="Choose an Account Type"
        style={{ fontFamily: "BricolageGrotesqueRegular" }}
        className="font-BricolageGrotesqueRegular"
        help={
          !val ? null : (
            <span className="font-BricolageGrotesqueLight text-OWANBE_PRY">
              {val === ACCOUNT_TYPE.PERSONAL
                ? "Are you an individual looking to sell tickets? This account type is tailored for you."
                : "Are you a registered business looking to sell tickets? This account type is tailored for you."}
            </span>
          )
        }
      >
        <Form.Item
          name="accountType"
          noStyle
          rules={[
            {
              required: true,
              message: "Please select an account type",
            },
          ]}
        >
          <Select placeholder="Select" onChange={(e)=>{setval(e)}}>
            <Option value={ACCOUNT_TYPE.PERSONAL}>Personal</Option>
            <Option value={ACCOUNT_TYPE.ORGANISATION}>Organization</Option>
          </Select>
        </Form.Item>
      </Form.Item>

      {val === ACCOUNT_TYPE.ORGANISATION ? (
        <Form.Item
          label="Business Name"
          style={{ fontFamily: "BricolageGrotesqueRegular" }}
          className="font-BricolageGrotesqueRegular !mt-3"
        >
          <Form.Item
            name="businessName"
            label="Business Name"
            noStyle
            rules={[
              { required: true, message: "Please input your Business Name" },
            ]}
          >
            <Input
              type="text"
              placeholder="Enter your Business Name"
              className="placeholder:font-BricolageGrotesqueRegular"
            />
          </Form.Item>
        </Form.Item>
      ) : (
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              label="First Name"
              style={{ fontFamily: "BricolageGrotesqueRegular" }}
              className="font-BricolageGrotesqueRegular"
            >
              <Form.Item
                name="firstName"
                label="First Name"
                noStyle
                rules={[{ required: true, message: "Please input first name" }]}
              >
                <Input
                  placeholder="Enter your first name "
                  className="placeholder:font-BricolageGrotesqueRegular"
                />
              </Form.Item>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Last Name"
              style={{ fontFamily: "BricolageGrotesqueRegular" }}
              className="font-BricolageGrotesqueRegular"
            >
              <Form.Item
                name="lastName"
                label="Last Name"
                noStyle
                rules={[{ required: true, message: "Please input last name" }]}
              >
                <Input
                  placeholder="Enter your last name"
                  className="placeholder:font-BricolageGrotesqueRegular"
                />
              </Form.Item>
            </Form.Item>
          </Col>
        </Row>
      )}

      <Form.Item
        label="Email Address"
        style={{ fontFamily: "BricolageGrotesqueRegular" }}
        className="font-BricolageGrotesqueRegular"
      >
        <Form.Item
          noStyle
          name="email"
          rules={[{ required: true, message: "Please input your email" }]}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="placeholder:font-BricolageGrotesqueRegular"
          />
        </Form.Item>
      </Form.Item>

      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            label="Password"
            name="password"
            hasFeedback
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              className="placeholder:font-BricolageGrotesqueRegular"
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Re-enter your password"
              className="placeholder:font-BricolageGrotesqueRegular"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* <label htmlFor="terms" className="flex-center gap-2 cursor-pointer">
        <div>
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="cursor-pointer mt-0"
          />
        </div>
        <span className="font-BricolageGrotesqueRegular font-normal text-OWANBE_LIGHT_DARK">
          Accept our{" "}
          <a href="" className="text-OWANBE_PRY underline">
            terms and condition
          </a>
        </span>
      </label> */}
      <Form.Item
        name="remember"
        valuePropName="checked"
        rules={[
          { required: true, message: "Please read the Terms and Conditions" },
        ]}
      >
        <Checkbox>Terms and Conditions</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="font-BricolageGrotesqueLight text-base mt-5"
          style={{
            background: "#E20000",
            borderRadius: "20px",
            width: "100%",
            height: "51px",
          }}
          loading={registerUser.isPending}
        >
          Sign Up
        </Button>
      </Form.Item>

      {/* <div className="mx-auto flex flex-col space-y-5 mt-4 mb-5">
        <Small
          content="or sign up with"
          className="font-BricolageGrotesqueRegular text-sm text-center"
        />

        <Auth />
      </div> */}
    </Form>
  );
}

export default CreateAccount;
