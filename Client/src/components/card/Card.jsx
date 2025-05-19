import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';

export default function Cards(props) {
  const SubjectName= props.subjectName;
  const TopicName = props.topicName;
  const Level = props.level;
  const Image = props.image||"https://placehold.co/400";
  const navigate = useNavigate();


  return (
    <Card sx={{ width: 320 ,display:"inline-block",margin:"1rem .5rem ",
    '&:not(:hover)':{
        boxShadow:"inset 0 4px 7px 1px #ffffff, inset 0 -5px 20px rgba(173, 186, 204, 0.25), 0 2px 6px rgba(0, 21, 64, 0.14), 0 10px 20px rgba(0, 21, 64, 0.05)",
    },
        '&:hover':{
            boxShadow:" inset 0 4px 20px 1px #ffffff, inset 0 -5px 20px rgba(173, 186, 204, 0.25), 0 2px 19px rgba(0, 21, 64, 0.14), 0 10px 20px rgba(0, 21, 64, 0.05)"
        },
        }} >
      <div>
        <Typography level="title-lg">{SubjectName}</Typography>
        <Typography level="body-sm" sx={{marginBottom:'5px'}}>{TopicName}</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={Image}
          srcSet={Image}
          loading="lazy"
          alt=""
          />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
        
          <Typography sx={{ fontSize: 'lg', fontWeight: 'lg',marginTop:"10px" }}>Level:{Level}</Typography>
           {/* <Typography level="body-xs">Topic 1, Topic 2</Typography> */}
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 ,backgroundColor:"#a455ff", marginTop:"10px",
            '&:hover':{backgroundColor:"#a760f7"},
            '&:active':{backgroundColor:"#8f34f7"},
        }}
        onClick={()=>navigate('/documentmanagement')}
          >
          View
        </Button>
      </CardContent>
    </Card>
            
  );
}

