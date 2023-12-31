import { Label } from "@/app/components/typography/Typography";
import { DataType } from "@/app/utils/interface";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React from "react";

const items: MenuProps["items"] = [
  { key: "1", label: <Label className="cursor-pointer" content="Edit" /> },
  { key: "2", label: <Label className="cursor-pointer" content="Delete" /> },
  { key: "3", label: <Label className="cursor-pointer" content="Duplicate" /> },
];

function EventTicketTable(): JSX.Element {
  const columns: ColumnsType<DataType> = [
    {
      title: (
        <Label
          content="Ticket Name"
          className="font-semibold text-OWANBE_TABLE_TITLE"
        />
      ),
      dataIndex: "name",
      filterMode: "tree",
      filterSearch: true,
      sorter: (a, b) => a.age - b.age,
      width: "30%",
    },
    {
      title: (
        <Label
          content="Ticket Quantity"
          className="font-semibold text-OWANBE_TABLE_TITLE"
        />
      ),
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
      filterSearch: true,
      width: "30%",
    },
    {
      title: (
        <Label
          content="Ticket Price"
          className="font-semibold text-OWANBE_TABLE_TITLE"
        />
      ),
      dataIndex: "address",
      sorter: (a, b) => a.age - b.age,
      filterSearch: false,
      width: "40%",
    },
    {
      title: (
        <Label
          content="Action"
          className="font-semibold text-OWANBE_TABLE_TITLE"
        />
      ),
      dataIndex: "",
      filterSearch: true,
      width: "40%",
      render: () => (
        <Dropdown menu={{ items }} trigger={["click"]} placement="bottomLeft">
          <MenuOutlined className="cursor-pointer" />
        </Dropdown>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];
  return (
    <div className="w-full flex flex-col space-y-6">
      <Table
        columns={columns}
        dataSource={data}
        className="font-BricolageGrotesqueRegular w-full"
      />
    </div>
  );
}

export default EventTicketTable;
