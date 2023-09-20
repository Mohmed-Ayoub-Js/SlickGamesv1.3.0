import React ,  {useState , useEffect} from 'react';
import Appbar from '../Components/Home/Appbar';
import Class from '../Components/Home/Class';
import Games from '../Components/Home/Games';
import Search from '../Components/Home/Search';
import Like from '../Components/Home/Like';
import Time from '../Components/Home/Time';
import ApplicationVersion from '../Components/Home/ApplicationVersion';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom';
import './Ha.css';
const Apps = ({ themeMode, toggleTheme }) => {
  const [displayItem , setDsiplayItem] = useState('block');
  const [data , setData] = useState([]);
  const [value , setValue] = useState(0);

  const link = localStorage.getItem('link');
  useEffect(() =>{ 
  if(link){
    setDsiplayItem('block')
  } if(link === null) {
    setDsiplayItem('hidden')
  }    
},[])
useEffect(() => {
 Axios.get('https://slick-games.onrender.com/api/getApp')
 .then((res) => {setData(res.data)})
  
} , [data]);
const handelValue = () => {
  setValue(value +1); 
 }
  return (
    <div>
    <Appbar themeMode={themeMode} toggleTheme={toggleTheme} />
    <div className='flex justify-between items-start gap-5 flex-col-reverse md:flex-row'>
      <div>
        <Class />
        <Search />
        <Like />
        <Time app={displayItem}/>
        <ApplicationVersion />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-4 flex justify-center items-center flex-col">
      {Array.isArray(data) ? (
          data.map((item, index) => (
            <div key={index} className='drop-shadow-2xl p-[20px] flex justify-center items-center flex-col shadow-lg rounded-lg mt-[5px] h-[500px]'>
              <div>
                <img
                  className='rounded-lg shadow-lg hover:scale-90'
                  style={{ cursor: 'pointer', transition: '0.5s' }}
                  src={item.appImage}
                  alt=""
                />
              </div>
              <div>{item.appName}</div>
              <div>{item.appDes}</div>
              <div>المطور : {item.appDeveloper}</div>
              <div className='flex justify-center items-center gap-[50px]'>
                <p>{item.size}</p>
              </div>
              <div>
                <NavLink  to={`../`}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: '100%' }}
                    onClick={handelValue}
                  >
                    <p>تحميل التطبيق</p>
                  </Button>
                </NavLink>
              </div>
            </div>
          ))
        ) : (
      <center>
         <div className='md:relative md:left-[300px] md:top-[200px]'>
          <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster md:fixed">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
<h1 className='text-white text-[30px]'>لا يوجد تطبيق لعرضه</h1>
<NavLink to='../'>
  <Button
    variant="contained"
    color="primary"
    style={{ width: '100%' }}
    onClick={handelValue}
  >
    <p>الرجوع الى الصفحة الرئيسية</p>
  </Button>
</NavLink>
         </div>
         </center>

        )}
      </div>
    </div>
  </div>
  )
}

export default Apps;