import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { CiEdit } from "react-icons/ci";
import Modal from "react-modal";
import AddEditUser from "../AddEditUser/AddEditUser";

Modal.setAppElement("#root");

function CustomDataTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const fetchData = async () => {
    try {
      const userRes = await fetch("http://localhost:3000/user");

      if (!userRes.ok) {
        throw new Error("Failed to fetch data");
      }

      const userData = await userRes.json();

      setData(userData);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleEdit = (user) => {
    setOpenAddEditModal({ isShown: true, type: "edit", data: user });
  };

  const handleAdd = () => {
    setOpenAddEditModal({ isShown: true, type: "add", data: null });
  };

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
        <button
          onClick={handleAdd}
          className="ml-200 border p-2 bg-blue-500 text-white 
        rounded-2xl"
        >
          Add User
        </button>
      </div>
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.2)" } }}
        contentLabel=""
        className="w-[40%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditUser
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
          user={openAddEditModal.data}
          type={openAddEditModal.type}
          refetchData={fetchData}
        />
      </Modal>
    </>
  );
}

export default CustomDataTable;
