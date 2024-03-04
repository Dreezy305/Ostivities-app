"use client";
import { Small } from "@/app/components//typography/Typography";
import Auth from "@/app/utils/Auth";
import { ACCOUNT_TYPE } from "@/app/utils/enums";
import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";

function CreateAccount(): JSX.Element {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [val, setval] = useState<string>("");

  const onFinish = (value: object) => {
    console.log(value);
  };
  console.log(val);

  return (
    <Form
      name="validateOnly"
      layout="vertical"
      onFinish={onFinish}
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
            <span className="font-BricolageGrotesqueLight text-OWANBE_INFO">
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
          //@ts-ignore
          getValueProps={(value: any) => setval(value)}
        >
          <Select placeholder="Select">
            <Option value={ACCOUNT_TYPE.PERSONAL}>Personal</Option>
            <Option value={ACCOUNT_TYPE.ORGANISATION}>Organization</Option>
          </Select>
        </Form.Item>
      </Form.Item>

      {val === "ORGANISATION" ? (
        <Form.Item
          label="Registered Business Name"
          style={{ fontFamily: "BricolageGrotesqueRegular" }}
          className="font-BricolageGrotesqueRegular !mt-3"
        >
          <Form.Item
            noStyle
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input
              type="email"
              placeholder="Enter your email"
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
              className="font-BricolageGrotesqueRegular !mt-3"
            >
              <Form.Item
                name="firstname"
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
              name="lastname"
              label="Last Name"
              style={{ fontFamily: "BricolageGrotesqueRegular" }}
              className="font-BricolageGrotesqueRegular !mt-3"
            >
              <Form.Item
                name="lastname"
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
            name="confirm"
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
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
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
        </Col>
      </Row>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={
          [
            // {
            //   validator: (_, value) =>
            //     value
            //       ? Promise.resolve()
            //       : Promise.reject(new Error("Should accept agreement")),
            // },
          ]
        }
      >
        <Checkbox>
          Accept our{" "}
          <a href="" className="text-OWANBE_PRY underline">
            terms and condition
          </a>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="font-BricolageGrotesqueLight text-base"
          style={{
            background: "#E20000",
            borderRadius: "20px",
            width: "100%",
            height: "51px",
          }}
        >
          Sign Up
        </Button>
      </Form.Item>

      <div className="mx-auto flex flex-col space-y-5 mt-4 mb-5">
        <Small
          content="or sign up with"
          className="font-BricolageGrotesqueRegular text-sm text-center"
        />

        <Auth />
      </div>
    </Form>
  );
}

export default CreateAccount;
