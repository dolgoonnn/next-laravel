import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={"text-left border-b-2 border-default border-opacity-20 text-white " + (!isShowing ? "h-20" : "")}>
      <button
        className="py-4 sm:py-6 flex justify-between w-full text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
        onClick={toggle}
        type="button">
        <span className="font-monset font-bold text-[17px] uppercase text-white">{props.title}</span>
        <svg style={{ display: !isShowing ? "block" : "none" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4 sm:w-6 sm:h-6 opacity-30"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path></svg>
        <svg style={{ display: isShowing ? "block" : "none" }}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4 sm:w-6 sm:h-6"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>
      <div style={{ display: isShowing ? "block" : "none" }}>
        <button type="button">
              <div className="text-left text-sm sm:text-[15px] text-bc-BAB pb-6 font-monset" dangerouslySetInnerHTML={{__html: props.content}}/>
        </button>
      </div>
    </div>
  );
}
