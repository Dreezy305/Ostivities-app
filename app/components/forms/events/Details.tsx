"use client";
import {
  Heading5,
  Label,
  Paragraph,
} from "@/app/components/typography/Typography";
import { EVENT_TYPES, STATES_IN_NIGERIA, stepOne } from "@/app/utils/data";
import { EVENT_INFO } from "@/app/utils/enums";
import { IFormInput } from "@/app/utils/interface";
import { UploadOutlined } from "@ant-design/icons";
// import { schema } from "@/app/utils/validations";
// import { yupResolver } from "@hookform/resolvers/yup";
import Dropzone from "@/app/components/Dropzone/Dropzone";
import EventTicketTable from "@/app/components/Tables/EventTicket";
import AddTicketModal from "@/app/components/modal/AddTicket";
import { useFormContext } from "@/app/contexts/form-context/FormContext";
import Ticket from "@/public/Ticket.svg";
import { Button, DatePicker, Input, Radio, Select, Space, Upload } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

function Details(): JSX.Element {
  const router = useRouter();
  const { formState, setFormStage } = useFormContext();
  const [formStep, setFormStep] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { Option } = Select;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    trigger,
  } = useForm<IFormInput>({
    // resolver: yupResolver(schema),
    progressive: true,
    mode: "all",
  });
  const watchEventInfo = watch("eventInfo");

  useEffect(() => {
    const subscription: any = watch((value, { name, type }) =>
      //   console.log(value, name, type)
      {
        return;
      }
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    console.log(data, "data");
  };

  const nextStep = async () => {
    // @ts-ignore
    const output = await trigger([...stepOne], { shouldFocus: true });
    if (!output) return;

    if (formStep === 1 || formStep === 2) {
      await handleSubmit(onSubmit)();
      setFormStep((step) => step + 1);
      setFormStage(formState.stage + 1);
    }
  };

  return (
    <Fragment>
      <AddTicketModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
      />
      <div className="flex flex-row justify-between">
        <Space direction="vertical">
          <Heading5
            className=""
            content={
              formStep === 1
                ? "Hello, Rose"
                : formStep === 2
                ? "Event Image"
                : "Event Ticket"
            }
          />
          <Paragraph
            className="text-OWANBE_PRY text-xl font-normal font-BricolageGrotesqueRegular"
            content={
              formStep === 1
                ? "Lets get you started by creating your event."
                : formStep === 2
                ? "Upload the image that will appear on your event page here."
                : "Ostivities is free for free events. For paid events, we charge a transaction fee."
            }
            styles={{ fontWeight: "normal !important" }}
          />
        </Space>
        {formState.stage > 0 && (
          <Button
            type="default"
            size={"large"}
            className={`font-BricolageGrotesqueSemiBold button-style sign-in cursor-pointer font-bold`}
            onClick={() => {
              setFormStep(1);
              setFormStage(formState.stage - 1);
            }}
          >
            Back
          </Button>
        )}
      </div>
      {formState.stage === 3 ? (
        <div className="w-full flex flex-col space-y-7">
          <Button
            type="primary"
            htmlType="button"
            size="large"
            className="font-BricolageGrotesqueSemiBold sign-up cursor-pointer font-bold button-styles float-right place-self-end"
          >
            Add ticket
          </Button>
          <EventTicketTable />
          <Space className="flex flex-row justify-center space-x-4">
            <Button
              type="default"
              size={"large"}
              className={`font-BricolageGrotesqueSemiBold button-styles sign-in cursor-pointer font-bold`}
              onClick={() => {
                setFormStage(formState.stage - 1);
              }}
            >
              Back
            </Button>
            <Button
              type="primary"
              htmlType="button"
              size="large"
              className="font-BricolageGrotesqueSemiBold  continue cursor-pointer font-bold"
              onClick={() => router.push("/publish-events")}
            >
              Publish Event
            </Button>
          </Space>
        </div>
      ) : (
        <Fragment>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-8 pb-5"
          >
            {/* STEP 1 --> BODY 1 */}
            {formState.stage === 0 && (
              <div className="grid grid-cols-2 gap-x-4">
                <div className="flex flex-col space-y-4 pr-6">
                  <Controller
                    name="eventName"
                    control={control}
                    render={({ field }) => (
                      <Space direction="vertical" size={"small"}>
                        <Label
                          content="Event Name"
                          className=""
                          htmlFor="eventName"
                        />
                        <Input {...field} placeholder="Enter Event Name" />
                      </Space>
                    )}
                  />

                  <Controller
                    name="eventDetails"
                    control={control}
                    render={({ field }) => (
                      <Space direction="vertical" size={"small"}>
                        <Label
                          content="Event Details"
                          className=""
                          htmlFor="eventName"
                        />
                        <Input.TextArea
                          {...field}
                          placeholder="Enter Event Details"
                          style={{
                            height: "200px !important",
                            paddingTop: "10px !important",
                          }}
                          className="py-3"
                        />
                      </Space>
                    )}
                  />

                  <Controller
                    name="eventState"
                    control={control}
                    render={({ field }) => (
                      <Space
                        direction="vertical"
                        size={"small"}
                        className="w-full"
                      >
                        <Label
                          content="Event State"
                          className=""
                          htmlFor="eventName"
                        />
                        <Select
                          placeholder="Select State"
                          {...field}
                          style={{ width: "100%" }}
                        >
                          {STATES_IN_NIGERIA.map((_i) => (
                            <Option value={_i.state} key={_i.state}>
                              {_i.state}
                            </Option>
                          ))}
                        </Select>
                      </Space>
                    )}
                  />

                  <Controller
                    name="eventAddress"
                    control={control}
                    render={({ field }) => (
                      <Space direction="vertical" size={"small"}>
                        <Label
                          content="Event Address"
                          className=""
                          htmlFor="eventName"
                        />
                        <Input {...field} placeholder="Enter Address" />
                      </Space>
                    )}
                  />
                </div>

                <div className="flex flex-col space-y-4 pl-6">
                  <Controller
                    name="customURL"
                    control={control}
                    render={({ field }) => (
                      <Space direction="vertical" size={"small"}>
                        <Label
                          content="Custom URL"
                          className=""
                          htmlFor="eventName"
                        />

                        <Space.Compact className="w-full">
                          <Input
                            style={{
                              width: "48%",
                              borderTopRightRadius: "0px !important",
                              borderBottomRightRadius: "0px !important",
                            }}
                            defaultValue={"https://ostivities.com/discover"}
                            value={"https://ostivities.com/discover"}
                            readOnly
                          />
                          <Input
                            style={{
                              width: "52%",
                              borderTopLeftRadius: "0px !important",
                              borderBottomLeftRadius: "0px !important",
                            }}
                            {...field}
                            placeholder=""
                          />
                        </Space.Compact>
                      </Space>
                    )}
                  />

                  <Controller
                    name="document"
                    control={control}
                    render={({ field }) => (
                      <Space direction="vertical" size={"small"}>
                        <Label content="Upload Supporting Doc" htmlFor="eventName" />

                        <Space.Compact className="w-full h-11">
                          <Input
                            style={{
                              width: "75%",
                              borderTopRightRadius: "0px !important",
                              borderBottomRightRadius: "0px !important",
                            }}
                            placeholder="Enter file name (optional)"
                          />
                          <Upload
                            style={{ height: "41px !important", width: "60%" }}
                            className="upload-button"
                          >
                            <Button icon={<UploadOutlined />}>
                              Click to Upload
                            </Button>
                          </Upload>
                        </Space.Compact>
                        <span className="font-BricolageGrotesqueLight text-OWANBE_PRY text-xs font-light">
                          *Supporting doc can be Wedding Card, Birthday Card among many others.
                          *Only JPEG, PNG & PDF Allowed and file size should not be more than 10MB.
                        </span>
                      </Space>
                    )}
                  />

                  <Controller
                    name="eventType"
                    control={control}
                    render={({ field }) => (
                      <Space
                        direction="vertical"
                        size={"small"}
                        className="w-full"
                      >
                        <Label
                          content="Event Type"
                          className=""
                          htmlFor="eventType"
                        />
                        <Select
                  defaultValue="Select event type"
                  className="w-full"
                  placeholder="Select Event Type"
                          {...field}
                          style={{ width: "100%" }}
                          
                 
                  options={[
                    ...EVENT_TYPES
                  ]}
                />
                        
                      </Space>
                    )}
                  />

                  <Controller
                    name="eventInfo"
                    control={control}
                    render={({ field }) => (
                      <Space
                        direction="vertical"
                        size={"small"}
                        className="w-full"
                      >
                        <Label
                          content="Event Info"
                          className=""
                          htmlFor="eventType"
                        />
                        <Radio.Group
                          {...field}
                          className="w-full font-BricolageGrotesqueRegular"
                        >
                          <Radio
                            value={EVENT_INFO.SINGLE_EVENT}
                            className="w-1/2 font-BricolageGrotesqueRegular"
                          >
                            Single Event
                          </Radio>
                          <Radio
                            value={EVENT_INFO.RECURRING_EVENT}
                            className="font-BricolageGrotesqueRegular"
                          >
                            Recurring Event
                          </Radio>
                        </Radio.Group>
                      </Space>
                    )}
                  />

                  {watchEventInfo === EVENT_INFO.SINGLE_EVENT && (
                    <>
                      <Controller
                        name="timeZone"
                        control={control}
                        render={({ field }) => (
                          <Space
                            direction="vertical"
                            size={"small"}
                            className="w-full"
                          >
                            <Label
                              content="Time Zone"
                              className=""
                              htmlFor="eventType"
                            />
                            <Select
                              placeholder="Select Event Type"
                              {...field}
                              style={{ width: "100%" }}
                            >
                              {STATES_IN_NIGERIA.map((_i) => (
                                <Option value={_i.state} key={_i.state}>
                                  {_i.state}
                                </Option>
                              ))}
                            </Select>
                          </Space>
                        )}
                      />
                      <Controller
                        name="startDateAndTime"
                        control={control}
                        render={({ field }) => (
                          <Space
                            direction="vertical"
                            size={"small"}
                            className="w-full"
                          >
                            <Label
                              content="Start Date & Time"
                              className=""
                              htmlFor="eventType"
                            />
                            <DatePicker
                              {...field}
                              showTime
                              format="YYYY-MM-DD HH:mm:ss"
                              className="w-full"
                            />
                          </Space>
                        )}
                      />

                      <Controller
                        name="endDateAndTime"
                        control={control}
                        render={({ field }) => (
                          <Space
                            direction="vertical"
                            size={"small"}
                            className="w-full"
                          >
                            <Label
                              content="End Date & Time"
                              className=""
                              htmlFor="eventType"
                            />
                            <DatePicker
                              {...field}
                              showTime
                              format="YYYY-MM-DD HH:mm:ss"
                              className="w-full"
                            />
                          </Space>
                        )}
                      />
                    </>
                  )}

                  {watchEventInfo === EVENT_INFO.RECURRING_EVENT && (
                    <>
                      <Controller
                        name="timeZone"
                        control={control}
                        render={({ field }) => (
                          <Space
                            direction="vertical"
                            size={"small"}
                            className="w-full"
                          >
                            <Label
                              content="Time Zone"
                              className=""
                              htmlFor="eventType"
                            />
                            <Select
                              placeholder="Select Event Type"
                              {...field}
                              style={{ width: "100%" }}
                            >
                              {STATES_IN_NIGERIA.map((_i) => (
                                <Option value={_i.state} key={_i.state}>
                                  {_i.state}
                                </Option>
                              ))}
                            </Select>
                          </Space>
                        )}
                      />
                      <Controller
                        name="eventFrequency"
                        control={control}
                        render={({ field }) => (
                          <Space
                            direction="vertical"
                            size={"small"}
                            className="w-full"
                          >
                            <Label
                              content="Frequency"
                              className=""
                              htmlFor="eventType"
                            />
                            <Select
                              placeholder="Select Event Frequency"
                              {...field}
                              style={{ width: "100%" }}
                            >
                              {STATES_IN_NIGERIA.map((_i) => (
                                <Option value={_i.state} key={_i.state}>
                                  {_i.state}
                                </Option>
                              ))}
                            </Select>
                          </Space>
                        )}
                      />

                      <Controller
                        name="startDateAndTime"
                        control={control}
                        render={({ field }) => (
                          <Space
                            direction="vertical"
                            size={"small"}
                            className="w-full"
                          >
                            <Label
                              content="Start Date & Time"
                              className=""
                              htmlFor="eventType"
                            />
                            <DatePicker
                              {...field}
                              showTime
                              format="YYYY-MM-DD HH:mm:ss"
                              className="w-full"
                            />
                          </Space>
                        )}
                      />

                      <Controller
                        name="endDateAndTime"
                        control={control}
                        render={({ field }) => (
                          <Space
                            direction="vertical"
                            size={"small"}
                            className="w-full"
                          >
                            <Label
                              content="End Date & Time"
                              className=""
                              htmlFor="eventType"
                            />
                            <DatePicker
                              {...field}
                              showTime
                              format="YYYY-MM-DD HH:mm:ss"
                              className="w-full"
                            />
                          </Space>
                        )}
                      />
                    </>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2 --> BODY 2 */}
            {formState.stage === 1 && (
              <div className="flex flex-row w-full">
                <div className="w-11/12 mx-auto">
                  <Controller
                    name="eventImage"
                    control={control}
                    render={({ field }) => (
                      <Dropzone
                        className="w-full border-dashed border flex items-center rounded-lg cursor-pointer"
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
            )}

            {/* STEP 3 --> BODY 3 */}
            {formState.stage === 2 && (
              <div
                className="w-11/12 mx-auto text-center rounded-lg mt-4 flex items-center justify-center"
                style={{
                  height: "400px",
                  border: "1px solid #00000040",
                  borderStyle: "dashed",
                }}
              >
                <div className="flex flex-col space-y-5 justify-center items-center">
                  <Image src={Ticket} alt="ticket icon" />

                  <div className="flex flex-col space-y-3">
                    <h5 className="font-BricolageGrotesqueSemiBold font-semibold text-xl">
                      Create your tickets
                    </h5>
                    <p className="font-BricolageGrotesqueRegular font-normal text-sm text-OWANBE_DARK_LIGHT">
                      Create your tickets here, it will only take less than a
                      minute.
                    </p>
                  </div>
                  <Button
                    type="primary"
                    htmlType="button"
                    size="large"
                    className="font-BricolageGrotesqueSemiBold sign-up cursor-pointer font-bold button-styles"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Add ticket
                  </Button>
                </div>
              </div>
            )}
          </form>

          {/* FORM BUTTONS */}
          {formState.stage === 0 && (
            <Space className="flex flex-row justify-center space-x-4">
              <Button
                type="default"
                size={"large"}
                className={`font-BricolageGrotesqueSemiBold button-styles sign-in cursor-pointer font-bold`}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="button"
                size="large"
                className="font-BricolageGrotesqueSemiBold  continue cursor-pointer font-bold"
                onClick={nextStep}
              >
                Save and Continue
              </Button>
            </Space>
          )}

          {formState.stage === 1 && (
            <Space className="flex flex-row justify-center space-x-4">
              <Button
                type="default"
                size={"large"}
                className={`font-BricolageGrotesqueSemiBold button-style sign-in cursor-pointer font-bold`}
                onClick={() => {
                  setFormStep(1);
                  setFormStage(formState.stage - 1);
                }}
              >
                Save & continue
              </Button>
              <Button
                type="primary"
                htmlType="button"
                size="large"
                className="font-BricolageGrotesqueSemiBold  continue cursor-pointer font-bold"
                onClick={nextStep}
              >
                Skip & do this later
              </Button>
            </Space>
          )}

          {formState.stage === 2 && (
            <Space className="flex flex-row justify-center space-x-4">
              <Button
                type="default"
                size={"large"}
                className={`font-BricolageGrotesqueSemiBold button-style sign-in cursor-pointer font-bold`}
                onClick={() => {
                  setFormStep(2);
                  setFormStage(formState.stage - 1);
                }}
              >
                Save & continue
              </Button>
              <Button
                type="primary"
                htmlType="button"
                size="large"
                className="font-BricolageGrotesqueSemiBold  continue cursor-pointer font-bold"
                // onClick={nextStep}
              >
                Skip & do this later
              </Button>
            </Space>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default Details;
