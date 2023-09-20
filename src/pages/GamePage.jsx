import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Appbar from '../Components/Home/Appbar';
import Class from '../Components/Home/Class';
import Games from '../Components/Home/Games';
import Search from '../Components/Home/Search';
import Like from '../Components/Home/Like';
import Time from '../Components/Home/Time';
import ApplicationVersion from '../Components/Home/ApplicationVersion';
import Ads from '../Components/Home/Ads';
import './Ha.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const GamePage = ({ themeMode, toggleTheme }) => {
  const [data, setData] = useState([]);
  const [value , setValue] = useState(0);
  useEffect(() => {
    Axios.get('https://slick-games.onrender.com/api/game')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data]);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [displayItem , setDsiplayItem] = useState('block');
  const link = localStorage.getItem('link');
  useEffect(() =>{ 
  if(link){
    setDsiplayItem('block')
  } if(link === null) {
    setDsiplayItem('hidden')
  }    
},[]);
  return (
    <div >
      <div>
      <Appbar themeMode={themeMode} toggleTheme={toggleTheme} />
      <div  className='flex justify-between items-start gap-5 flex-col-reverse md:flex-row'>
        <div>
          <Class />
          <Search />
          <Like />
          <Time app={displayItem}/>
          <ApplicationVersion />
          <Ads />
        </div>
        <div>
        <div className="md:grid md:grid-cols-2 md:gap-[50px] md:relative md:left-[150px] flex justify-center items-center flex-col max-w-full">
        {Array.isArray(data) ? (
          data.map((item, index) => (
            <Card sx={{ maxWidth: 345 , }} key={index}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            D
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.developer}
        subheader={`نوع البرمجية : ${item.type}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Paella dish"
        sx={{height:300}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.itemName}
        </Typography>
      </CardContent>
      <center className='p-[5px]'>
        <NavLink to={`/product/${item.type}/${item.ID}`}>
          <Button variant="contained" ><p>تحميل</p></Button>
        </NavLink>
      </center>
        
    </Card>
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
      </div>
    </div>
  );
};

export default GamePage;