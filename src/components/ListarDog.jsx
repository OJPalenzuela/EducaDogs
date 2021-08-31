import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Delete, activeDog} from '../actions/dogAction'

const ListarDog = () => {
    const { dog } = useSelector(state => state.dog)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
       dispatch(Delete(id))
    };
    
    const handleEdit = (data) => {
        dispatch(activeDog(data))
        console.log('editar')
    }
    

    return (
        <>
            {
                dog.map((data,index) => (
                    <div className="col-md-4 ms-5" key={`${index}-${data.id}`}>
                        <div className="card mb-1" >
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4>{data.name}</h4>
                                    <div>
                                        <i className="material-icons text-danger"
                                            onClick={() => handleDelete(data.id)}
                                        >
                                            close
                                        </i>

                                        <i
                                            className="material-icons"
                                            onClick={() => handleEdit(data)}
                                             >
                                            create
                                        </i>
                                    </div>
                                </div>
                                <p>{data.description}</p>
                                <img src={data.url}
                                    alt=""
                                    width="50px" />
                            </div>
                        </div>

                    </div>
                ))
            }

        </>
    )
}

export default ListarDog
