import React, { use, useState } from "react";
import { MdClose } from "react-icons/md";

function AddEditUser({ onClose, user, type, refetchData }) {
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
      await refetchData();
      onClose();
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Đã xảy ra lỗi khi lưu người dùng!");
    }
  };

  return (
    <div className="relative w-full">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute 
        -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      <div className="flex flex-col gap-2 mt-5">
        <label className="text-sm font-semibold text-red-400 uppercase">
          Customer Name
        </label>
        <input
          type="text"
          className="text-base text-slate-950 outline-none bg-slate-50 p-2 rounded w-full"
          placeholder="Customer name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="text-sm font-semibold text-red-400 uppercase">
          Company
        </label>
        <input
          type="text"
          className="text-base text-slate-950 outline-none bg-slate-50 p-2 rounded w-full"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="text-sm font-semibold text-red-400 uppercase">
          Order Value
        </label>
        <input
          type="text"
          className="text-base text-slate-950 outline-none bg-slate-50 p-2 rounded w-full"
          placeholder="$value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="text-sm font-semibold text-red-400 uppercase">
          Order Date
        </label>
        <input
          type="date"
          className="text-base text-slate-950 outline-none bg-slate-50 p-2 rounded w-full"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="text-sm font-semibold text-red-400 uppercase">
          Status
        </label>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
          {["New", "In-progress", "Completed"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 text-sm text-slate-700"
            >
              <input
                type="radio"
                value={option}
                checked={status === option}
                onChange={(e) => setStatus(e.target.value)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <button
        className="w-full sm:w-auto bg-amber-400 text-white font-semibold mt-6 px-6 py-3 
        rounded-md hover:bg-amber-500 transition"
        onClick={handleSaveUser}
      >
        {type === "edit" ? "SAVE" : "ADD"}
      </button>
    </div>
  );
}

export default AddEditUser;
