import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container,
  Grid,
  Button,
  Box
} from '@mui/material';
import { CloudUpload as UploadIcon, Edit as EditIcon } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  section: {
    marginTop: theme.spacing(4),
  },
  content: {
    marginTop: theme.spacing(2),
  },
  heroImage: {
    width: '100%',
    maxWidth: 600,
    height: 'auto',
    marginBottom: theme.spacing(4),
  }
}));

function MainPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [videoSrc, setVideoSrc] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      navigate('/edit', { state: { videoSrc: url } });
    }
  };

  const triggerFileInput = () => {
    document.getElementById('file-input').click();
  };

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI Sports Editor
          </Typography>
        </Toolbar>
      </AppBar>
      
      <main className={classes.main}>
        <section className={classes.section}>
          <Container className={classes.content}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" component="h1" gutterBottom>
                  AI Sports Video Editor
                </Typography>
                <Typography variant="body1" paragraph>
                  Upload your sports videos and let our AI extract the highlights. Edit and customize your video with ease.
                </Typography>
                <input
                  type="file"
                  id="file-input"
                  accept="video/*"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <Box sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<UploadIcon />}
                    onClick={triggerFileInput}
                  >
                    Upload Video
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <img 
                  src="/draganddrop.jpg"  // public 폴더의 이미지를 참조할 때는 '/' 로 시작
                  alt="AI Video Editing" 
                  className={classes.heroImage}
                />
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  );
}

export default MainPage;
