/* eslint-disable max-len */

module.exports = {
  siteTitle: 'Eugene Draitsev',
  siteDescription: 'Eugene Draitsev CV',
  keyWords: ['Eugene Draitsev', 'software-engineer', 'frontend-developer'],
  authorName: 'Eugene Draitsev',
  githubUsername: 'EugeneDraitsev',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `My name is Eugene and I'm software engineer. I like math, science, cats, algorithms and other 
  boring things. I started work as developer at 2011 and got an systems engineer degree at BSUIR at 2013. 
  I've worked almost all my experience as a fullstack developer (Node/Java + Frontend). 
  I really like functional programming, serverless approach and cloud platforms. 
  I currently work as a fullstack developer and mainly work with React, TypeScript, GraphQL and AWS`,
  details: {
    name: 'Eugene Draitsev',
    age: 29,
    position: 'Senior Fullstack Engenier',
    location: 'Stockholm, Sweden',
  },
  skills: [
    {
      name: 'Programming Languages',
      data: [
        { name: 'Javascript', value: 5 },
        { name: 'Typescript', value: 4.5 },
        { name: 'HTML', value: 5 },
        { name: 'CSS', value: 5 },
        { name: 'Java', value: 3.5 },
        { name: 'Swift', value: 3 },
      ],
    },
    {
      name: 'Tools & Technologies',
      data: [
        { name: 'React', value: 5 },
        { name: 'ReactNative', value: 4.5 },
        { name: 'AWS', value: 4 },
        { name: 'Node', value: 4 },
        { name: 'D3', value: 4.5 },
        { name: 'GraphQL', value: 4.5 },
        { name: 'Angular', value: 3.5 },
        { name: 'Vue', value: 3.5 },
        { name: 'SQLDatabases', value: 3.5 },
        { name: 'NonSQLDatabases', value: 3.5 },
      ],
    },
  ],
  languages: [
    { name: 'Russian', value: 5 },
    { name: 'English', value: 4 },
  ],
  jobs: [
    {
      company: 'eBuilder',
      companyIcon: 'ebuilder',
      date: 'Aug 2016 –  Now',
      duration: '3 years',
      location: 'Stockholm, Sweden / Minsk, Belarus',
      occupation: 'Senior Software Engineer',
      description: `Architect and develop frontend applications, mobile apps, 
      GraphQl services and AWS infrastructure for it (TypeScript/Node/React)`,
    }, {
      company: 'ISSoft Solutions',
      companyIcon: 'issoft',
      date: 'Sep 2013  –  Aug 2016',
      duration: '3 years',
      location: 'Minsk, Belarus',
      occupation: '(Senior) Software Engineer',
      description: `Develop and later architect web applications (Java backend + Angular/React Fronted) for customers
       from USA and Norway. AWS and docker-based infrastructure`,
    }, {
      company: 'Qulix Systems',
      companyIcon: 'qulix',
      date: 'Nov 2012 –  Sep 2013',
      duration: '10 months',
      location: 'Minsk, Belarus',
      occupation: 'Software Engineer',
      description: 'Support and develop web applications for banks systems (Java + Js/Jquery)',
    }, {
      company: 'Epam Systems',
      companyIcon: 'epam',
      date: 'Dec 2011 – Nov 2012',
      duration: '11 months',
      location: 'Minsk, Belarus',
      occupation: 'Junior Software Engineer',
      description: 'Work with some test project, small bugfixes in web-Java applications. Minor frontend tasks (Java/JQuery/Js)',
    },
  ],
  education: [
    {
      name: 'Belarusian State University of Informatics and Radioelectronics',
      icon: 'bsuir',
      startYear: 2008,
      endYear: 2013,
      specialization: 'System Engineer',
      degreeLevel: 'Specialist/Master in Computer Science',
      location: 'Minsk, Belarus',
    },
  ],
  social: {
    telergam: 'http://t.me/drrrrrrrr',
    linkedin: 'https://www.linkedin.com/in/eugenedraitsev/',
    github: 'https://github.com/EugeneDraitsev',
    email: 'ddrrai@gmail.com',
  },
  siteUrl: 'https://eugene-draitsev.netlify.com/',
  siteCover: '/images/cover.jpeg',
  background_color: '#000',
  theme_color: '#424242',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  pdf: 'static/eugene-draitsev.pdf',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
  ],
}
