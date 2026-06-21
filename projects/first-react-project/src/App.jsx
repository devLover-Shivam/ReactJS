import React from "react";

const App = () => {
  return(
    //we use fragments for multiple returns for example here we returned to fragment div's with classes dad and chacha by containing it in a empty tag
    <>{/* container div */}
    <div id="dad"> {/* fragment div 1 */}
      <h1 id="child1">hello</h1>
      <h2 id="child2">kaise ho</h2>
    </div>
    <div id="chacha">{/* fragment div 2 */}

    </div>
    </>
  )
}

export default App