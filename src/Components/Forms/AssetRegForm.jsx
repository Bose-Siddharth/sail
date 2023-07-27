import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function AssetRegForm({ visible, handleClose }) {
  const machineTypes = [
    "motor",
    "pump",
    "blower",
    "motor_with_pump",
    "motor_with_grinder",
  ];
  const [formData, setFormData] = useState({
    machineType: "",
    machineName: "",
    machineAddress: "",
    machineSite: "",
    machineApplication: "",
    machineDescription: "",
    sensors: [],
  });

  const handleMachineTypeChange = (e) => {
    const selectedMachineType = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      machineType: selectedMachineType,
      sensors: Array.from(
        { length: getSensorCount(selectedMachineType) },
        () => ({
          id: "",
          name: "",
          address: "",
          site: "",
        })
      ),
    }));
  };

  const getSensorCount = (machineType) => {
    switch (machineType) {
      case "motor":
      case "pump":
      case "blower":
        return 2;
      case "motor_with_pump":
      case "motor_with_grinder":
        return 4;
      default:
        return 0;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSensorChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const sensors = [...prevData.sensors];
      sensors[index] = { ...sensors[index], [name]: value };
      return { ...prevData, sensors };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };
  if (!visible) return null;
  return (
    <section className="absolute inset-0 bg-slate-200 bg-opacity-20 backdrop-blur-sm z-50 h-full">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 pt-10 border rounded-lg shadow-md bg-white relative mt-20"
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-0 right-0 m-3 p-1 bg-blue-400 hover:bg-blue-900 w-min rounded-full"
        >
          <XMarkIcon className="w-5 text-white" />
        </button>
        <h1 className="text-center text-gray-700 text-3xl font-bold mb-5">Asset Register</h1>
        <div className="mb-6">
          {/* <label
            htmlFor="machineType"
            className="block text-gray-700 font-semibold mb-2"
          >
            Machine Type:
          </label> */}
          <select
            id="machineType"
            name="machineType"
            value={formData.machineType}
            onChange={handleMachineTypeChange}
            className="block w-full px-5 py-2 border rounded-lg bg-white shadow-md placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            required
          >
            <option value="">Select Machine Type</option>
            {machineTypes.map((type) => (
              <option key={type} value={type}>
                {type.replace(/_/g, " ")}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="mb-6">
            <input
              type="text"
              name="machineName"
              value={formData.machineName}
              onChange={handleChange}
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-md placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Machine Name"
              required
            />
          </div>

          {/* Add fields for machine address, machine site, and machine application */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="machineAddress"
                className="block text-gray-700 font-semibold mb-2"
              >
                Machine Address:
              </label>
              <input
                type="text"
                id="machineAddress"
                name="machineAddress"
                value={formData.machineAddress}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="machineSite"
                className="block text-gray-700 font-semibold mb-2"
              >
                Machine Site:
              </label>
              <input
                type="text"
                id="machineSite"
                name="machineSite"
                value={formData.machineSite}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="machineApplication"
              className="block text-gray-700 font-semibold mb-2"
            >
              Machine Application:
            </label>
            <input
              type="text"
              id="machineApplication"
              name="machineApplication"
              value={formData.machineApplication}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="machineDescription"
              className="block text-gray-700 font-semibold mb-2"
            >
              Machine Description:
            </label>
            <textarea
              id="machineDescription"
              name="machineDescription"
              value={formData.machineDescription}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
              rows="4"
              required
            />
          </div>

          {/* Section for inputting sensor data */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Sensor Data</h2>
            {formData.sensors.map((sensor, index) => (
              <div key={index} className="border rounded-lg p-4 mb-4">
                <h3 className="text-md font-semibold mb-2">
                  Sensor {index + 1}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor={`sensorId${index}`}
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Sensor ID:
                    </label>
                    <input
                      type="text"
                      id={`sensorId${index}`}
                      name="id"
                      value={sensor.id}
                      onChange={(e) => handleSensorChange(index, e)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`sensorName${index}`}
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Sensor Name:
                    </label>
                    <input
                      type="text"
                      id={`sensorName${index}`}
                      name="name"
                      value={sensor.name}
                      onChange={(e) => handleSensorChange(index, e)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div>
                    <label
                      htmlFor={`sensorAddress${index}`}
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Sensor Address:
                    </label>
                    <input
                      type="text"
                      id={`sensorAddress${index}`}
                      name="address"
                      value={sensor.address}
                      onChange={(e) => handleSensorChange(index, e)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`sensorSite${index}`}
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Sensor Site:
                    </label>
                    <input
                      type="text"
                      id={`sensorSite${index}`}
                      name="site"
                      value={sensor.site}
                      onChange={(e) => handleSensorChange(index, e)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default AssetRegForm;
