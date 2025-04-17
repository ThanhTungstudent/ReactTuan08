import React, { useState } from "react";
import { MdClose } from "react-icons/md";

function AddEditUser({ onClose, user, type }) {
  const [customerName, setCustomerName] = useState(user?.name || null);
  const [company, setCompany] = useState(user?.company || null);
  const [value, setValue] = useState(user?.value || null);
  const [status, setStatus] = useState(user?.status || null);

  const [date, setDate] = useState(() => {
    if (user?.date) {
      return convertToInputDateFormat(user.date);
    }
    return "";
  });

  function convertToInputDateFormat(dateStr) {
    if (!dateStr.includes("/")) return dateStr;
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-label text-red-400 uppercase">
          Customer Name
        </label>

        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Customer name"
          value={customerName}
          onChange={({ e }) => setCustomerName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label text-red-400 uppercase">company</label>

        <input
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Company"
          value={company}
          onChange={({ e }) => setCompany(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label text-red-400 uppercase">
          order value
        </label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="$value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label text-red-400 uppercase">order date</label>
        <input
          type="date"
          className="text-2xl text-slate-950 outline-none"
          value={date}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-lable text-red-400 uppercase">Status</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="radio"
              value="New"
              checked={status === "New"}
              onChange={(e) => setStatus(e.target.value)}
            />
            New
          </label>
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="radio"
              value="In-progress"
              checked={status === "In-progress"}
              onChange={(e) => setStatus(e.target.value)}
            />
            In-progress
          </label>
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="radio"
              value="Completed"
              checked={status === "Completed"}
              onChange={(e) => setStatus(e.target.value)}
            />
            Completed
          </label>
        </div>
      </div>
      <button
        className="btn-primary font-medium mt-5 p-3"
        // onClick={handleAddNote}
      >
        {type === "edit" ? "SAVE" : "ADD"}
      </button>
    </div>
  );
}

export default AddEditUser;
