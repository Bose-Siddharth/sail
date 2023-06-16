import React from 'react'
import DeviceCard from '../../Components/Devices/DeviceCard'

function Devices() {
  return (
    <div className="grid grid-cols-4 px-4 md:px-16 gap-2">
      <DeviceCard
        name="Billet HEC CTF1"
        serial="ELMIN112022-00148"
        td="2"
        wd="1"
      />
      <DeviceCard
        name="Billet HEC CTF2"
        serial="ELMIN112022-00150"
        td="2"
        wd="1"
      />
      <DeviceCard
        name="Billet OCC CTF 1"
        serial="ELMIN112022-00152"
        td="2"
        wd="1"
      />
      <DeviceCard
        name="Billet OCC CTF 2"
        serial=" ELMIN112022-00154"
        td="2"
        wd="1"
      />
      <DeviceCard
        name="Bloom ICW CTF 1"
        serial="ELMIN112022-00156"
        td="2"
        wd="1"
      />
    </div>
  )
}

export default Devices