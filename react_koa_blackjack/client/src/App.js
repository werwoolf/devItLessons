import React from 'react';
import AddPlayersForm from "./components/AddPlayersForm.js";
import BlockGameActionsButtons from "./components/BlockGameActionsButtons";

const App = () => {
    return (
        <div>
          <AddPlayersForm/>
            <BlockGameActionsButtons/>
        </div>
    );
};

export default App;