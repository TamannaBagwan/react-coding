import { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

const FetchData = () => {
    const [data, setData] = useState({ results: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=50');
            if (!response.ok) {
                throw new Error(`Error occurred: ${response.status}`)
            }
            const result = await response.json();
            setData(prevData => ({
                results: [...prevData.results, ...result.results]
            }));

        } catch (err) {
            setError(true);
            setLoading(false)
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <h2>Loading........ </h2>
    }
    if (error) {
        return <h2>Something went wrong!</h2>
    }
    console.log(data.results);
    return (
        <div>
            <h2> Fetching data </h2>
            <InfiniteScroll
                dataLength={data.results.length}
                next={getData}
                hasMore={true}
                loader={<p>Loading...</p>}
                endMessage={<p>No more data to load.</p>}
            >

                <table border={1}>
                    <tr>
                        <td> Gender</td>
                        <td> Name </td>
                    </tr>

                    {data.results.map((item, i) => (
                        <tr key={i}>
                            <td> {item.gender} </td>
                            <td> {item.name.title}  {item.name.first} {item.name.last}     </td>
                        </tr>
                    ))}
                </table>

            </InfiniteScroll>
        </div>
    )
}

export default FetchData
