import React from "react";
import DeviceCard from "../../Components/AssetsPage/DeviceCard";
import Modal from "../../Utils/Modal";
import Form from "../../Components/Forms/Form";

function Assets() {
  return (
    <div className="px-4 lg:px-10">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-700 text-3xl font-bold">Assets</p>
          <p className="text-gray-500 text-lg mb-5 font-semibold">
            {window.location.pathname}
          </p>
        </div>
        <Modal>
          <Form/>
        </Modal>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-2">
        <DeviceCard
          name="Billet HEC CTF1"
          serial="ELMIN112022-00148"
          connectedDevices={[
            {
              name: "D1",
              status: "warning",
            },
          ]}
        />
        <DeviceCard
          name="Billet HEC CTF2"
          serial="ELMIN112022-00150"
          connectedDevices={[
            {
              name: "D1",
              status: "good",
            },
            {
              name: "D2",
              status: "warning",
            },
          ]}
        />
        <DeviceCard
          name="Billet OCC CTF1"
          serial="ELMIN112022-00152"
          connectedDevices={[
            {
              name: "D1",
              status: "good",
            },
            {
              name: "D2",
              status: "warning",
            },
            {
              name: "D3",
              status: "unacceptable",
            },
          ]}
        />
        <DeviceCard
          name="Billet OCC CTF2"
          serial=" ELMIN112022-00154"
          connectedDevices={[
            {
              name: "D1",
              status: "good",
            },
          ]}
        />
        <DeviceCard
          name="Bloom ICW CTF1"
          serial="ELMIN112022-00156"
          connectedDevices={[
            {
              name: "D1",
              status: "good",
            },
            {
              name: "D2",
              status: "unacceptable",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Assets;
