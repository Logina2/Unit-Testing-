import  { useEffect, useState } from 'react';
import axios from 'axios';

const JokeFetcher = () => {
  const [joke, setJoke] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        setJoke(response.data.value);
<<<<<<< HEAD
      } catch (error){
        setError(error);
=======
      } catch {
        setError('Failed to fetch joke');
>>>>>>> f3495d646f421a3ae6f1785da4babfc664c33108
      }
    };
    fetchJoke();
  }, []);

<<<<<<< HEAD
  if (error) return <h1>{error.message}</h1>;
=======
  if (error) return <h1>{error}</h1>;
>>>>>>> f3495d646f421a3ae6f1785da4babfc664c33108
  return <h1 style={{fontSize:"20px"}}>{joke || 'Loading...'}</h1>;
};

export default JokeFetcher;
