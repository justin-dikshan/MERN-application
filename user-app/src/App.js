import './App.css';
import 'antd/dist/antd.css';
import Router from "./Components/Routers/routes";
import React, {Fragment} from 'react';



class App extends React.Component {

    render(){
        return (

                <div className='App'>
                    <Fragment>
                        <Router/>
                    </Fragment>
                </div>



        )
    }
}

export default App;
