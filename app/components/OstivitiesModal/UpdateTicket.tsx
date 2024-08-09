import { IModal } from "@/app/utils/interface";
import { Modal, Button } from "antd";
import React from "react";
import { Heading5 } from "../typography/Typography";
import SingleTicket from "./SingleTicket";

const UpdateTicket = ({ open, onCancel, onOk }: IModal): JSX.Element => {
  return (
    <Modal
      title={
        <>
          <Heading5 content={"Update Ticket"} className="" />
        </>
      }
      open={open}
      onCancel={onCancel}
      footer={
        <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
          <Button
            size={"large"}
            onClick={onCancel}
            className={`font-BricolageGrotesqueSemiBold button-styles sign-in cursor-pointer font-bold`}
            style={{ marginRight: 8, borderRadius: 20 }}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            size={"large"}
            onClick={onOk}
            className="font-BricolageGrotesqueSemiBold sign-up cursor-pointer font-bold button-styles"
            style={{ borderRadius: 20 }}
          >
            Update
          </Button>
        </div>
      }
    >
      <SingleTicket />
    </Modal>
  );
};

export default UpdateTicket;
