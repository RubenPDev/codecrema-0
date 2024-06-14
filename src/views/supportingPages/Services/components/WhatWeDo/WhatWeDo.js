import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { colors } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const WhatWeDo = () => {
  const theme = useTheme();
  const contactItems = [
    {
      title: 'LinkedIn',
      subtitle: '@RubenPDev',
      icon: <LinkedInIcon style={{ fontSize: 48 }} />,
      color: colors.teal,
      link: 'https://www.linkedin.com/in/RubenPDev/',
    },
    {
      title: 'Phone',
      subtitle: '+52 722 172 2869',
      icon: <PhoneIcon style={{ fontSize: 48 }} />,
      color: colors.teal,
      link: 'tel:+527221722869',
    },
    {
      title: 'Github',
      subtitle: '@RG4M3R',
      icon: <GitHubIcon style={{ fontSize: 48 }} />,
      color: colors.teal,
      link: 'https://github.com/RG4M3R',
    },
    {
      title: 'Itch.io',
      subtitle: '@RubenPE',
      icon: (
        <svg
          width={48}
          height={48}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      color: colors.teal,
      link: 'https://RubenPE.itch.io',
    },
    {
      title: 'Facebook',
      subtitle: 'Ruben Porcayo Espinoza',
      icon: <FacebookIcon style={{ fontSize: 48 }} />,
      color: colors.teal,
      link: 'https://www.facebook.com/ruben.porcayo.980',
    },
    {
      title: 'Email',
      subtitle: 'tehrg4m3r@gmail.com',
      icon: <EmailIcon style={{ fontSize: 48 }} />,
      color: colors.teal,
      link: 'mailto:tehrg4m3r@gmail.com',
    },
  ];

  return (
    <Grid container spacing={2}>
      {contactItems.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Box component={Card} boxShadow={3} borderRadius={4}>
              <Box
                component={CardContent}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                padding={{ xs: 2, sm: 4, md: 6 }}
                sx={{
                  '&:last-child': {
                    paddingBottom: { xs: 2, sm: 4, md: 6 },
                  },
                }}
              >
                <Box
                  component={Avatar}
                  variant="rounded"
                  width={84}
                  height={84}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  borderRadius={5}
                >
                  <Box color={theme.palette.primary.main}>{item.icon}</Box>
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  fontWeight={500}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="textSecondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </a>
        </Grid>
      ))}
    </Grid>
  );
};

export default WhatWeDo;
