import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';

const pricing = [
  {
    title: 'React',
    price: {
      annual: 12899,
      monthly: 4499,
    },
    features: [
      {
        title: 'Aplicaciones web con React',
        isIncluded: true,
      },
      {
        title: 'Grupo en Discord',
        isIncluded: true,
      },
      {
        title: 'Clases en vivo',
        isIncluded: true,
      },
      {
        title: 'Certificado de finalización',
        isIncluded: true,
      },
      {
        title: 'Acceso a la comunidad',
        isIncluded: true,
      },
    ],
    isHighlighted: true,
    btnText: 'Inscríbete',
  },
  {
    title: 'Unity',
    price: {
      annual: 13899,
      monthly: 4899,
    },
    features: [
      {
        title: 'Diseño de Videojuegos en Unity',
        isIncluded: true,
      },
      {
        title: 'Grupo en Discord',
        isIncluded: true,
      },
      {
        title: 'Clases en vivo',
        isIncluded: true,
      },
      {
        title: 'Certificado de finalización',
        isIncluded: true,
      },
      {
        title: 'Acceso a la comunidad',
        isIncluded: true,
      },
    ],
    isHighlighted: true,
    btnText: 'Inscríbete',
  },
];

const PricingCards = () => {
  const theme = useTheme();
  const [pricingOption, setPricingOption] = useState('annual');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography variant={'h3'} align={'center'} fontWeight={700}>
          Elige el plan adecuado para ti
        </Typography>
      </Box>
      <Box marginBottom={4} display={'flex'} justifyContent={'center'}>
        <ToggleButtonGroup value={pricingOption} exclusive onChange={handleClick}>
          <ToggleButton value="monthly" size={'small'}
            sx={{
              backgroundColor: pricingOption === 'monthly' ? `${theme.palette.primary.light} !important` : 'transparent',
              border: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            Mensual
          </ToggleButton>
          <ToggleButton value="annual" size={'small'}
            sx={{
              backgroundColor: pricingOption === 'annual' ? `${theme.palette.primary.light} !important` : 'transparent',
              border: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            Curso Completo
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {pricing.map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Card elevation={item.isHighlighted ? 4 : 0}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                  <Typography variant="h6" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Box display="flex" alignItems="flex-start">
                    <Typography variant="h4" color="primary" fontWeight={600} mr={0.5}>
                      $
                    </Typography>
                    <Typography variant="h3" color="primary" fontWeight={600}>
                      {pricingOption === 'annual' ? item.price.annual.toLocaleString() : item.price.monthly.toLocaleString()}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="subtitle2" color="textSecondary" align="center">
                  Por estudiante, por {pricingOption === 'annual' ? 'curso completo' : 'mes'}
                </Typography>
                <Box mt={4}>
                  <Grid container spacing={1}>
                    {item.features.map((feature, j) => (
                      <Grid item xs={12} key={j}>
                        <Typography component="p" align="center"
                          style={{
                            textDecoration: !feature.isIncluded ? 'line-through' : 'none'
                          }}
                        >
                          {feature.title}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={item.isHighlighted ? 'contained' : 'outlined'}
                  sx={{
                    backgroundColor: item.isHighlighted ? theme.palette.primary.main : 'transparent',
                    color: item.isHighlighted ? theme.palette.common.white : theme.palette.primary.main,
                  }}
                >
                  {item.btnText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingCards;
