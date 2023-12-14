"use client";
import EventTicketTable from "@/app/components/Tables/EventTicket";
import AddTicketModal from "@/app/components/modal/AddTicket";
import { Heading5, Paragraph } from "@/app/components/typography/Typography";
import { Button, Space } from "antd";
import React, { useState } from "react";

function EventTicketForm(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AddTicketModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
      />
      <div className="flex flex-col space-y-8">
        <div className="flex flex-row justify-between">
          <Space direction="vertical">
            <Heading5 className="" content={"Event Ticket."} />
            <Paragraph
              className="text-OWANBE_PRY text-xl font-normal font-BricolageGrotesqueRegular"
              content={
                "Ostivities is free for free events. For paid events, we charge a percentage as a transaction fee."
              }
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
        <div className="w-full flex flex-col space-y-7">
          <Button
            type="primary"
            htmlType="button"
            size="large"
            className="font-BricolageGrotesqueSemiBold sign-up cursor-pointer font-bold button-styles float-right place-self-end"
            onClick={() => setIsModalOpen(true)}
          >
            Add ticket
          </Button>
          <EventTicketTable />
        </div>
        <div className="flex flex-col space-y-8 pb-5">
          <Space className="flex flex-row justify-center space-x-4">
            <Button
              type="default"
              size={"large"}
              className={`font-BricolageGrotesqueSemiBold button-style sign-in cursor-pointer font-bold`}
              onClick={() => {
                // setFormStage(formState.stage - 1);
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
        </div>
      </div>
    </>
  );
}

export default EventTicketForm;
