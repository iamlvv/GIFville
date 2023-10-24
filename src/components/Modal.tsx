import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
type Props = {
  isShowing: boolean;
  hide: (item?: any) => void;
  children: any;
};

const styles = {
  backgroundModal: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    opacity: "0.3",
  },
  modal: {
    width: "800px",
    height: "350px",
  },
};
// Component for displaying modal with background and modal content
const Modal = (props: Props) =>
  props.isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity"
            style={styles.backgroundModal}
          ></div>
          <div
            className="fixed inset-0 flex items-center justify-center transition ease-in-out delay-300"
            onClick={props.hide} // hide modal when user click on background
          >
            <div
              className="bg-white rounded-md overflow-hidden shadow-md transform transition delay-300 sm:w-full ease-in-out"
              style={styles.modal}
              onClick={(e) => e.stopPropagation()} // prevent modal from closing when user click on modal content
            >
              {props.children()}
            </div>
          </div>
          <ToastContainer />
        </React.Fragment>,
        document.body
      )
    : null;
export default Modal;
