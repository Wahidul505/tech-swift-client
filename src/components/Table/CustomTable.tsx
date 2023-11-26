import React from "react";

interface IColumn {
  key: string;
  label: string;
}

interface IProps {
  columns: IColumn[];
  data: any;
}

const CustomTable = ({ columns, data }: IProps) => {
  return (
    <div className="overflow-x-auto text-gray-800 bg-gray-200 shadow-lg  rounded-2xl overflow-hidden">
      <table className="table">
        <thead className="base-text primary-bg">
          <tr>
            {columns.map((column: IColumn, index: number) => (
              <th key={index}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: number) => {
            return (
              <tr key={index}>
                {columns.map((column: IColumn, columnIndex: number) => {
                  return <td key={columnIndex}>{item[column.key]}</td>;
                })}
                <td>{item.actionButton && item.actionButton}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
