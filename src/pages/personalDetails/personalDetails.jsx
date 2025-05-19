import React from "react";

import { Steps  } from 'antd';

const description1 = 'Personal Information';
const description2 = 'Face Capture';
const description3 = 'Fingers Capture';
const description4 = '.';

export default function PersonalDetails() {
  return (
    <div className="p-6 max-h-screen">
          <h1 className="text-3xl font-bold text-[#000000] mb-6">Pending IDs</h1>
          <Steps
                current={1}
                items={[
                {
                    title: 'Finished',
                    description1,
                },
                {
                    title: 'In Progress',
                    description2,
                    
                },
                {
                    title: 'Waiting',
                    description3,
                },
                {
                    title: 'Waiting',
                    description4,
                },
                ]}
            />
        </div>
  );
}
