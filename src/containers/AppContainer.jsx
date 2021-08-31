import React from 'react'
import { Provider } from 'react-redux'
import FormAdd from '../components/FormAdd'
import ListarDog from '../components/ListarDog'
import {store} from '../store/store'

const AppContainer = () => {

    return (
        <Provider store={store}>
           <div className="container ">
                <div className="row mt-4">
                    <div className="col-md-4 text-center py-3">
                        <img src="https://res.cloudinary.com/db9wh5uvt/image/upload/v1625536708/perros_e1bfpk.png" 
                             className="App-logo " 
                             alt="logo" />
                        <FormAdd />
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <main>
                                <ListarDog />
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default AppContainer
