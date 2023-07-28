import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function AssetRegForm({ visible, handleClose }) {
  const assetTypes = [
    "motor",
    "pump",
    "blower",
    "motor_with_pump",
    "motor_with_grinder",
  ];
  const [formData, setFormData] = useState({
    assetType: "",
    assetName: "",
    assetAddress: "",
    assetSite: "",
    assetApplication: "",
    assetDescription: "",
    sensors: [],
  });

  const handleAssetTypeChange = (e) => {
    const selectedAssetType = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      assetType: selectedAssetType,
      sensors: Array.from(
        { length: getSensorCount(selectedAssetType) },
        () => ({
          id: "",
          name: "",
          address: "",
          site: "",
        })
      ),
    }));
  };

  const getSensorCount = (assetType) => {
    switch (assetType) {
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
    <section className="absolute inset-0 bg-slate-200 bg-opacity-20 backdrop-blur-sm z-50 h-min min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 pt-10 border rounded-lg shadow-md bg-white relative my-20"
      >
        <button
          type="button"
          onClick={() => {
            setFormData({
              assetType: "",
              assetName: "",
              assetAddress: "",
              assetSite: "",
              assetApplication: "",
              assetDescription: "",
              sensors: [],
            });
            handleClose();
          }}
          className="absolute top-0 right-0 m-3 p-1 bg-blue-400 hover:bg-blue-900 w-min rounded-full"
        >
          <XMarkIcon className="w-5 text-white" />
        </button>
        <h1 className="text-center text-gray-700 text-3xl font-bold mb-5">
          Asset Register
        </h1>
        <div className="mb-6">
          {/* <label
            htmlFor="assetType"
            className="block text-gray-700 font-semibold mb-2"
          >
            Asset Type:
          </label> */}
          <select
            id="assetType"
            name="assetType"
            value={formData.assetType}
            onChange={handleAssetTypeChange}
            className="block w-full px-5 py-2 border rounded-lg bg-white shadow-md placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            required
          >
            <option value="">Select Asset Type</option>
            {assetTypes.map((type) => (
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
              name="assetName"
              value={formData.assetName}
              onChange={handleChange}
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-md placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Asset Name"
              required
            />
          </div>

          {/* Add fields for asset address, asset site, and asset application */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="text"
                id="assetAddress"
                name="assetAddress"
                value={formData.assetAddress}
                onChange={handleChange}
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-md placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Asset address"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="assetSite"
                name="assetSite"
                value={formData.assetSite}
                onChange={handleChange}
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-md placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Asset Site"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <input
              type="text"
              id="assetApplication"
              name="assetApplication"
              value={formData.assetApplication}
              onChange={handleChange}
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-md placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Maxhine application"
              required
            />
          </div>

          <div className="mb-6">
            <textarea
              id="assetDescription"
              name="assetDescription"
              value={formData.assetDescription}
              onChange={handleChange}
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-md placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Asset description"
              rows="4"
              required
            />
          </div>

          {/* Section for inputting sensor data */}
          <div>
            {formData.sensors.length ? (
              <h2 className="text-lg font-semibold mb-4">Sensor Data</h2>
            ) : (
              <></>
            )}
            {formData.sensors.map((sensor, index) => (
              <div key={index} className="border rounded-lg p-4 mb-4">
                <h3 className="text-md font-semibold mb-2">
                  Sensor {index + 1}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      id={`sensorId${index}`}
                      name="id"
                      value={sensor.id}
                      onChange={(e) => handleSensorChange(index, e)}
                      className="block w-full px-5 py-2 border rounded-lg bg-white shadow-md placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                      placeholder="MUID"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id={`sensorName${index}`}
                      name="name"
                      value={sensor.name}
                      onChange={(e) => handleSensorChange(index, e)}
                      className="block w-full px-5 py-2 border rounded-lg bg-white shadow-md placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div>
                    <input
                      type="text"
                      id={`sensorAddress${index}`}
                      name="address"
                      value={sensor.address}
                      onChange={(e) => handleSensorChange(index, e)}
                      className="block w-full px-5 py-2 border rounded-lg bg-white shadow-md placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                      placeholder="Client"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id={`sensorSite${index}`}
                      name="site"
                      value={sensor.site}
                      onChange={(e) => handleSensorChange(index, e)}
                      className="block w-full px-5 py-2 border rounded-lg bg-white shadow-md placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                      placeholder="Site"
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
