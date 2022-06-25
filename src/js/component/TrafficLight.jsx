import React, { useState } from "react";

//include images into your bundle

//create your first component

const Light = () => {
  //initilize a count variable at 0, the setCount function
  // will be used to re-set the "count" value.
  const [color, setColor] = useState(0);
  return (
    <div>
      <h2>{color} likes</h2>
      {/* Reset count to its previous value + 1 */}
      <span onClick={() => setColor(count + 1)}>👍🏽</span>
      <span onClick={() => setColor(count - 1)}>👎🏽</span>
	  <span onClick={() => setColor(count - 1)}>👎🏽</span>
      <h3>Like or dislike to increase/decrease</h3>
    </div>
  );
};

export default Light;
