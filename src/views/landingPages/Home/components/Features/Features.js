/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Features = () => {
  const theme = useTheme();
  const items = [
    {
      title: 'React',
      subtitle:
        'UX/UI design and implementation, from microservices integration to writing custom hooks.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} viewBox="-11.5 -10.23174 23 20.46348">
          <title>React Logo</title>
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      ),
      link: 'https://reactjs.org/',
    },
    {
      title: 'Angular',
      subtitle:
        'Experienced in OOP front-end development as well!',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} viewBox="0 0 250 250">
          <polygon fill="#DD0031" points="125,0 12,34.75 0,190.5 125,250 250,190.5 238,34.75 "/>
          <polygon fill="#C3002F" points="125,0 125,27 125,161 125,161 125,250 250,190.5 238,34.75 "/>
          <polygon fill="#FFFFFF" points="125,27 125,27 88.25,151.75 111.75,151.75 125,113.5 138.25,151.75 161.75,151.75 "/>
        </svg>
      ),
      link: 'https://angular.io/',
    },
    {
      title: 'Next.js',
      subtitle:
        'My own preferred framework to work on top of React, using both TypeScript and JavaScript.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} viewBox="0 0 148 90">
          <path fill="currentColor" d="M34.688 23.634l19.507 27.146-19.507-8.451zM0 .522h8.408l39.922 54.03L30.13 90.102h-8.5L43.853 60.66 0 .523zm95.292 61.2l-4.116-6.556c-5.295 2.87-11.18 4.617-17.327 4.617-18.784 0-31.958-13.55-31.958-33.054C41.891 13.31 55.117.262 73.9.262c6.148 0 12.032 1.746 17.327 4.617l4.116-6.556C90.13 2.576 82.34.26 73.9.26 52.726.26 36.059 17.325 36.059 33.749 36.059 50.15 52.726 67.246 73.9 67.246c8.44 0 16.23-2.316 21.392-5.525zm52.564-11.875L97.31 0v10.942l44.708 50.112v.263H97.02v7.982h50.836v-9.693z"/>
        </svg>
      ),
      link: 'https://nextjs.org/',
    },
    {
      title: 'Java',
      subtitle:
        'REST API Development in the Spring / Springboot Framework, I write my own Tests!',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70%" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 1C5.926 1 1 5.926 1 12s4.926 11 11 11 11-4.926 11-11S18.074 1 12 1zM12 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm.5-10.5h-5v-1h5v1zm5.003 1c-.042.349-.104.689-.184 1.02-.016.066-.033.131-.049.197l-.014.055a9.114 9.114 0 01-.248.7 3.489 3.489 0 01-.268.546 1.382 1.382 0 01-.253.374c-.12.15-.256.292-.412.418-.166.133-.351.247-.553.338-.236.106-.496.182-.775.227-.095.016-.19.032-.287.045a11.1 11.1 0 01-1.054.062c-.158.003-.318.005-.478.005-.14 0-.281-.002-.42-.006a10.194 10.194 0 01-.944-.052c-.144-.01-.287-.023-.429-.038a6.86 6.86 0 01-.655-.09 4.015 4.015 0 01-.579-.136 2.85 2.85 0 01-.453-.188c-.155-.079-.303-.175-.441-.284a1.93 1.93 0 01-.425-.37 2.546 2.546 0 01-.357-.486c-.093-.17-.172-.35-.238-.536a5.51 5.51 0 01-.18-.6 9.476 9.476 0 01-.087-.79 7.403 7.403 0 01-.005-.436c0-.147.002-.295.005-.442a6.705 6.705 0 01.038-.643 5.45 5.45 0 01.078-.623c.022-.092.046-.182.072-.272.057-.19.119-.376.19-.556a2.64 2.64 0 01.356-.68c.118-.17.255-.333.413-.487a3.158 3.158 0 01.61-.494 5.525 5.525 0 01.728-.35 6.246 6.246 0 01.886-.28 9.203 9.203 0 01.969-.133c.14-.01.282-.02.425-.03s.286-.017.43-.025h.05l.081-.006h.166l.182-.006a4.584 4.584 0 01.67.02c.107.007.213.018.318.032.092.011.184.025.274.042l.124.022a7.492 7.492 0 01.986.233 4.865 4.865 0 01.653.256c.2.097.389.21.567.336a3.14 3.14 0 01.457.372c.134.131.255.272.365.421.127.166.236.342.324.523a4.773 4.773 0 01.244.637 6.832 6.832 0 01.162.68 9.28 9.28 0 01.055.719c0 .081-.002.161-.004.241a3.31 3.31 0 01-.037.328c-.03.168-.077.332-.138.488z"/>
        </svg>
      ),
      link: 'https://www.java.com/',
    },
    {
      title: 'C#',
      subtitle:
        'Experienced within the Entity Framework environment, I excel at building and maintaining API Infrastructures.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="70%" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 1C5.926 1 1 5.926 1 12s4.926 11 11 11 11-4.926 11-11S18.074 1 12 1zM12 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm.276-11.826v2.563h-2.573v-2.563h2.573zm4.926 0v2.563h-2.573v-2.563h2.573zm-5.748-4.537v1.396H8.177v-1.396h3.277zm4.926 0v1.396h-3.277v-1.396h3.277zm-8.815 7.777a3.324 3.324 0 0 0 1.23 2.777 3.317 3.317 0 0 0 2.787 1.23 3.315 3.315 0 0 0 2.787-1.23 3.322 3.322 0 0 0 1.23-2.777 3.327 3.327 0 0 0-1.23-2.787 3.32 3.32 0 0 0-2.787-1.23 3.316 3.316 0 0 0-2.787 1.23 3.324 3.324 0 0 0-1.23 2.787z"/>
        </svg>
      ),
      link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    },
    {
      title: 'Python',
      subtitle:
        'For quick and efficient implementations or complex data analysis, there is no better language.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 1C5.926 1 1 5.926 1 12s4.926 11 11 11 11-4.926 11-11S18.074 1 12 1zm.276 5.365a3.91 3.91 0 0 0-2.618 1.035 3.91 3.91 0 0 0-1.035 2.618c-.001.192.017.383.05.572l.243.045c.06.011.117.031.173.059.194.088.353.232.452.405.079.132.128.28.145.436a4.66 4.66 0 0 1-.021 1.2c-.065.428.039.856.279 1.21.095.145.212.278.348.395a.942.942 0 0 0 .566.185h1.836c.244 0 .469-.092.643-.258a.945.945 0 0 0 .258-.643v-2.672a.944.944 0 0 0-.643-.909 1.272 1.272 0 0 0-.772-.186h-1.054V7.934c0-.154.031-.307.09-.45a.943.943 0 0 1 .522-.522.948.948 0 0 1 1.269.522c.06.143.09.296.09.45v.712h2.61v-.598a.949.949 0 0 0-.225-.627.943.943 0 0 0-.522-.292 1.274 1.274 0 0 0-.91.223 3.91 3.91 0 0 0-1.14.831 3.91 3.91 0 0 0-.83 1.14zm-1.23 8.305a.943.943 0 0 0-.257.642v2.673a.943.943 0 0 0 .909.643h1.053c.278 0 .53-.112.772-.187.244-.065.47-.155.772-.311a1.274 1.274 0 0 0 .787-1.144c0-.154-.031-.308-.09-.45a.942.942 0 0 0-.522-.522.948.948 0 0 0-1.27.522c-.06.143-.09.296-.09.45v.597h-2.61v-.71c0-.155-.032-.309-.09-.451a.944.944 0 0 0-.522-.522 1.274 1.274 0 0 0-1.269.451.947.947 0 0 0-.045.147z"/>
        </svg>
      ),
      link: 'https://www.python.org/',
    },
  ];

  return (
    <Box>
      <Grid container spacing={2}>
        {items.map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Card
              variant="outlined"
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                textAlign: 'center',
              }}
            >
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mb: 2,
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                }}
              >
                {item.icon}
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {item.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                {item.subtitle}
              </Typography>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
