import React from "react";

interface IColumn {
  key: string;
  label: string;
}

interface IProps {
  columns: IColumn[];
  data: any;
  action: boolean;
  shadow?: boolean;
}

const CustomTable = ({ columns, data, action, shadow = true }: IProps) => {
  return (
    <div
      className={`overflow-x-auto text-gray-800 bg-gray-100 rounded-2xl overflow-hidden ${
        shadow ? "shadow-2xl" : "shadow-none"
      }`}
    >
      <table className="table">
        <thead className="base-text primary-bg w-full">
          <tr>
            {columns.map((column: IColumn, index: number) => (
              <th key={index}>{column.label}</th>
            ))}
            {action && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: number) => {
            return (
              <tr key={index}>
                {columns.map((column: IColumn, columnIndex: number) => {
                  return <td key={columnIndex}>{item[column.key]}</td>;
                })}
                {action && <td>{item.actionButton && item.actionButton}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
