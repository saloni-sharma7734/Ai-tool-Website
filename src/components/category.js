import React, { useState, useEffect } from 'react';
import { keyframes, styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Header from './header';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import Aiimage2 from './images/ai-technology-microchip-background-futuristic-innovation-technology-remix_53876-108532.jpg';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const sparkAnimation = keyframes`
  0% { transform: scale(1) rotate(0deg); opacity: 0.5; }
  50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
  100% { transform: scale(1) rotate(360deg); opacity: 0.5; }
`;

const fadeInUpAnimation = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const textAnimation = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const AppContainer = styled('div')({
    backgroundColor: 'black',
    color: '#fff',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
});

const Sparkle = styled('div')({
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#ffcc00',
    transformOrigin: 'center',
    animation: `${sparkAnimation} 1s infinite`,
    pointerEvents: 'none',
    zIndex: 999,
    transition: 'opacity 0.5s',
    '&:hover': {
        opacity: 1,
    },
});

const HeaderPaper = styled(Paper)({
    padding: (theme) => theme.spacing(3),
    textAlign: 'left',
    marginBottom: (theme) => theme.spacing(2),
    animation: `${fadeInUpAnimation} 1s ease-out`,
    background: 'linear-gradient(90deg, #800080, #0000FF, #ff69b4)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    margin: '130px 0 20px 140px',
});

const MainContentPaper = styled(Paper)({
    padding: (theme) => theme.spacing(4),
    textAlign: 'left',
    marginBottom: (theme) => theme.spacing(4),
    animation: `${fadeInUpAnimation} 1s ease-out`,
    background: 'black',
    margin: '5px 0px 5px 60px',
});

const StyledTypography = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'Roboto, sans-serif',
    color: '#fff',
    marginBottom: '1rem',
    margin: '10px 50px 6px 80px',
});

const GetStartedButton = styled(Button)({
    backgroundColor: '#800080',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#d81b60',
    },
    alignSelf: 'flex-start',
    margin: '10px 0 0 140px',
});

const AnimatedText = styled(Typography)({
    fontSize: '1.2rem',
    color: '#fff',
    background: 'black',
    padding: '20px',
    borderRadius: '10px',
    display: 'inline-block',
    animation: `${textAnimation} 3s ease-in-out`,
    margin: '6px 0px 50px 60px',
    animationIterationCount: 1,
});

const FeaturedToolsContainer = styled('div')({
    backgroundColor: '#e6e6ff',
    color: 'Black',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'Roboto, sans-serif',
    padding: '20px',
    paddingBottom: '150px'
});

const FeaturedToolsHeading = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
});

const CardListContainer = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'reletive',
    height: '50%'
});
const CardListContainer2 = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'reletive',
    marginTop: '20px',

});
const columnContainer = styled(Col)({
    width: 'auto'



})


const CardItem = styled(Paper)(({ theme }) => ({
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
    backgroundColor: 'black',
    height: '110%',
    color: 'white',

    [theme.breakpoints.down('sm')]: {
        padding: '15px',
        margin: '8px',
        position: 'reletive',
    },
}));


const ButtonContainer = styled('div')({
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
});

const VisitButton = styled(Button)({
    backgroundColor: '#800080',
    color: '#fff',
    marginRight: '10px',
    '&:hover': {
        backgroundColor: '#d81b60',
    },
});

const SaveButton = styled(Button)({
    backgroundColor: '#800080',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#d81b60',
    },
});

const OverlappingCardContainer = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-100px',

});


const Footer = styled('div')({
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',

});


const SocialIcons = styled('div')({
    marginTop: '20px',
    '& > *': {
        margin: '0 10px',
        fontSize: '1.5rem',
        color: '#fff',
        transition: 'color 0.3s ease',
        '&:hover': {
            color: '#ffd700',
        },
    },
});
const Categeory = () => {
    const theme = useTheme();
    const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 });
    const[products,setProducts] = useState([])
    const { id } = useParams();
    const handleMouseMove = (e) => {
        setSparklePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    useEffect(() => {
        getproductbycategeory(id);
    }, [id]);
    
    const getproductbycategeory = (productId) => {
        axios
          .get(`http://localhost:4000/tool/getbycategory/${productId}`)
          .then((response) => {
            console.log( response.data);
            const firstFourItems = response.data.slice(0, 4);
            setProducts(firstFourItems);
            
          })
          .catch((error) => {
            console.error(error);
          });
      }

    return (
        <>
            <Header />
            <AppContainer>
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <HeaderPaper elevation={3}>
                            <Typography variant="h3">

                            AI Tools Categories

                            </Typography>
                        </HeaderPaper>
                        <MainContentPaper elevation={3}>
                            <StyledTypography variant="h4">
                                Explore Top AI Copywriting Tools
                            </StyledTypography>
                        </MainContentPaper>
                        <GetStartedButton variant="contained">Get Started</GetStartedButton>
                    </Grid>
                    <Grid item md={4}>
                        <Grid container spacing={3}>
                            <Grid item md={12}></Grid>
                            <Grid item md={12}>
                                <div className="d-flex justify-content-end" style={{ marginTop: '50px', marginRight: '120px' }}>
                                    <img src="https://findmyaitool.com/assets/images/3D/design-assistant.png" alt="AI Image" style={{ height: '300px' }} />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Sparkle style={{ left: sparklePosition.x, top: sparklePosition.y }} />

            </AppContainer>
            <FeaturedToolsContainer elevation={3}>
                <FeaturedToolsHeading variant="h4">
                   All Categeories
                </FeaturedToolsHeading>
                <CardListContainer container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                        <CardItem elevation={3}>
                            <a href="https://findmyaitool.com/category/copywriting" target="_blank" rel="noopener noreferrer" />
                           
                            <Typography variant="h6">Email Assistant</Typography>
                            <Typography variant="body2">Manage your inbox like a pro</Typography>
                           
                        </CardItem>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <CardItem elevation={3}>
                           
                            <Typography variant="h6">Social Media Assistant</Typography>
                            <Typography variant="body2">Copywriting</Typography>
                           
                        </CardItem>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <CardItem elevation={3}>
                            
                            <Typography variant="h6">SEO</Typography>
                            <Typography variant="body2">Top Ai SEO Tools</Typography>
                          
                        </CardItem>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <CardItem elevation={4}>
                           
                            <Typography variant="h6">Prompts</Typography>
                            <Typography variant="body2">Copywriting</Typography>
                          
                        </CardItem>
                    </Grid>
                </CardListContainer>




                
                <OverlappingCardContainer container spacing={3}>

                </OverlappingCardContainer>


            </FeaturedToolsContainer>

            <Footer>
                <Typography variant="body2">
                    © 2023 Your Company Name. All rights reserved.
                </Typography>

                <SocialIcons>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </SocialIcons>
            </Footer>
        </>
    );
};

export default Categeory;
