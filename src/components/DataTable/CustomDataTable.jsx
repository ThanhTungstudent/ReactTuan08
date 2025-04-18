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
        <div className="flex items-center gap-2 min-w-[150px]">
          <img
            src={row.avatar}
            alt={row.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-medium text-sm sm:text-base">{row.name}</span>
        </div>
      ),
      sortable: true,
      wrap: true,
      minWidth: "180px",
    },
    {
      name: "COMPANY",
      selector: (row) => row.company,
      sortable: true,
      wrap: true,
      minWidth: "150px",
    },
    {
      name: "ORDER VALUE",
      selector: (row) => row.value,
      sortable: true,
      minWidth: "120px",
    },
    {
      name: "ORDER DATE",
      selector: (row) => row.date,
      sortable: true,
      minWidth: "140px",
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (row) => (
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            statusStyles[row.status]
          }`}
        >
          {row.status}
        </span>
      ),
      minWidth: "140px",
    },
    {
      name: "",
      cell: (row) => (
        <button
          className="text-gray-500 hover:text-gray-800"
          onClick={() => handleEdit(row)}
        >
          <CiEdit size={24} />
        </button>
      ),
      width: "80px",
      right: true,
    },
  ];

  return (
    <>
      <div className="p-4 bg-white rounded-xl shadow-sm space-y-4">
        <div className="flex flex-wrap justify-between items-center gap-y-3">
          <div className="flex items-center gap-2">
            <img
              src="./Lab_05/File text 1.png"
              alt="Report Icon"
              className="w-5 h-5"
            />
            <span className="text-lg sm:text-xl font-bold">
              Detailed report
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex gap-2 items-center px-3 py-1 border border-pink-500 rounded">
              <img
                src="./Lab_05/Download.png"
                alt="Import"
                className="w-4 h-4"
              />
              <span className="text-xs text-pink-500">Import</span>
            </button>
            <button className="flex gap-2 items-center px-3 py-1 border border-pink-500 rounded">
              <img
                src="./Lab_05/Move up.png"
                alt="Export"
                className="w-4 h-4"
              />
              <span className="text-xs text-pink-500">Export</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <DataTable
            columns={columns}
            data={data}
            selectableRows
            pagination
            highlightOnHover
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-wrap justify-between items-center mt-4 gap-y-3">
          <span className="text-sm text-gray-500">63 results</span>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition"
          >
            Add User
          </button>
        </div>
      </div>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.2)" } }}
        contentLabel=""
        className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-h-[80vh] bg-white rounded-md mx-auto mt-14 p-5 overflow-y-auto"
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
