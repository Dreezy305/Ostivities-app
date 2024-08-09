"use client";
import EventPageAppearance from "@/app/components/forms/create-events/EventPageAppearance";
import AddTicketModal from "@/app/components/OstivitiesModal/AddTicket";
import EventTicketTable from "@/app/components/Tables/EventTicket";
import LocationSearch from "@/app/components/LocationSearch";
import {
  Heading5,
  Label,
  Paragraph,
} from "@/app/components/typography/Typography";
import { useFormContext } from "@/app/contexts/form-context/FormContext";
import "@/app/globals.css";
import {
  AFRICAN_TIME_ZONES,
  EVENT_FREQUENCIES,
  EVENT_TYPES,
  STATES_IN_NIGERIA,
  stepOne,
} from "@/app/utils/data";
import { EVENT_INFO } from "@/app/utils/enums";
import { IFormInput } from "@/app/utils/interface";
import Ticket from "@/public/Ticket.svg";
import {
  DeleteOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkOutlined,
  UploadOutlined,
  XOutlined,
} from "@ant-design/icons";
import {
  Button,
  Modal,
  Col,
  DatePicker,
  Input,
  Radio,
  Row,
  Select,
  Space,
  Upload,
  Popover,
} from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

function Details(): JSX.Element {
  const router = useRouter();
  const { formState, setFormStage } = useFormContext();
  const [formStep, setFormStep] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [] = useState(null);
  const [userName, setUserName] = useState("Rose"); // default value

  const { Option } = Select;

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    trigger,
  } = useForm<IFormInput>({
    progressive: true,
    mode: "all",
  });

  const watchEventInfo = watch("eventInfo");

  useEffect(() => {
    const subscription: any = watch(() => {
      return;
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      // Fetch user data here, e.g., from an API or context
      const user = {
        firstName: "Rose",
        businessName: "Ostivities",
      };

      const name = user.firstName || user.businessName || "User";
      setUserName(name);
    };

    fetchUserData();
  }, []);

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

  

    const [popoverVisible, setPopoverVisible] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);
  
    const handleSelectLocation = (address: string) => {
      setValue("eventAddress", address); // Update the form field value
      setPopoverVisible(false); // Close the popover
    };
  
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setPopoverVisible(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const content = (
      <div style={{ padding: 10 }} ref={popoverRef}>
        <LocationSearch onSelectLocation={handleSelectLocation} />
      </div>
    );

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
                ? `Hello, ${userName}`
                : formStep === 2
                ? "Event Page Appearance"
                : "Event Ticket"
            }
          />
          <Paragraph
            className="text-OWANBE_PRY text-sm font-normal font-BricolageGrotesqueRegular"
            content={
              formStep === 1
                ? "Lets get you started by creating your event."
                : formStep === 2
                ? "Upload your event image here by clicking the camera icon (File size should not be more than 10MB)."
                : "For free events, Ostivities is free. For paid events, we charge a percentage-based transaction fee on ticket sales."
            }
            styles={{ fontWeight: "normal !important" }}
          />
        </Space>
        {formState.stage > 0 && (
          <Button
            type="default"
            size={"large"}
            className={`font-BricolageGrotesqueSemiBold button-style sign-in cursor-pointer font-bold`}
            style={{ width: "150px" }}
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
          
          <EventTicketTable />
          <Space className="flex flex-row justify-center space-x-4">
            <Button
              type="default"
              size={"large"}
              className="font-BricolageGrotesqueSemiBold  continue cursor-pointer font-bold equal-width-button"
              onClick={() => {
                setFormStage(formState.stage - 1);
              }}
            >
              Skip & do this later
            </Button>
            <Button
              type="default"
              htmlType="button"
              size="large"
              className="font-BricolageGrotesqueSemiBold continue font-bold custom-button equal-width-button"
              onClick={() => router.push("/publish-events")}
            >
              Continue
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
                            minHeight: "220px",
                            maxHeight: "220px",
                            paddingTop: "10px",
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
    <Space direction="vertical" size={"small"} style={{ width: '100%' }}>
      <label htmlFor="eventAddress">Event Address</label>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Input 
          {...field} 
          placeholder="Enter Address" 
          style={{ flex: 1, minWidth: '200px', maxWidth: 'calc(100% - 128px)' }} 
        />
        <Popover
          content={content}
          title="Search for a Location"
          trigger="click"
          open={popoverVisible}
        >
          <Button
            type="default"
            style={{ borderRadius: '5px', minWidth: '120px' }}
            onClick={() => setPopoverVisible(!popoverVisible)}
          >
            Select on Map
          </Button>
        </Popover>
      </div>
    </Space>
  )}
/>

    </div>

                <div className="flex flex-col space-y-4 pl-6">
                  <Controller
                    name="customURL"
                    control={control}
                    render={({ field }) => (
                      <Space direction="vertical" size="small">
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
                              color: "#000000",
                            }}
                            defaultValue="https://ostivities.com/discover/"
                            value="https://ostivities.com/discover/"
                            disabled
                          />
                          <Input
                            style={{
                              width: "52%",
                              borderTopLeftRadius: "0px !important",
                              borderBottomLeftRadius: "0px !important",
                            }}
                            {...field}
                            placeholder="Enter your desired name"
                          />
                        </Space.Compact>
                      </Space>
                    )}
                  />

                  <Space direction="vertical" size="small">
                    <Controller
                      name="document"
                      control={control}
                      render={({ field }) => (
                        <Space direction="vertical" size="small">
                          <Label
                            content={
                              <span>
                                Upload Supporting Doc{" "}
                                <span className="optional-text">
                                  (optional)
                                </span>
                              </span>
                            }
                            htmlFor="eventName"
                          />

                          <Space.Compact className="w-full h-8">
                            <Input
                              style={{
                                width: "75%",
                                borderTopRightRadius: "0px !important",
                                borderBottomRightRadius: "0px !important",
                              }}
                              placeholder="Enter file name (optional)"
                            />
                            <Upload
                              showUploadList={false}
                              beforeUpload={() => false}
                              className="upload-button"
                              onChange={(info) => {
                                const file = info.fileList[0]; // Only take the first file
                                field.onChange(file ? [file] : []); // Override with the new file or empty array
                              }}
                            >
                              <Button
                                icon={<UploadOutlined />}
                                className="custom-upload-button"
                              >
                                Click to Upload
                              </Button>
                            </Upload>
                          </Space.Compact>
                          <span className="font-BricolageGrotesqueLight text-OWANBE_PRY text-xs font-light">
                            *Supporting doc can be Wedding Card, Birthday Card
                            among many others. *Only JPEG, PNG & PDF Allowed and
                            file size should not be more than 10MB.
                          </span>
                          {Array.isArray(field.value) &&
                            field.value.length > 0 && (
                              <div className="font-BricolageGrotesqueLight text-xs text-gray-400">
                                Uploaded File:
                                <Space>
                                  <span>{field.value[0].name}</span>
                                  <DeleteOutlined
                                    style={{
                                      color: "#e20000",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => field.onChange([])} // Clear the uploaded file
                                  />
                                </Space>
                              </div>
                            )}
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
                            placeholder="Select Event Type"
                            {...field}
                            style={{ width: "100%" }}
                          >
                            {EVENT_TYPES.map((_i) => (
                              <Option value={_i.value} key={_i.label}>
                                {_i.label}
                              </Option>
                            ))}
                          </Select>
                        </Space>
                      )}
                    />
                  </Space>

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
                              htmlFor="timeZone"
                            />
                            <Select
                              placeholder="Select Time Zone"
                              {...field}
                              style={{ width: "100%" }}
                            >
                              {AFRICAN_TIME_ZONES.map((zone) => (
                                <Option value={zone.value} key={zone.value}>
                                  {zone.label}
                                </Option>
                              ))}
                            </Select>
                          </Space>
                        )}
                      />
                      <Space
                        direction="horizontal"
                        size="large"
                        className="w-full"
                      >
                        <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '16px' }}>
  {/* Start Date & Time */}
  <div style={{ flex: '1 1 auto', minWidth: '150px' }}>
    <Label
      content="Start Date & Time"
      htmlFor="startDateAndTime"
    />
    <Controller
      name="startDateAndTime"
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          style={{ width: "100%", height: "33px" }}
        />
      )}
    />
  </div>

  {/* End Date & Time */}
  <div style={{ flex: '1 1 auto', minWidth: '150px' }}>
    <Label
      content="End Date & Time"
      htmlFor="endDateAndTime"
    />
    <Controller
      name="endDateAndTime"
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          style={{ width: "100%", height: "33px" }}
        />
      )}
    />
  </div>
</div>

                      </Space>

                      <Space
                        direction="vertical"
                        size="small"
                        style={{ marginBottom: "4px" }}
                      >
                        <label
                          htmlFor="socialdetails"
                          className=""
                          style={{
                            marginBottom: "4px",
                            fontSize: "14.5px",
                            fontFamily: "BricolageGrotesqueregular",
                          }}
                        >
                          Social Media Details{" "}
                          <span style={{ color: "#e20000" }}>(optional)</span>
                        </label>

                        <Row gutter={[16, 8]}>
                          {/* Website Link Field */}
                          <Col xs={24} sm={12}>
                            <Controller
                              name="websiteUrl" // Use a descriptive name (e.g., websiteUrl)
                              control={control}
                              render={({ field }) => (
                                <Space
                                  direction="vertical"
                                  size="small"
                                  style={{ width: "100%" }}
                                >
                                  <Input
                                    prefix={<LinkOutlined />}
                                    style={{
                                      width: "100%",
                                      color: "#000000",
                                      marginTop: "8px", // Adjust spacing between label and field
                                    }}
                                    {...field}
                                    placeholder="Enter your website URL"
                                  />
                                </Space>
                              )}
                            />
                          </Col>

                          {/* Twitter Field */}
                          <Col xs={24} sm={12}>
                            <Controller
                              name="twitterUrl" // Use a descriptive name (e.g., twitterUrl)
                              control={control}
                              render={({ field }) => (
                                <Space
                                  direction="vertical"
                                  size="small"
                                  style={{ width: "100%" }}
                                >
                                  <Input
                                    prefix={<XOutlined />}
                                    style={{
                                      width: "100%",
                                      color: "#000000",
                                      marginTop: "8px", // Adjust spacing between label and field
                                    }}
                                    {...field}
                                    placeholder="Enter your Twitter/X URL"
                                  />
                                </Space>
                              )}
                            />
                          </Col>

                          {/* Facebook Field */}
                          <Col xs={24} sm={12}>
                            <Controller
                              name="facebookUrl" // Use a descriptive name (e.g., facebookUrl)
                              control={control}
                              render={({ field }) => (
                                <Space
                                  direction="vertical"
                                  size="small"
                                  style={{ width: "100%" }}
                                >
                                  <Input
                                    prefix={<FacebookFilled />}
                                    style={{
                                      width: "100%",
                                      color: "#000000",
                                      marginTop: "8px", // Adjust spacing between label and field
                                    }}
                                    {...field}
                                    placeholder="Enter your Facebook URL"
                                  />
                                </Space>
                              )}
                            />
                          </Col>

                          {/* Instagram Field */}
                          <Col xs={24} sm={12}>
                            <Controller
                              name="instagramUrl" // Use a descriptive name (e.g., instagramUrl)
                              control={control}
                              render={({ field }) => (
                                <Space
                                  direction="vertical"
                                  size="small"
                                  style={{ width: "100%" }}
                                >
                                  <Input
                                    prefix={<InstagramFilled />}
                                    style={{
                                      width: "100%",
                                      color: "#000000",
                                      marginTop: "8px", // Adjust spacing between label and field
                                    }}
                                    {...field}
                                    placeholder="Enter your Instagram URL"
                                  />
                                </Space>
                              )}
                            />
                          </Col>

                          {/* ... Add similar Controllers for other social media fields ... */}
                        </Row>
                      </Space>
                    </>
                  )}

                  {watchEventInfo === EVENT_INFO.RECURRING_EVENT && (
                    <>
                      <Space
                        direction="horizontal"
                        size="large"
                        className="w-full"
                      >
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <div style={{ display: 'flex', gap: '16px' }}>
    {/* Time Zone */}
    <div style={{ flex: '1 1 300px', minWidth: '150px' }}>
      <Label 
        content="Time Zone" 
        htmlFor="timeZone"
      />
      <Controller
        name="timeZone"
        control={control}
        render={({ field }) => (
          <Select
            placeholder="Select Time Zone"
            {...field}
            style={{ width: "100%", height: "33px" }}
          >
            {AFRICAN_TIME_ZONES.map((zone) => (
              <Option value={zone.value} key={zone.value}>
                {zone.label}
              </Option>
            ))}
          </Select>
        )}
      />
    </div>

    {/* Frequency */}
    <div style={{ flex: '1 1 300px', minWidth: '150px' }}>
      <Label content="Frequency" htmlFor="eventFrequency" />
      <Controller
        name="eventFrequency"
        control={control}
        render={({ field }) => (
          <Select
            placeholder="Select Event Frequency"
            {...field}
            style={{ width: "100%", height: "33px" }}
          >
            {EVENT_FREQUENCIES.map((frequency) => (
              <Option
                value={frequency.value}
                key={frequency.value}
              >
                {frequency.label}
              </Option>
            ))}
          </Select>
        )}
      />
    </div>
  </div>

  <div style={{ display: 'flex', gap: '16px' }}>
    {/* Start Date & Time */}
    <div style={{ flex: '1 1 353px', minWidth: '150px' }}>
      <Label
        content="Start Date & Time"
        htmlFor="startDateAndTime"
      />
      <Controller
        name="startDateAndTime"
        control={control}
        render={({ field }) => (
          <DatePicker
            {...field}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            style={{ width: "100%", height: "33px" }}
          />
        )}
      />
    </div>

    {/* End Date & Time */}
    <div style={{ flex: '1 1 353px', minWidth: '150px' }}>
      <Label
        content="End Date & Time"
        htmlFor="endDateAndTime"
      />
      <Controller
        name="endDateAndTime"
        control={control}
        render={({ field }) => (
          <DatePicker
            {...field}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            style={{ width: "100%", height: "33px" }}
          />
        )}
      />
    </div>
  </div>
</div>

                      </Space>

                      <Space
                        direction="vertical"
                        size="small"
                        style={{ marginBottom: "4px" }}
                      >
                        <label
                          htmlFor="socialdetails"
                          className=""
                          style={{
                            marginBottom: "4px",
                            fontSize: "14.5px",
                            fontFamily: "BricolageGrotesqueregular",
                          }}
                        >
                          Social Media Details{" "}
                          <span style={{ color: "#e20000" }}>(optional)</span>
                        </label>

                        <Row gutter={[16, 8]}>
                          {/* Website Link Field */}
                          <Col xs={24} sm={12}>
                            <Controller
                              name="websiteUrl" // Use a descriptive name (e.g., websiteUrl)
                              control={control}
                              render={({ field }) => (
                                <Space
                                  direction="vertical"
                                  size="small"
                                  style={{ width: "100%" }}
                                >
                                  <Input
                                    prefix={<LinkOutlined />}
                                    style={{
                                      width: "100%",
                                      color: "#000000",
                                      marginTop: "8px", // Adjust spacing between label and field
                                    }}
                                    {...field}
                                    placeholder="Enter your website URL"
                                  />
                                </Space>
                              )}
                            />
                          </Col>

                          {/* Twitter Field */}
                          <Col xs={24} sm={12}>
                            <Controller
                              name="twitterUrl" // Use a descriptive name (e.g., twitterUrl)
                              control={control}
                              render={({ field }) => (
                                <Space
                                  direction="vertical"
                                  size="small"
                                  style={{ width: "100%" }}
                                >
                                  <Input
                                    prefix={<XOutlined />}
                                    style={{
                                      width: "100%",
                                      color: "#000000",
                                      marginTop: "8px", // Adjust spacing between label and field
                                    }}
                                    {...field}
                                    placeholder="Enter your Twitter/X URL"
                                  />
                                </Space>
                              )}
                            />
                          </Col>

                          {/* Facebook Field */}
                          <Col xs={24} sm={12}>
                            <Controller
                              name="facebookUrl" // Use a descriptive name (e.g., facebookUrl)
                              control={control}
                              render={({ field }) => (
                                <Space
                                  direction="vertical"
                                  size="small"
                                  style={{ width: "100%" }}
                                >
                                  <Input
                                    prefix={<FacebookFilled />}
                                    style={{
                                      width: "100%",
                                      color: "#000000",
                                      marginTop: "8px", // Adjust spacing between label and field
                                    }}
                                    {...field}
                                    placeholder="Enter your Facebook URL"
                                  />
                                </Space>
                              )}
                            />
                          </Col>

                          {/* Instagram Field */}
                          <Col xs={24} sm={12}>
                            <Controller
                              name="instagramUrl" // Use a descriptive name (e.g., instagramUrl)
                              control={control}
                              render={({ field }) => (
                                <Space
                                  direction="vertical"
                                  size="small"
                                  style={{ width: "100%" }}
                                >
                                  <Input
                                    prefix={<InstagramFilled />}
                                    style={{
                                      width: "100%",
                                      color: "#000000",
                                      marginTop: "8px", // Adjust spacing between label and field
                                    }}
                                    {...field}
                                    placeholder="Enter your Instagram URL"
                                  />
                                </Space>
                              )}
                            />
                          </Col>

                          {/* ... Add similar Controllers for other social media fields ... */}
                        </Row>
                      </Space>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* STEP 2 --> BODY 2 */}
            {formState.stage === 1 && (
              <div className="flex flex-row w-full">
                <div className="w-11/10 mx-auto">
                  <Controller
                    name="eventImage"
                    control={control}
                    render={() => (
                      <EventPageAppearance
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
                    Add Tickets
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
                className="font-BricolageGrotesqueSemiBold  continue cursor-pointer font-bold equal-width-button"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="button"
                size="large"
                className="font-BricolageGrotesqueSemiBold continue font-bold custom-button equal-width-button"
                onClick={nextStep}
              >
                Save & Continue
              </Button>
            </Space>
          )}

          {formState.stage === 1 && (
            <Space className="flex flex-row justify-center space-x-4">
              <Button
                type="default"
                size={"large"}
                className="font-BricolageGrotesqueSemiBold  continue cursor-pointer font-bold equal-width-button"
                onClick={nextStep}
              >
                Skip & do this later 
              </Button>
              <Button
                type="primary"
                htmlType="button"
                size="large"
                className="font-BricolageGrotesqueSemiBold continue font-bold custom-button equal-width-button"
                onClick={nextStep}
              >
                Save & continue
              </Button>
            </Space>
          )}

          {formState.stage === 2 && (
            <Space className="flex flex-row justify-center space-x-4">
              <Button
                type="default"
                size={"large"}
                className="font-BricolageGrotesqueSemiBold  continue cursor-pointer font-bold equal-width-button"
                onClick={() => {
                  router.push("/publish-events");
                }}
              >
                Skip & do this later
              </Button>
              <Button
                type="primary"
                htmlType="button"
                size="large"
                className="font-BricolageGrotesqueSemiBold continue font-bold custom-button equal-width-button"
                onClick={() => {
                  router.push("/publish-events");
                }}
              >
                Save & continue
              </Button>
            </Space>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default Details;