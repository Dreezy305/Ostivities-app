"use client";
import Dropzone from "@/app/components/Dropzone/Dropzone";
import { useFormContext } from "@/app/contexts/form-context/FormContext";
import { IFormInput } from "@/app/utils/interface";
import { Button, Space } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Heading5, Paragraph } from "../../typography/Typography";

function EventImageForm(): JSX.Element {
  const router = useRouter();
  const { formState, setFormStage, data, setFormValues } = useFormContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    trigger,
  } = useForm<IFormInput>({
    progressive: true,
    mode: "all",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    console.log(data, "data");
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <Space direction="vertical">
          <Heading5 className="" content={"Event Image."} />
          <Paragraph
            className="text-OWANBE_PRY text-xl font-normal font-BricolageGrotesqueRegular"
            content={"Upload your event image here."}
            styles={{ fontWeight: "normal !important" }}
          />
        </Space>

        <Button
          type="default"
          size={"large"}
          className={`font-BricolageGrotesqueSemiBold button-style sign-in cursor-pointer font-bold`}
          onClick={() => {
            // setFormStage(formState?.stage - 1);
          }}
        >
          Back
        </Button>
      </div>
      <form
        className="flex flex-col w-full space-y-8"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <Space className="flex flex-row justify-center space-x-4">
          <Button
            type="default"
            size={"large"}
            className={`font-BricolageGrotesqueSemiBold button-style sign-in cursor-pointer font-bold`}
            onClick={() => router.push("/dashboard/events/tickets")}
          >
            Save & continue
          </Button>
          <Button
            type="primary"
            htmlType="button"
            size="large"
            className="font-BricolageGrotesqueSemiBold  continue cursor-pointer font-bold"
          >
            Skip & do this later
          </Button>
        </Space>
      </form>
    </>
  );
}

export default EventImageForm;
