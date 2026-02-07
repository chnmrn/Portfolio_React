import dashboard from '../../assets/images/Projects/Dashboard.jpeg';
import kinderCare from '../../assets/images/Projects/KinderCare.png';
import evolve from '../../assets/images/Projects/Evolve.png';
import slimeDum from '../../assets/images/Projects/SlimeDum.png';

const projectsData = [
  {
    title: 'Dataslate',
    description: 'An app for managing GitHub repository tasks locally, built with Next.js.',
    image: dashboard,
    alt: 'Dataslate',
    github: 'https://github.com/chnmrn/Dataslate'
  },
  {
    title: 'Kinder Care',
    description: 'An academic system for "Centro Infantil Agroecologico La Granja".',
    image: kinderCare,
    alt: 'KinderCare',
    github: 'https://github.com/auditore22/kinder-care'
  },
  {
    title: 'Evolve',
    description: 'A Client/Server system for the beauty salon "Evolve", built with PHP.',
    image: evolve,
    alt: 'Evolve',
    github: 'https://github.com/kevinga28/SC502_3C2023_L_G04'
  },
  {
    title: 'SlimeDum',
    description: 'A short platforming video game about a slime, built in C# and Unity.',
    image: slimeDum,
    alt: 'SlimeDum',
    github: 'https://github.com/chnmrn/Slime-Dum'
  }
];

export default projectsData;