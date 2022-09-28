
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {VehicleContextProvider} from './VehicleContextProvider'
import {Header,Footer} from './Layouts';
import {ContentView} from './Programmes'

const App = () => {
    return ( 
        <VehicleContextProvider>
            <CssBaseline />
            <Header />
            <ContentView />
            <Footer />
        </VehicleContextProvider>
     );
}
 
export default App;