import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Appbar from '../Components/Home/Appbar';
import './Ha.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
const AppProducts = ({ themeMode, toggleTheme }) => {
  const { id } = useParams();
  const [link, setLink] = useState('');
  console.log(id);
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://slick-games.onrender.com/product/Apps/${id}`)
      .then((response) => {
        setGameData(response.data);
        setLink(response.data[0].download); // Set the download link here
      })
      .catch((error) => {
        console.error('Error fetching game data:', error);
      });
  }, [id]);

  return (
    <div>
      <Appbar themeMode={themeMode} toggleTheme={toggleTheme} />
      {gameData.map((item , index) => (
        <div key={index}> 
          <div className='flex justify-center items-center mt-[0px] p-[10px]' >
           <img src={item.appImage} alt="" srcset=""  width={400} height={500}/>            
          </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-[50px] underline'>
              {item.appName}
            </h1>
          </div>
          <Divider>
            <Chip label={`عن تطبيق ${item.appName}`} />
         </Divider>
         <div className='flex justify-between items-center md:flex-row flex-col m-[20px]'>
         <div className=" rounded-lg shadow-lg p-6">
            <h1 className="text-xl font-semibold mb-4">التحققات الأمنية</h1>
              <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <span className="text-green-500 text-lg mr-2">✅</span>
                    <span>بدون برامج ضارة</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 text-lg mr-2">✅</span>
                    <span>مجاني</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 text-lg mr-2">✅</span>
                    <span>تم التحقق منه من قبل مشرفي الموقع</span>
                </div>
            </div>
        </div>
        <Divider orientation="vertical" className='relative left-[112px] hidden md:block' flexItem>
        <p>عن التطبيق</p>
        </Divider>          

            <h1 className='text-red-500'>
              قسم تحت التطوير
            </h1>
          </div>
          <Divider />
           <div className='flex justify-center items-center'> 
            <h1>تطبيق تم نشره بشكل حصري في SlackGames</h1>
           </div>
          </div>
      ))}
    </div>
  );
}

export default AppProducts;
