
import Card from "@/components/admin-components/common/Card";
import { MdOutlineArrowUpward } from "react-icons/md";

export default function Dashboard() {
  return (
    <div className="">
      <div className="my-4">Admin Dashboard</div>
      <div className="grid grid-flow-row grid-cols-4 gap-1">
        <Card>
          <div className="p-4 flex justify-between items-center gap-4">
            <div className="w-60">
              <p className="text-sm font-bold text-gray-500">Total Products</p>
              <h4 className="font-medium text-3xl">100</h4>
            </div>
            <div>
              <MdOutlineArrowUpward size={40} color="green" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-4  flex justify-between items-center gap-4">
            <div className="w-60">
              <p className="text-sm font-bold text-gray-500">Total Products</p>
              <h4 className="font-medium text-3xl">100</h4>
            </div>
            <div>
              <MdOutlineArrowUpward size={40} color="green" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-4  flex justify-between items-center gap-4">
            <div className="w-60">
              <p className="text-sm font-bold text-gray-500">Total Products</p>
              <h4 className="font-medium text-3xl">100</h4>
            </div>
            <div>
              <MdOutlineArrowUpward size={40} color="green" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-4  flex justify-between items-center gap-4">
            <div className="w-60">
              <p className="text-sm font-bold text-gray-500">Total Products</p>
              <h4 className="font-medium text-3xl">100</h4>
            </div>
            <div>
              <MdOutlineArrowUpward size={40} color="green" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
