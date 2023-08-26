/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Features = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          Cursos
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Elige tu pasión con
          <br />
          cualquiera de nuestros cursos
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Ya sea que quieras aprender a crear tu propio videojuego o página web,
          <br />
          tenemos el curso ideal para ti.
        </Typography>
        
      </Box>
      
      <Box>
        <Typography
          variant={'h3'}
          component={'p'}
          color={'textPrimary'}
          align={'center'}
          marginBottom={4}
          fontWeight={'bold'}
        >
          React
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Paginas Web',
              subtitle:
                'Crea tus propias páginas web con React, el framework de JavaScript mas popular en la actualidad.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} viewBox="-11.5 -10.23174 23 20.46348">
                  <title>React Logo</title>
                  <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                  <g stroke="currentColor" stroke-width="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
              ),
            },
            {
              title: 'Multi-Plataforma',
              subtitle:
                'Aplicaciones Web con compatibilidad universal, para cualquier dispositivo.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} viewBox="-11.5 -10.23174 23 20.46348">
                  <title>React Logo</title>
                  <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                  <g stroke="currentColor" stroke-width="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
              ),
            },
            {
              title: 'Demanda',
              subtitle:
                'Consigue un trabajo en el area de desarrollo web, uno de los mas demandados en la actualidad.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={'70%'} viewBox="-11.5 -10.23174 23 20.46348">
                  <title>React Logo</title>
                  <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                  <g stroke="currentColor" stroke-width="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
              ),
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={Card}
                padding={4}
                borderRadius={4}
                width={'100%'}
                height={'100%'}
                data-aos={'fade-up'}
              >
                <Box display={'flex'} flexDirection={'column'}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.info.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {item.title}
                  </Box>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant={'h3'}
          component={'p'}
          color={'textPrimary'}
          align={'center'}
          marginTop={4}
          fontWeight={'bold'}

        >
          Unity
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Juegos',
              subtitle:
                'Diseña y crea tus propios videojuegos con Unity.',
              icon: (
                <svg version="1.1" id="Layer_1" fill='currentColor' width='60%' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                  viewBox="0 0 512 512">
                  <g>
                    <path d="M480,358.4V119.46L275.52,0v91.74l80.1,46.91c3.17,2.14,3.17,6.4,0,7.49l-94.88,55.46c-3.17,2.14-6.3,1.06-8.42,0
                      l-94.88-55.46c-3.17-1.09-3.17-6.4,0-7.49l80.13-46.91V0L32,119.46V358.4v-1.06v1.06l78.02-45.86v-93.89c0-3.2,4.19-5.31,6.3-4.26
                      l94.88,55.46c3.17,2.14,4.22,4.29,4.22,7.49v110.91c0,3.2-4.22,5.34-6.34,4.29l-80.1-46.94l-78.02,45.86L255.46,512l204.51-119.46
                      l-78.02-45.89l-80.06,46.94c-3.17,2.14-6.34,0-6.34-4.26V278.4c0-3.2,2.11-6.4,4.22-7.46l94.88-55.49c3.17-2.11,6.3,0,6.3,4.29
                      v93.86L480,358.4z"/>
                  </g>
                </svg>


              ),
            },
            {
              title: 'Multi-Plataforma',
              subtitle:
                'Crea juegos para múltiples plataformas, incluyendo PC, consolas, móviles y realidad virtual.',
              icon: (
                <svg version="1.1" id="Layer_1" fill='currentColor' width='60%' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                  viewBox="0 0 512 512">
                  <g>
                    <path d="M480,358.4V119.46L275.52,0v91.74l80.1,46.91c3.17,2.14,3.17,6.4,0,7.49l-94.88,55.46c-3.17,2.14-6.3,1.06-8.42,0
                      l-94.88-55.46c-3.17-1.09-3.17-6.4,0-7.49l80.13-46.91V0L32,119.46V358.4v-1.06v1.06l78.02-45.86v-93.89c0-3.2,4.19-5.31,6.3-4.26
                      l94.88,55.46c3.17,2.14,4.22,4.29,4.22,7.49v110.91c0,3.2-4.22,5.34-6.34,4.29l-80.1-46.94l-78.02,45.86L255.46,512l204.51-119.46
                      l-78.02-45.89l-80.06,46.94c-3.17,2.14-6.34,0-6.34-4.26V278.4c0-3.2,2.11-6.4,4.22-7.46l94.88-55.49c3.17-2.11,6.3,0,6.3,4.29
                      v93.86L480,358.4z"/>
                  </g>
                </svg>
              ),
            },
            {
              title: 'Divertido!',
              subtitle:
                'Que es mejor que crear tu propio videojuego?',
              icon: (
                <svg version="1.1" id="Layer_1" fill='currentColor' width='60%' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                  viewBox="0 0 512 512">
                  <g>
                    <path d="M480,358.4V119.46L275.52,0v91.74l80.1,46.91c3.17,2.14,3.17,6.4,0,7.49l-94.88,55.46c-3.17,2.14-6.3,1.06-8.42,0
                      l-94.88-55.46c-3.17-1.09-3.17-6.4,0-7.49l80.13-46.91V0L32,119.46V358.4v-1.06v1.06l78.02-45.86v-93.89c0-3.2,4.19-5.31,6.3-4.26
                      l94.88,55.46c3.17,2.14,4.22,4.29,4.22,7.49v110.91c0,3.2-4.22,5.34-6.34,4.29l-80.1-46.94l-78.02,45.86L255.46,512l204.51-119.46
                      l-78.02-45.89l-80.06,46.94c-3.17,2.14-6.34,0-6.34-4.26V278.4c0-3.2,2.11-6.4,4.22-7.46l94.88-55.49c3.17-2.11,6.3,0,6.3,4.29
                      v93.86L480,358.4z"/>
                  </g>
                </svg>
              ),
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                marginTop={4}
                component={Card}
                padding={4}
                borderRadius={4}
                width={'100%'}
                height={'100%'}
                data-aos={'fade-up'}
              >
                <Box display={'flex'} flexDirection={'column'}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.grey[900]}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {item.title}
                  </Box>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
