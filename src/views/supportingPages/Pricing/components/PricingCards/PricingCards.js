import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';

const pricing = [
  {
    title: 'Web Developer',
    price: {
      annual: 55,
      monthly: 50,
    },
    features: [
      {
        title: 'Front End UX/UI Implementation',
        isIncluded: true,
      },
      {
        title: 'Back End RESTful API development',
        isIncluded: true,
      },
      {
        title: 'SQL Integration',
        isIncluded: true,
      },
      {
        title: 'CI/CD usage for the project.',
        isIncluded: true,
      },
      {
        title: 'Test, test, test.',
        isIncluded: true,
      },
    ],
    isHighlighted: true,
    btnText: 'Hire',
  },
  {
    title: 'Game Developer',
    price: {
      annual: 50,
      monthly: 40,
    },
    features: [
      {
        title: 'Asset Design',
        isIncluded: true,
      },
      {
        title: 'Functionality coding',
        isIncluded: true,
      },
      {
        title: 'Performance improvement',
        isIncluded: true,
      },
      {
        title: '3D Model Design',
        isIncluded: true,
      },
      {
        title: 'Team Player',
        isIncluded: true,
      },
    ],
    isHighlighted: true,
    btnText: 'Hire',
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
          Expected Salary
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
            Payroll Basis
          </ToggleButton>
          <ToggleButton value="annual" size={'small'}
            sx={{
              backgroundColor: pricingOption === 'annual' ? `${theme.palette.primary.light} !important` : 'transparent',
              border: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            Per Contract
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
                  Salary {pricingOption === 'annual' ? 'per Contract' : 'at Payroll'} in USD/Hour
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
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingCards;
