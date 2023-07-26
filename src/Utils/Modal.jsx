// import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React,{ useState , cloneElement} from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
// import From from "./Form.jsx";


function Modal({children}) {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const renderChildren = () => {
    return React.Children.map(children, (child) =>
      cloneElement(child, { visible, handleClose })
    );
  };

  return (
    <div>
      <button onClick={handleVisible}>
        <PlusIcon className="w-12 rounded-full p-2 bg-slate-100 text-gray-500 shadow-md" />
      </button>
      <div className="absolute inset-0 bg-slate-200 bg-opacity-20 backdrop-blur-sm z-50 h-max">
       {renderChildren()}
      </div>
    </div>
  );
}

export default Modal;
