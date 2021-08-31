import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { activeDog, Delete, Listar } from '../actions/dogAction';


const search = (term) => {
    return function (x) {
        return x.name.toLowerCase().includes(term) || !term;
    }
}

const Home = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { dog } = useSelector(state => state.dog)

    const [term, setTerm] = useState("");

    useEffect(() => {
        dispatch(Listar())
    }, [dispatch])


    const handleDelete = (id) => {
        dispatch(Delete(id))
    };

    const handleEdit = (data) => {
        dispatch(activeDog(data))
        history.push("/edit")
    }



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid d-flex justify-content-end">

                    <form className="d-flex justify-content-end">
                        <input
                            className="form-control me-sm-2"
                            type="text"
                            placeholder="Search"
                            name="term"
                            onChange={(e) => setTerm(e.target.value.toLowerCase())}
                        />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <div className="d-flex flex-wrap">
            {
                dog.filter(search(term)).map((data, index) => (
                    <div className="col-6 col-md-4" key={`${index}-${data.id}`}>
                        <div className="card mb-1" >
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <h4>{data.name}</h4>
                                </div>
                                <div className="d-flex justify-content-center flex-column align-items-center">
                                    <p>{data.description}</p>
                                    <img src={data.url}
                                        alt=""
                                        width="230px" />
                                </div>
                                <div className="d-flex justify-content-around m-2">
                                    
                                        <i 
                                        className="material-icons text-dark btn btn-danger font-weight-bold"
                                        onClick={() => handleDelete(data.id)}>
                                            close
                                        </i>

                                        <i className="material-icons btn btn-success"
                                            onClick={() => handleEdit(data)}>
                                            create
                                        </i>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Home
