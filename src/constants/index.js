import { label } from 'three/tsl';
import{highlightFirstVideo,highlightsecondVideo,highlighthirdVideo,highlighfourthVideo,yellowImg,blackImg,blueImg,whiteImg} from '../utils';

export const navList=["Store","Mac","iPhone","Support"];

export const highlightsSlides=[{
    id:1,
    textLists:["The all-new chip.","that empowerst.","Apple Intelligence. And you."],
    video : highlightFirstVideo,
    videoDuration:3,
},
     
{
    id:2,
    textLists:[ " New Ultra Wide camera.","Take your photos further And closer.","A big boost in battery life? Yes, please."],
    video : highlightsecondVideo,
    videoDuration: 12,
},
{
    id:3,
    textLists:["Camera Control.","Get the perfect photo.","While barely lifting a finger."],
    video:highlighthirdVideo,
    videoDuration:4,
},
{    
    id:4,
    textLists:["The first iPhone.","designed for Apple Intelligence.","Personal, private, powerful.1."],
    video:highlighfourthVideo,
    videoDuration:7,
},
];

   export const models=[{
    id:1,
    title:["iPhone A16 Pro in Natural Titanium"],
    color:["#8F8A81","#ffe7b9","#6f6c64"],
    img:yellowImg,
},

{
    id:2,
    title:["iPhone A16 Pro in blue Titanium"],
    color:["#53596E","#6395ff","#21242e"],
    img:blueImg,
},
{
    id:3,
   title:["iPhone A16 Pro in white Titanium"],
    color:["#C9C8C2","#ffffff","#C9C8C2"],
    img:whiteImg,
},
{
    id:4,
   title:["iPhone A16 Pro in Black Titanium"],
    color:["#454749","#3b3b3b","#181819"],
    img:blackImg,
},
]; 

export const sizes=[{
    label:"6.1",value:"small"
},

{
   label:"6.7",value:"large"
},
]; 

export const FooterLink=[
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
]; 