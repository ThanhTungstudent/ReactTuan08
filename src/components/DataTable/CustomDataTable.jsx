import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { CiEdit } from "react-icons/ci";

function CustomDataTable({ data }) {
  const statusStyles = {
    New: "bg-blue-100 text-blue-600",
    "In-progress": "bg-yellow-100 text-yellow-600",
    Completed: "bg-green-100 text-green-600",
  };
  const columns = [
    {
      name: "CUSTOMER NAME",
      selector: (row) => row.name,
      cell: (row) => (
        <div className="flex items-center gap-2">
          <img
            src={row.avatar}
            alt={row.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-medium">{row.name}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "COMPANY",
      selector: (row) => row.company,
      sortable: true,
      wrap: true,
    },
    {
      name: "ORDER VALUE",
      selector: (row) => row.value,
      sortable: true,
    },
    {
      name: "ORDER DATE",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (row) => (
        <span
          className={`text-sm px-3 py-1 rounded-full font-medium ${
            statusStyles[row.status]
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: "",
      cell: (row) => (
        <button
          className="text-gray-500 hover:text-gray-800"
          onClick={() => handleEdit(row)}
        >
          <CiEdit size={30} />
        </button>
      ),
      width: "100px",
    },
  ];

  return (
    <>
      <div className="p-4 bg-white rounded-xl shadow-sm">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img src="./Lab_05/File text 1.png" alt="" />
            <span className="text-xl font-bold">Detailed report</span>
          </div>
          <div className="flex gap-5">
            <button className="flex gap-2 items-center p-1 border border-pink-500 rounded">
              <img src="./Lab_05/Download.png" alt="" />
              <span className="text-[12px] text-pink-500">Import</span>
            </button>
            <button className="flex gap-2 items-center p-1 border border-pink-500 rounded">
              <img src="./Lab_05/Move up.png" alt="" />
              <span className="text-[12px] text-pink-500">Export</span>
            </button>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={data}
          selectableRows
          pagination
          highlightOnHover
          className="rounded-lg"
        />
        <span>63 results</span>
      </div>
    </>
  );
}

export default CustomDataTable;
