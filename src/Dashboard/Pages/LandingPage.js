import React from 'react';


const LandingPage = () => {
    const users = require('../../Assets/USERS.json');
    // console.log(users[0].first_name,users[0].last_name)
    return (
        <>
            <table class="table table-striped table-dark table-bordered table-hover">
                <thead>
                    <tr>
                        <th className='text-center' scope="col">ID</th>
                        <th className='text-center' scope="col">FIRSTNAME</th>
                        <th className='text-center' scope="col">LASTNAME</th>
                        <th className='text-center' scope="col">EMAIL</th>
                        <th className='text-center' scope="col">COUNTRY</th>
                        <th className='text-center' scope="col">CRUD</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(row => (
                        <tr key={row.id}>
                            <td className='text-center'>{row.id}</td>
                            <td className='text-center'>{row.first_name}</td>
                            <td className='text-center'>{row.last_name}</td>
                            <td className='text-center'>{row.email}</td>
                            <td className='text-center'>{row.country}</td>
                            <td className='text-center'><button className='btn btn-primary'>Edit</button> <button className='btn btn-danger'>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#!" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#!">1</a></li>
                    <li class="page-item"><a class="page-link" href="#!">2</a></li>
                    <li class="page-item"><a class="page-link" href="#!">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#!">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default LandingPage; 