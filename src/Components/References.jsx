import React from "react";

function References() {
  return (
    <>
      <div className="container">
        <div className="box" id="References">
          <div className="title">
            <h2 className="font-serif font-bold text-3xl text-center">
              References
            </h2>
          </div>
          <div className="desc1 font-Mooli">
            <p className="desc">
              <div className="flex space-x-2">
                <span>Ref 1: </span>
                <a
                  href="https://www.geeksforgeeks.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  GeeksForGeeks
                </a>
              </div>
              <div className="flex space-x-2" >
              <span>Ref 2:</span>
              <a
                href="https://en.wikipedia.org/wiki/Breadth-first_search"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Wikipedia BFS
              </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default References;
