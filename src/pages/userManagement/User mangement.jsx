import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { CheckCircle, Clock, Users, XCircle } from "lucide-react";

export default function UserMangement() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Mangement</h1>

      {/* Summary Cards */}
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <Users className="w-6 h-6 text-gray-600" />
            <div>
              <p className="text-gray-600 text-sm">Total Users</p>
              <p className="text-lg font-bold">100,000</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <div>
              <p className="text-gray-600 text-sm">Verified IDs</p>
              <p className="text-lg font-bold">90,000</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <Clock className="w-6 h-6 text-yellow-600" />
            <div>
              <p className="text-gray-600 text-sm">Pending IDs</p>
              <p className="text-lg font-bold">9,000</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <XCircle className="w-6 h-6 text-red-600" />
            <div>
              <p className="text-gray-600 text-sm">Rejected IDs</p>
              <p className="text-lg font-bold">1,000</p>
            </div>
          </CardContent>
        </Card>
      </div> */}

      {/* Authentication Status & Recent Activities */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">
              Authentication Status
            </h2>
            <div className="flex justify-between mb-2">
              <div>
                <p className="text-blue-600 font-bold text-xl">51.5%</p>
                <p className="text-sm text-gray-600">Success</p>
                <p className="text-xs text-gray-500">101,123</p>
              </div>
              <div>
                <p className="text-yellow-600 font-bold text-xl">48.5%</p>
                <p className="text-sm text-gray-600">Unsuccess</p>
                <p className="text-xs text-gray-500">90,327</p>
              </div>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full"
                style={{ width: "51.5%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              How performed over the last 30 days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Nuwan Thushara</strong>{" "}
                <span className="text-gray-600">nuwanthushara@gmail.com</span>{" "}
                <span className="text-green-600 font-semibold">Verified</span>
              </li>
              <li>
                <strong>Thilini Jayakodi</strong>{" "}
                <span className="text-gray-600">Thilini123@gmail.com</span>{" "}
                <span className="text-red-600 font-semibold">Rejected</span>
              </li>
              <li>
                <strong>Lahiru Kumara</strong>{" "}
                <span className="text-gray-600">lahirukumara@gmail.com</span>{" "}
                <span className="text-green-600 font-semibold">Verified</span>
              </li>
              <li>
                <strong>Nilan Tharanga</strong>{" "}
                <span className="text-gray-600">tharanganilan@gmail.com</span>{" "}
                <span className="text-yellow-600 font-semibold">Pending</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div> */}

      {/* User Growth Chart Placeholder */}
      {/* <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-2">User Growth</h2>
          <p className="text-sm text-gray-500 mb-4">Chart placeholder</p>
          <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
            Chart Coming Soon
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-4">
            <p>Rejected Trend: 1254</p>
            <p>Approval Trend: 2549</p>
            <p>Registration Trend: 3874</p>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}
