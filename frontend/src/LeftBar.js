import { unstable_renderSubtreeIntoContainer } from "react-dom";

const LeftBar = (props) => {
  var timeSortedHistory = props.data.sort(function (first, second) {
    return second["lastVisitTime"] - first["lastVisitTime"];
  });

  //   console.log(timeSortedHistory);
  return (
    <div className="absolute w-3/12 top-0 right-0 h-screen p-4 overflow-y-scroll overflow-x-hidden">
      <div className="w-full sticky top-0 bg-black text-white text-2xl border-2 border-black p-4">
        History List
      </div>
      {props.data.map((item) => {
        let d = Date.parse(item.visitTimeDate);
        let datetext = d.toLocaleString();
        // console.log(datetext);
        return (
          <div
            className="w-full border-2 border-black my-2 p-4 hover:bg-green-300 hover:cursor-pointer"
            onMouseEnter={() => props.setHoveredItem(item)}
            onMouseLeave={() => props.setHoveredItem("")}
          >
            <div></div>
            <div>{item.title}</div>
            <div className="truncate text-sm">
              {item.lastVisitTimeDate.split(" ")[1].split(".")[0]} -{" "}
              <a href={item.url}>{item.url}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeftBar;
