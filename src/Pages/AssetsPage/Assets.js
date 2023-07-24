import React from 'react'
import DeviceCard from '../../Components/AssetsPage/DeviceCard'

function Assets() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-10 gap-2">
      <DeviceCard
        name="Billet HEC CTF1"
        serial="ELMIN112022-00148"
        connectedDevices={[
          {
            name: "D1",
            status: "warning"
          }
        ]}
      />
      <DeviceCard
        name="Billet HEC CTF2"
        serial="ELMIN112022-00150"
        connectedDevices={[
          {
            name: "D1",
            status: "good"
          },
          {
            name: "D2",
            status: "warning"
          }
        ]}
      />
      <DeviceCard
        name="Billet OCC CTF1"
        serial="ELMIN112022-00152"
        connectedDevices={[
          {
            name: "D1",
            status: "good"
          },
          {
            name: "D2",
            status: "warning"
          },
          {
            name: "D3",
            status: "unacceptable"
          }
        ]}
      />
      <DeviceCard
        name="Billet OCC CTF2"
        serial=" ELMIN112022-00154"
        connectedDevices={[
          {
            name: "D1",
            status: "good"
          }
        ]}
      />
      <DeviceCard
        name="Bloom ICW CTF1"
        serial="ELMIN112022-00156"
        connectedDevices={[
          {
            name: "D1",
            status: "good"
          },
          {
            name: "D2",
            status: "unacceptable"
          }
        ]}
      />
    </div>
  )
}

export default Assets