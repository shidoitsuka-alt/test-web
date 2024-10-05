import { makeStyles } from '@/lib/helper';

import { colors } from '@/config/colors';

export default makeStyles({
  // Reuse
  containerWrap: {
    fontFamily: "'RussoOne', sans-serif",
    '& .barlow': {
      fontFamily: "'barlow', sans-serif",
    },
    '& .container': {
      maxWidth: '1200px',
      paddingLeft: '1.25rem',
      paddingRight: '1.25rem',
    },
    '& .actionButton': {
      filter: 'drop-shadow(10px 10px 0px rgba(0, 0, 0, 0.25))',
      textDecoration: 'unset',
      color: 'black',
      display: 'flex',
      '& span': {
        clipPath: `
          polygon(
            0 10px, 10px 10px, 10px 0,
            calc(100% - 10px) 0, calc(100% - 10px) 10px, 100% 10px,
            100% calc(100% - 10px), calc(100% - 10px) calc(100% - 10px), calc(100% - 10px) 100%,
            10px 100%, 10px calc(100% - 10px), 0 calc(100% - 10px)
          )
        `,
        backgroundColor: colors.primary.main,
        position: 'relative',
        boxShadow: `
          inset -10px -10px 0px ${colors.tertiary.main},
          inset 10px 10px 0px ${colors.primary.main}
        `,
        '&:after': {
          content: '""',
          width: '10px',
          height: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          bottom: '10px',
          right: '10px',
        },
      },
    },
    '& .textBorderShadow': {
      textShadow:
        '2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;',
    },
  },
  bannerCustomHeight: {
    height: 'calc(100vh - 80px)',
    minHeight: '900px',
    maxHeight: '900px',
    '@media (max-width: 768px)': {
      height: 'calc(100vh - 120px)', // Apply 100vh for screens less than 640px
      minHeight: '800px',
      maxHeight: '800px',
    },
    '@media (max-width: 375px)': {
      height: 'calc(100vh - 180px)', // Apply 100vh for screens less than 640px
      minHeight: '700px',
      maxHeight: '700px',
    },
    '@media (max-width: 320px)': {
      height: 'calc(100vh - 200px)', // Apply 100vh for screens less than 640px
      minHeight: '650px',
      maxHeight: '650px',
    },
  },
  gradientBackground: {
    background: 'linear-gradient(to bottom, transparent 0px, #00312F 40px)',
    marginTop: 'calc(-100vh + (100vh - 80px))',
  },
  // Cloud animation keyframes
  cloudAnimation: {
    position: 'absolute',
    '&.cloudOne': {
      top: '15%', // Initial vertical position for cloudOne
      left: '5%', // Horizontal position
      animation: 'moveCloudsOne 15s linear infinite', // Unique duration for cloudOne
    },
    '&.cloudTwo': {
      top: '45%', // Initial vertical position for cloudTwo
      left: '35%', // Horizontal position
      animation: 'moveCloudsTwo 10s linear infinite', // Unique duration for cloudTwo
    },
    '&.cloudThree': {
      top: '5%', // Initial vertical position for cloudThree
      left: '55%', // Horizontal position
      animation: 'moveCloudsThree 25s linear infinite', // Unique duration for cloudThree
    },
    '&.cloudFour': {
      top: '20%', // Initial vertical position for cloudFour
      left: '78%', // Horizontal position
      animation: 'moveCloudsFour 30s linear infinite', // Unique duration for cloudFour
    },
    '@keyframes moveCloudsOne': {
      '0%': { transform: 'translateY(0)' }, // Start position
      '50%': { transform: 'translateY(30px)' }, // Move up
      '100%': { transform: 'translateY(0)' }, // Move back down
    },
    '@keyframes moveCloudsTwo': {
      '0%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-25px)' }, // Move up
      '100%': { transform: 'translateY(0)' },
    },
    '@keyframes moveCloudsThree': {
      '0%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(35px)' }, // Move up
      '100%': { transform: 'translateY(0)' },
    },
    '@keyframes moveCloudsFour': {
      '0%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-40px)' }, // Move up
      '100%': { transform: 'translateY(0)' },
    },
  },
  birdsAnimation: {
    '&.birdsOne': {
      top: '0%', // Initial vertical position for cloudTwo
      left: '0%', // Horizontal position
      animation: 'flyBirds 40s linear infinite', // Unique duration for cloudTwo
    },
    '&.birdsTwo': {
      top: '30%',
      left: '20%',
      animation: 'flyBirds 30s linear infinite',
    },
    '@keyframes flyBirds': {
      '0%': { transform: 'translateX(100vw)' },
      '100%': { transform: 'translateX(-100vw)' },
    },
  },
});
