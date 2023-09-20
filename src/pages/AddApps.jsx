import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Appbar from '../Components/Home/Appbar';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

const AddApps = ({ themeMode, toggleTheme }) => {
  const navigate = useNavigate();
  const [gameName, setGameName] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [description, setDescription] = useState('');
  const [GameLink, setGameLink] = useState('');
  const [size, setsize] = useState('');

  const handelSubmit = () => {
    if (gameName === '') {
      alert('يرجى ملأ حقل اسم التطبيق');
    } else if (imageLink === '') {
      alert('يرجى ملأ حقل رابط التطبيق');
    } else if (description === '') {
      alert('يرجى ملأ حقل تفاصيل التطبيق');
    } else if (GameLink === '') {
      alert('يرجى ملأ حقل رابط التطبيق');
    } else if (size === '') {
      alert('يرجى ملأ حقل حجم التطبيق');
    } else {
      const user = localStorage.getItem('link');
      if(user == ''){
        navigate(`../`);
      }
    const dataF=  Axios.post('https://slick-games.onrender.com/api/app', {
        appName: gameName,
        imageLink: imageLink,
        description: description,
        appLink: GameLink,
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
        <h1>اضافة تطبيق جديد</h1>
        <div>
          <div className='flex justify-center items-center flex-col gap-5'>
            <OutlinedInput
              placeholder='اسم التطبيق'
              onChange={(e) => {
                setGameName(e.target.value);
              }}
            />
            <OutlinedInput
              placeholder='رابط صورة التطبيق'
              onChange={(e) => {
                setImageLink(e.target.value);
              }}
            />
            <OutlinedInput
              placeholder='حجم التطبيق'
              onChange={(e) => {
                setsize(e.target.value);
              }}
            />
            <OutlinedInput
              placeholder='رابط تحميل التطبيق '
              onChange={(e) => {
                setGameLink(e.target.value);
              }}
            />
            <textarea
              placeholder='وصف التطبيق'
              className='w-full h-32 p-2 border text-black focus:outline-none focus:border-blue-500'
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
            <Button variant='contained' onClick={handelSubmit}>
              <p>انشاء التطبيق</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddApps;
