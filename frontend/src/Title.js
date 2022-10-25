import { useState } from "react";

const Title = (props) => {
  const buttonClass = `text-xl w-12 text-center border-solid border-black border-[2px] px-2 hover:cursor-pointer `;
  const [infoClicked, setInfoClicked] = useState(false);

  return (
    <div className="absolute top-4 left-4">
      <div className=" text-3xl bg-white border-black border-2 px-4 py-2 ">
        {" "}
        <div>Internet Mirror</div>
        <div className="flex space-x-4 mt-2">
          <div
            className={` ${buttonClass} ${
              props.dimension == 2 && "bg-black text-white"
            }`}
            onClick={() => props.setDimension(2)}
          >
            2D
          </div>
          <div
            className={` ${buttonClass} ${
              props.dimension == 3 && "bg-black text-white"
            }`}
            onClick={() => props.setDimension(3)}
          >
            3D
          </div>
          <div
            className={` ${buttonClass} ${
              infoClicked && "bg-black text-white"
            }`}
            onClick={() => setInfoClicked(!infoClicked)}
          >
            ?
          </div>
        </div>
      </div>
      {infoClicked && (
        <div
          onClick={() => setInfoClicked(!infoClicked)}
          className="w-screen h-screen flex items-center justify-center absolute top-0 left-0"
        >
          <div className="w-screen h-screen absolute top-0 left-0 bg-white opacity-50"></div>
          <div className="absolute top-40 w-5/12 bg-white opacity-100 border-black border-2 p-4">
            <div>
              Big tech companies have made it customary to record user metadata.
              This data is usually difficult for the user to acquire and even
              harder to understand.
            </div>
            <br></br>
            <div>
              Internet Mirror provides an experience to explore and make sense
              of your web browsing history using artificial intelligence.
            </div>
            <br />
            <div>
              The lefthand graph is how a machine learning understands the
              similarity in{" "}
              <a className="underline" href="http://trudy.computer">
                my
              </a>{" "}
              web browsing history.
            </div>
            <br />

            <div>
              The righthand list all of the history in a time-ordered list.
            </div>
            <br />
            <div className="hover:cursor-pointer hover:bg-black hover:text-white float-right px-4 py-4 border-2 border-black">
              Start Exploring
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Title;
