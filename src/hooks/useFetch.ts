import { useEffect, useState } from 'react';

type FetchFunction = () => Promise<any>;

const useFetch = (input: string | FetchFunction) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let result;
                if (typeof input === 'function') {
                    result = await input();
                } else {
                    const response = await fetch(input);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    result = await response.json();
                }
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [input]);

    return { data, loading, error };
};

export default useFetch;