import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Appbar from '../Components/Home/Appbar';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

const AddGame = ({ themeMode, toggleTheme }) => {
  const navigate = useNavigate();
  const [gameName, setGameName] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [description, setDescription] = useState('');
  const [GameLink, setGameLink] = useState('');
  const [size, setsize] = useState('');

  const handelSubmit = () => {
    if (gameName === '') {
      alert('يرجى ملأ حقل اسم اللعبة');
    } else if (imageLink === '') {
      alert('يرجى ملأ حقل رابط الصورة');
    } else if (description === '') {
      alert('يرجى ملأ حقل تفاصيل اللعبة');
    } else if (GameLink === '') {
      alert('يرجى ملأ حقل رابط اللعبة');
    } else if (size === '') {
      alert('يرجى ملأ حقل حجم اللعبة');
    } else {
      const user = localStorage.getItem('link');
    const dataF=  Axios.post('https://slick-games.onrender.com/game', {
        gameName: gameName,
        imageLink: imageLink,
        description: description,
        GameLink: GameLink,
        size: size,
        userId: user,
      })
          if (dataF) {
            navigate(`../public/`);
          } else {
            navigate(`../`);

          }
    }
  };

  return (
    <div>
      <Appbar themeMode={themeMode} toggleTheme={toggleTheme} setting={<LogoutIcon />} />
      <div className='flex justify-center items-center flex-col mt-5'>
        <h1>اضافة لعبة جديدة</h1>
        <div>
          <div className='flex justify-center items-center flex-col gap-5'>
            <OutlinedInput
              placeholder='اسم اللعبة'
              onChange={(e) => {
                setGameName(e.target.value);
              }}
            />
            <OutlinedInput
              placeholder='رابط صورة اللعبة'
              onChange={(e) => {
                setImageLink(e.target.value);
              }}
            />
            <OutlinedInput
              placeholder='حجم اللعبة'
              onChange={(e) => {
                setsize(e.target.value);
              }}
            />
            <OutlinedInput
              placeholder='رابط تحميل اللعبة '
              onChange={(e) => {
                setGameLink(e.target.value);
              }}
            />
            <textarea
              placeholder='وصف اللعبة'
              className='w-full h-32 p-2 border text-black focus:outline-none focus:border-blue-500'
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
            <Button variant='contained' onClick={handelSubmit}>
              <p>انشاء لعبة</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGame;
