import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // استيراد useParams من React Router
import Appbar from '../Components/Home/Appbar';
const Product = ({ themeMode, toggleTheme }) => {
  const { id } = useParams(); 
    console.log(id)
  const [gameData, setGameData] = useState(null);
  useEffect(() => {
    axios.get(`https://slick-games.onrender.com/product/Game/${id}`)
      .then((response) => {
        setGameData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching game data:', error);
      });
  }, [id]);
  
  if (!gameData) {
    return <div>Loading...</div>;
  }

  

  return (
    <div>
              <Appbar themeMode={themeMode} toggleTheme={toggleTheme} />

      <div>
        {gameData.map((item , index )=> (
            <div key={index} className='m-[30px] flex justify-center items-end flex-col'> 
              <div>
                <img src={item.image} alt="" srcset="" className='shadow-lg rounded-lg'/>
              </div>
              <div className='text-[30px]'>
                <h1>{item.game}</h1>
              </div>
              <div>
                <h1>وصف اللعبة</h1>
                <h1>{item.des}</h1>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
