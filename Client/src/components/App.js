import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Calendar from './Calendar/Calendar'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <main className="container-fluid">
        <div className="row p-1">

        <Sidebar />
        <Calendar />

        </div>

    </main>

)

export default App;