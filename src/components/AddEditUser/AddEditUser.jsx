import React, { use, useState } from "react";
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

  function convertToDisplayDateFormat(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  }

  const handleSaveUser = async () => {
    try {
      if (type === "edit" && user) {
        const payload = {
          name: customerName,
          company,
          value,
          status,
          date: convertToDisplayDateFormat(date),
        };
        await fetch(`http://localhost:3000/user/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        alert("Cập nhật người dùng thành công!");
      } else {
        const payload = {
          name: customerName,
          company,
          value,
          status,
          date: convertToDisplayDateFormat(date),
          avatar: "./Lab_05/Avatar (1).png",
          id: 7,
        };
        await fetch(`http://localhost:3000/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        alert("Thêm người dùng mới thành công!");
      }
      onClose();
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Đã xảy ra lỗi khi lưu người dùng!");
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute 
        -top-3 -right-3 hover:bg-slate-50"
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
          className="text-2xl text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Customer name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label text-red-400 uppercase">company</label>

        <input
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label text-red-400 uppercase">
          order value
        </label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="$value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label text-red-400 uppercase">order date</label>
        <input
          type="date"
          className="text-2xl text-slate-950 outline-none bg-slate-50 p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
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
        className="bg-amber-400 font-medium mt-5 ml-110 p-3"
        onClick={handleSaveUser}
      >
        {type === "edit" ? "SAVE" : "ADD"}
      </button>
    </div>
  );
}

export default AddEditUser;
