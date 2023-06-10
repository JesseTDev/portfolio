import React from 'react';
import ProjectCard from './ProjectCard';

export type ProjectType = {
  title: string;
  gitHub: string;
  liveURL: string;
  imgURL: string;
  tech: string[];
};

const works: ProjectType[] = [
  {
    title: 'AI Surfing & Traveling Blog',
    gitHub: 'https://github.com/JesseTDev/ai-shaka-blog',
    liveURL: 'https://shaka-blog.vercel.app', 
    imgURL:
      'https://user-images.githubusercontent.com/121024534/244689764-3114af81-c937-4204-b608-a47dac54d5b6.png',
    tech: [
      'Next.js',
      'Typescript',
      'Tailwind',
      'Prisma',
      'NextAuth.js',
      'Tiptap Editor',
      'OpenAI API',
      'Chatbase Chatbot',
    ],
  },
  {
    title: 'Bookstore Project',
    gitHub: 'https://github.com/JesseTDev/bookstore-project',
    liveURL: 'https://bookstoreprojectapp.netlify.app/', 
    imgURL:
      'https://user-images.githubusercontent.com/121024534/244690567-af3fefb7-032f-43ec-9c16-a5b0ea10f020.png',
    tech: [
      'React.js',
      'Javascript',
      'Context API',
      'Styled-Components',
      'React Router',
      'Firebase',
      'MUI',
    ],
  },
  {
    title: 'Trivia App',
    gitHub: 'https://github.com/JesseTDev/trivia-project-app',
    liveURL: 'https://jesse-taylor-trivia-application.netlify.app', 
    imgURL:
      'https://user-images.githubusercontent.com/121024534/244691083-051d7676-474c-4728-9e6b-7907f5e07590.png',
    tech: [
      'React.js',
      'Javascript',
      'Context API',
      'Styled Components',
      'API Integration',
      'MUI',
    ],
  },
  {
    title: 'Redux Project',
    gitHub: 'https://github.com/JesseTDev/redux-todo-project',
    liveURL: 'https://jesse-taylor-redux-todo.netlify.app', 
    imgURL:
      'https://user-images.githubusercontent.com/121024534/244691748-fad592e4-7072-41b0-b873-083e40b4d2c4.png',
    tech: [
      'React.js',
      'Typescript',
      'Redux',
      'Styled Components',
      'MUI',
    ],
  },
  
];

const Projects = () => {
  return (
    <section className='h-full'>
      <h2 className='text-3xl font-bold mb-5 text-indigo-600'>Projects</h2>
      <div  id='projects'  className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {works.map((project: ProjectType) => (
          <ProjectCard
            key={project.title}
            imgURL={project.imgURL}
            title={project.title}
            tech={project.tech}
            gitHub={project.gitHub}
            liveURL={project.liveURL}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
