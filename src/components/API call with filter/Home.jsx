// import React, { useState, useEffect } from 'react';

// const Home = () => {
//     const [data, setData] = useState([]);
//     const [records, setRecords] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then((result) => {
//                 setData(result);
//                 setRecords(result);
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     const filterData = (e) => {
//         setRecords(data.filter(f => f.name.toLowerCase().includes(e.target.value.toLowerCase())));
//     };

//     return (
//         <div className='p-5 bg-gray-100 min-h-screen'>
//             <div className='bg-white shadow-lg rounded-lg border p-6'>
//                 <input
//                     type='text'
//                     className='form-control w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//                     placeholder='Search by name...'
//                     onChange={filterData}
//                 />
//                 <table className='min-w-full bg-white'>
//                     <thead>
//                         <tr className='w-full bg-gray-200 text-left'>
//                             <th className='py-2 px-4 border-b'>ID</th>
//                             <th className='py-2 px-4 border-b'>Name</th>
//                             <th className='py-2 px-4 border-b'>Email</th>
//                             <th className='py-2 px-4 border-b'>Phone</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {records.map((user, i) => (
//                             <tr key={i} className='hover:bg-gray-100'>
//                                 <td className='py-2 px-4 border-b'>{user.id}</td>
//                                 <td className='py-2 px-4 border-b'>{user.name}</td>
//                                 <td className='py-2 px-4 border-b'>{user.email}</td>
//                                 <td className='py-2 px-4 border-b'>{user.phone}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Home;

import React, { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                setRecords(result);
            })
            .catch((err) => console.log(err));
    }, []);

    const filterData = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        setRecords(data.filter(f => f.name.toLowerCase().includes(value)));
    };

    const highlightText = (text, highlight) => {
        if (!highlight) return text;
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
                <span key={i} className='bg-yellow-200'>{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <div className='p-5 bg-gray-100 min-h-screen'>
            <div className='bg-white shadow-lg rounded-lg border p-6'>
                <input
                    type='text'
                    className='form-control w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Search by name...'
                    onChange={filterData}
                />
                <table className='min-w-full bg-white'>
                    <thead>
                        <tr className='w-full bg-gray-200 text-left'>
                            <th className='py-2 px-4 border-b'>ID</th>
                            <th className='py-2 px-4 border-b'>Name</th>
                            <th className='py-2 px-4 border-b'>Email</th>
                            <th className='py-2 px-4 border-b'>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((user, i) => (
                            <tr key={i} className='hover:bg-gray-100'>
                                <td className='py-2 px-4 border-b'>{user.id}</td>
                                <td className='py-2 px-4 border-b'>
                                    {highlightText(user.name, searchTerm)}
                                </td>
                                <td className='py-2 px-4 border-b'>{user.email}</td>
                                <td className='py-2 px-4 border-b'>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
