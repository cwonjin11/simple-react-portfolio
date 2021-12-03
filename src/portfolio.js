const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://cwonjin1.netlify.app/',
  title: 'Wonjin C.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
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
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Lego Displayer',
    description:
      'An application for lego builders to display, describe and share with others their finished projects.',
    stack: ['React, Ruby on Rails, Javascript, HTML, CSS'],
    sourceCode: 'https://github.com/cwonjin11/React-Redux-Project-lego-displayer-frontend',
    livePreview: 'https://youtu.be/_YVXtbH02pk',
  },
  {
    name: 'Dinosaur Flash Card',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['avascript, Ruby on Rails, HTML, CSS'],
    sourceCode: 'https://github.com/cwonjin11/JS-Rails-Project-Frontend',
    livePreview: 'https://youtu.be/MEYGLpodaok',
  },
  {
    name: 'Rate my Hairstylist',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Ruby on Rails, HTML, CSS, JS'],
    sourceCode: 'https://github.com/cwonjin11/rate-my-hairstylist',
    livePreview: 'https://youtu.be/xepX6FujcV4',
  },
  {
    name: 'Vehicle Organizer',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Ruby, Sinatra, HTML, CSS, JS'],
    sourceCode: 'https://github.com/cwonjin11/vehicles-organizer-sinatra',
    livePreview: 'https://youtu.be/xepX6FujcV4',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
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
  // email is optional - if left empty Contact section won't show up
  email: 'cwonjin1@gmail.com',
}

export { header, about, projects, skills, contact }
