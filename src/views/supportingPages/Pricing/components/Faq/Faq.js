import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Faq = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Preguntas Frecuentes
        </Box>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: 'Hay forma de conseguir una beca?',
            subtitle:
              'Conforme a tu desempeño en el curso, puedes obtener una beca de hasta el 100% en tu siguiente curso.',
          },
          {
            title: 'Puedo cancelar?',
            subtitle:
              'Si, puedes cancelar en cualquier momento, pero no se hará reembolso de tu plan ya adquirido.',
          },
          {
            title: 'Debo terminar el curso para obtener certificado?',
            subtitle:
              'Si, debes terminar el curso para obtener tu certificado de finalización.',
          },
          {
            title: 'Me puedo cambiar de curso?',
            subtitle:'Si, puedes cambiarte de curso en cualquier momento, pero no se hará reembolso de tu plan ya adquirido. En el caso de pasar de React a Unity deberás pagar la diferencia de precio.'
          },
          {
            title: 'Que sucede si el curso es demasiado dificil para mi?',
            subtitle:
              'Nuestros maestros están dedicados a ofrecer apoyo personal si lo necesitas, si aún así no puedes continuar, puedes cambiar de curso o cancelar tu plan.',
          },
          {
            title: 'Que pasa si no apruebo?',
            subtitle:
              'Si no apruebas el curso, puedes volver a tomar el curso desde el mes en que prefieras, dependiendo de tu desempeño previo, se puede considerar un costo reducido',
          },
        ].map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Typography fontWeight={600} gutterBottom>
              {item.title}
            </Typography>
            <Typography color="text.secondary">{item.subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Faq;
