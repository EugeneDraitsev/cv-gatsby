/* eslint-disable max-len */

module.exports = {
  siteTitle: 'Hi! I\'m Eugene!',
  siteDescription: 'Eugene Draitsev CV',
  keyWords: ['frontend-developer', 'cv'],
  authorName: 'Eugene Draitsev',
  githubUsername: 'EugeneDraitsev',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `I'm software engineer, I like math, science, cats, algorithms and other boring things. I started 
  work as developer at 2011 and got an systems engineer degree at BSUIR at 2013.  Almost all my working experience 
  I worked as Fullstack develoer (Node/Java   Frontend). I really like functional programming, serverless stacks and how
  cloud platforms evolve. I currently work as a fullstack developer and mainly work with TypeScript/GraphQL/React/AWS 
  (Lambdas/Dynomo etc.).`,
  skills: [
    {
      name: 'Javascript/Typescript',
      level: 98,
    },
    {
      name: 'HTML/CSS',
      level: 95,
    },
    {
      name: 'React',
      level: 100,
    },
    {
      name: 'NodeJs',
      level: 85,
    },
    {
      name: 'AWS Services',
      level: 65,
    },
  ],
  jobs: [
    {
      company: 'eBuilder',
      date: 'Aug 2016 –  Now',
      duration: '3 years',
      location: 'Stockholm, Sweden / Minsk, Belarus',
      occupation: 'Senior Software Engineer',
      description: 'Architect and develop frontend applications, mobile apps, GraphQl services and AWS infrastructure for that (TypeScript/Node/React)',
    }, {
      company: 'ISSoft Solutions',
      date: 'Sep 2013  –  Aug 2016',
      duration: '3 years',
      location: 'Minsk, Belarus',
      occupation: '(Senior) Software Engineer',
      description: 'Develop web applications (Java backend + Angular Fronted) for customers from USA and Norway. A bit work with AWS services',
    }, {
      company: 'Qulix Systems',
      date: 'Nov 2012 –  Sep 2013',
      duration: '10 months',
      location: 'Minsk, Belarus',
      occupation: 'Software Engineer',
      description: 'Support and develop web applications for banks systems (Java + Js/Jquery)',
    }, {
      company: 'Epam Systems',
      date: 'Dec 2011 – Nov 2012',
      duration: '11 months',
      location: 'Minsk, Belarus',
      occupation: 'Junior Software Engineer',
      description: 'Work with some test project, small bugfixes in web-Java applications. Minor frontend tasks (Java/JQuery/Js)',
    },
  ],
  social: {
    telergam: 'http://t.me/drrrrrrrr',
    linkedin: 'https://www.linkedin.com/in/eugenedraitsev/',
    github: 'https://github.com/EugeneDraitsev',
    email: 'ddrrai@gmail.com',
  },
  siteUrl: 'https://eugenedraitsev.github.io/cv',
  pathPrefix: '/cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#112B48',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  pdf: 'static/Draitsev, Eugene.pdf',
  headerLinks: [
    {
      label: 'Eugene Draitsev',
      url: '/',
    },
  ],
}
