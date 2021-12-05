const header = {
  homepage: 'https://cwonjin1.netlify.app/',
  title: 'Wonjin C.',
}

const about = {
  name: 'Wonjin Cho',
  role: 'Full Stack Software Engineer',
  description:
        [`Flatiron School : Software Engineering (2021) 📓`, 
        `UMBC : Financial Economics(BS) (2011) 🎓`,
        `Former Project manager & Finance analyst 🏦`,
        `Love to learn new things ✏️`,
        `Responsibility is my everything 🚨`],
  resume: 'https://drive.google.com/file/d/1Df4NYOjnBnFf7UqHJW4KRxcHY7XZswCk/view',
  social: {
    linkedin: 'https://www.linkedin.com/in/wonjin-cho-987b4219b/',
    github: 'https://github.com/cwonjin11',
  },
}

const projects = [
  {
    name: 'Lego Displayer',
    description:
      'An Single Page Application for lego builders to display, describe and share with others finished Lego projects.',
    stack: ['React, Redux, Ruby on Rails, Javascript, HTML, CSS'],
    sourceCode: 'https://github.com/cwonjin11/React-Redux-Project-lego-displayer-frontend',
    livePreview: 'https://youtu.be/_YVXtbH02pk',
  },
  {
    name: 'Dinosaur Flash Card',
    description:
      'An educational SPA to learn created lists of dinosaurs instantiated by user using user flashcards format.',
    stack: ['Javascript, Ruby on Rails, HTML, CSS'],
    sourceCode: 'https://github.com/cwonjin11/JS-Rails-Project-Frontend',
    livePreview: 'https://youtu.be/MEYGLpodaok',
  },
  {
    name: 'Rate my Hairstylist',
    description:
      'Full CRUD web app resembling a social network. Users create hairstylist reviews with ratings and comments',
    stack: ['Ruby on Rails, HTML, CSS, Omni-Auth'],
    sourceCode: 'https://github.com/cwonjin11/rate-my-hairstylist',
    livePreview: 'https://youtu.be/xepX6FujcV4',
  },
  {
    name: 'Vehicle Organizer',
    description:
      "A simple Sinatra-powered web application created to track user's vehicles",
    stack: ['Ruby, Sinatra, HTML, CSS'],
    sourceCode: 'https://github.com/cwonjin11/vehicles-organizer-sinatra',
    livePreview: 'https://youtu.be/YahNhYG3i6M',
  },
]


const miscprojects = [
  {
    name: 'Log Parser',
    description:
      'a Ruby on Rails web application that analyze event logs. User can add a log through a form and can parse the log by clicking the button. ',
    stack: ['Ruby on Rails'],
    sourceCode: 'https://github.com/cwonjin11/log-parser',
    // livePreview: 'https://youtu.be/_YVXtbH02pk',
  },
  {
    name: 'Rain Check',
    description:
      "The weather app to show a current weather using weather openweathermap API. Search for your location's weather by typing the city name.",
    stack: ['Javascript, HTML, CSS'],
    sourceCode: 'https://github.com/cwonjin11/rain-check',
    livePreview: 'https://zen-mcnulty-364e01.netlify.app/',
  },
  {
    name: 'misc project 3',
    description:
      'to be updated',
    // stack: ['Ruby on Rails, HTML, CSS, JS'],
    // sourceCode: 'https://github.com/cwonjin11/rate-my-hairstylist',
    // livePreview: 'https://youtu.be/xepX6FujcV4',
  },
]


const skills = [
  'Ruby',
  'Ruby on Rails',
  'JavaScript',
  'React',
  'Redux',
  'HTML',
  'CSS',
  'Bootstrap',
  'SASS',
  'Git',
  'SQL'
]

const contact = {
  email: 'cwonjin1@gmail.com',
}

export { header, about, projects, miscprojects, skills, contact }
