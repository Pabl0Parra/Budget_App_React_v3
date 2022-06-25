import { useEffect, useRef } from "react";
import "../styles/Popup.css";

function Popup(props) {
  const ref = useRef(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!props.show) return null;

  return (
    <div ref={ref} className="popup-box">
      <div className="popup-inner">
        Click anywhere outside of this box to exit this screen
        {/* {props.message} */}
      </div>
    </div>
  );
}

export default Popup;
