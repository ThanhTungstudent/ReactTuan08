import { CiShoppingCart } from "react-icons/ci";
function Overview() {
  return (
    <div className="w-full p-5 space-y-5">
      <div className="flex flex-row gap-2">
        <img src="./Lab_05/Squares four 1.png" alt="" />
        <h1 className="text-2xl font-bold text-black">Overview</h1>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div
          className={`w-[300px] h-[130px] p-5 rounded-[5px] 
    bg-pink-300`}
        >
          <div className="flex flex-row justify-between">
            <p>Turmover</p>
            <button
              className={`p-2 border rounded-md 
            
              "border-pink-600"
              
          `}
            >
              <CiShoppingCart className="text-pink-600" size={24}/>
            </button>
          </div>
          <div className="">
            <p className="text-2xl text-black font-bold">$92,405</p>
            <div className="mt-2">
                <div>
                  <span className="text-green-600">▲ </span>
                  <span className="text-green-600">5.39%</span>
                  <span className="text-gray-400">period of change</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
