import { Heading5 } from "@/app/components/typography/Typography";
import { useFormContext } from "@/app/contexts/form-context/FormContext";
import { FieldType, IModal } from "@/app/utils/interface";
import TicketDoubleDark from "@/public/ticket-double-dark.svg";
import TicketDoubleRed from "@/public/ticket-double-red.svg";
import TicketSingleRed from "@/public/Ticket-redsvg.svg";
import Ticket from "@/public/Ticket-Slant.svg";
import { Button, Modal, Space } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CollectiveTicket from "./CollectiveTicket";
import SingleTicket from "./SingleTicket";

function AddTicketModal({ open, onCancel, onOk }: IModal): JSX.Element {
  const { formState, setFormStage } = useFormContext();
  const [activeItem, setActive] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setActive("Single Ticket");
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    trigger,
  } = useForm<FieldType>({
    // resolver: yupResolver(schema),
    progressive: true,
    mode: "all",
  });

  const onSubmit: SubmitHandler<FieldType> = (data: any) => {
    console.log(data, "data");
  };

  return (
    <>
      <Modal
        title={
          <>
            <Heading5
              content={show ? activeItem : "Ticket Category"}
              className=""
            />
          </>
        }
        open={open}
        onOk={onOk}
        onCancel={() => {
          onCancel();
          setShow(false);
          setActive("");
        }}
        classNames={{ header: "", body: "", content: "", footer: "" }}
        width={700}
        footer={(params: any) => (
          <div className="flex flex-row items-center justify-center py-6">
            {show ? (
              <Space>
                <Button
                  type="default"
                  size={"large"}
                  className={`font-BricolageGrotesqueSemiBold button-styles sign-in cursor-pointer font-bold`}
                  onClick={() => {
                    if (activeItem !== "") {
                      setShow(false);
                    }
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  size={"large"}
                  htmlType="submit"
                  className="font-BricolageGrotesqueSemiBold sign-up cursor-pointer font-bold button-styles"
                  onClick={() => {
                    onCancel();
                    setShow(false);
                    setActive("");
                    setFormStage(formState.stage + 1);
                  }}
                >
                  Add Ticket
                </Button>
              </Space>
            ) : (
              <Button
                type="primary"
                size={"large"}
                className="font-BricolageGrotesqueSemiBold sign-up cursor-pointer font-bold w-64 rounded-2xl"
                onClick={() => {
                  if (activeItem !== "") {
                    setShow(true);
                  }
                }}
                style={{
                  borderRadius: "20px",
                  fontFamily: "BricolageGrotesqueMedium",
                }}
              >
                Continue
              </Button>
            )}
          </div>
        )}
      >
        {show ? (
          <>
            {activeItem === "Single Ticket" ? (
              <SingleTicket />
            ) : (
              <CollectiveTicket />
            )}
          </>
        ) : (
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 py-9">
            <div
              className={`w-full flex flex-col space-y-9 items-center justify-center py-9 px-6 ticket-category ${
                activeItem === "Single Ticket"
                  ? "border border-OWANBE_PRY rounded-[20px]"
                  : ""
              } transition-all ease-in-out`}
              onClick={() => setActive("Single Ticket")}
            >
              <div className="flex flex-col space-y- justify-center items-center">
                {activeItem === "Single Ticket" ? (
                  <h6 className="ticket-title text-center">Single Ticket</h6>
                ) : (
                  <h5
                    className={`${
                      activeItem === "Single Ticket"
                        ? "ticket-title text-OWANBE_PRY text-center"
                        : ""
                    }`}
                  >
                    Single Ticket
                  </h5>
                )}

                {activeItem === "Single Ticket" ? (
                  <span className="ticket-subtitle text-center mx-auto">
                    Grants entry for one person to the event.
                  </span>
                ) : (
                  <p
                    className={`${
                      activeItem === "Single Ticket"
                        ? "text-OWANBE_PRY text-center mx-auto"
                        : "text-center mx-auto"
                    }`}
                  >
                    Grants entry for one person to the event.
                  </p>
                )}
              </div>

              <Image
                src={activeItem === "Single Ticket" ? Ticket : TicketSingleRed}
                alt="ticket"
                className="mx-auto"
              />
            </div>

            <div
              className={`w-full flex flex-col space-y-9 items-center justify-center py-9 px-6 ticket-category ${
                activeItem === "Collective Ticket"
                  ? "border border-OWANBE_PRY rounded-[20px]"
                  : ""
              } transition-all ease-in-out`}
              onClick={() => setActive("Collective Ticket")}
            >
              <div className="flex flex-col space-y-2 justify-center items-center">
                {activeItem === "Collective Ticket" ? (
                  <h6 className="ticket-title text-center">
                    Collective Ticket
                  </h6>
                ) : (
                  <h5
                    className={`${
                      activeItem === "Single Ticket"
                        ? "ticket-title text-OWANBE_PRY text-center"
                        : ""
                    }`}
                  >
                    Collective Ticket
                  </h5>
                )}
                {activeItem === "Collective Ticket" ? (
                  <span className="ticket-subtitle text-center mx-auto">
                    Grants entry for more than one person to the event.
                  </span>
                ) : (
                  <p
                    className={`${
                      activeItem === "Single Ticket"
                        ? "ticket-subtitle text-OWANBE_PRY text-center"
                        : "text-center mx-auto"
                    }`}
                  >
                    Grants entry for more than one person to the event.
                  </p>
                )}
              </div>
              <Image
                src={
                  activeItem === "Collective Ticket"
                    ? TicketDoubleRed
                    : TicketDoubleDark
                }
                alt="ticket"
                className="mx-auto"
              />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default AddTicketModal;
