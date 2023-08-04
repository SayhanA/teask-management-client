import React, { useEffect, useState } from 'react';
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [item, setItem] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/allTask')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [item])

    console.log(tasks)

    const handleDelete = ( id ) => {
        setItem(id)
        console.log(id)
        fetch(`http://localhost:5000/newTask/${id}`,{
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => setTasks(data))
    }

    return (
        <div className='w-10/12 mx-auto'>
            <div className="overflow-x-auto">
                <div>
                    <Link to='/createTask' className='w-fit flex items-center gap-3 btn ml-auto btn-success'> <FaPlus /> Create New Task</Link>
                </div>


                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks?.map((data, index) => <tr key={data._id} className="">
                                <th>{index + 1}</th>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td>{data.status}</td>
                                <td className='flex justify-center text-xl text-red-500'> <div onClick={() => handleDelete(data._id)} className='hover:btn'><FaRegTrashAlt className='' /></div> </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;