import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import { keyframes, styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
// import Header from './header';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import Aiimage2 from './images/ai-technology-microchip-background-futuristic-innovation-technology-remix_53876-108532.jpg';
import { Col } from 'react-bootstrap';

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
    minHeight: '100vh',
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
const LoginForm = () => {
    const theme = useTheme();
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setSparklePosition({ x: e.clientX, y: e.clientY });
  };

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Login submitted:', loginData);

   
    setIsSubmitted(true);
  };

  return (
    <>
    <Header/>
    <AppContainer>
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <HeaderPaper elevation={3}>
                            <Typography variant="h3">
                            Hello,<br></br>
                                Welcome User!

                            </Typography>
                        </HeaderPaper>
                        <MainContentPaper elevation={3}>
                            <StyledTypography variant="h4">
                                Please Login Here...
                            </StyledTypography>
                        </MainContentPaper>
                        
                    </Grid>
                    <Grid item md={4}>
                        <Grid container spacing={3}>
                            <Grid item md={12}></Grid>
                            <Grid item md={12}>
                            <div className="container mt-5">
      <div className="card p-4" style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#333',width:'100%',marginRight:'150px', color: '#ecf0f1',height:'400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        {!isSubmitted ? (
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  placeholder='Enter Your Username'
                  className="form-control"
                  id="username"
                  name="username"
                  value={loginData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder='Enter Your password'
                  className="form-control"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
            <p className="text-center mt-3">
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-center mb-4">Welcome back, {loginData.username}!</h3>
            
          </div>
        )}
      </div>
    </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Sparkle style={{ left: sparklePosition.x, top: sparklePosition.y }} />

            </AppContainer>
    
    </>
  );
};

export default LoginForm;
