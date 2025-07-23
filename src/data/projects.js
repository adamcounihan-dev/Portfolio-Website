import portfolioImg from '/src/assets/projects/portfolio-website.webp';
import revamplifyImg from '/src/assets/projects/revamplify.webp';
import nasrinImg from '/src/assets/projects/land-of-nasrin.webp';

export const coreProjects = [
    {
        name: 'Portfolio Website',
        description: 'Personal portfolio website showcasing my skills and projects, whilst focusing on responsive design, accessibility, and performance optimization across all devices.',
        tech: 'React',
        date: 'Aug 2024 - Present',
        githubUrl: 'https://github.com/adamcounihan-dev/Portfolio-Website',
        image: portfolioImg,
    },
    {
        name: 'Revamplify',
        description: 'An experimental UI/UX redesign of the Spotify Web Player, focused on creating a visually appealing and intuitive interface. Implemented OAuth2 authentication to connect user accounts, with emphasis on modern design principles and enhanced user experience.',
        tech: 'React, Node.js, Express',
        date: 'Sep 2024 - Jan 2025',
        githubUrl: 'https://github.com/adamcounihan-dev/Revamplify',
        image: revamplifyImg,
    }
];

export const allProjects = [
    ...coreProjects,
    {
        name: 'The Land of Nasrin',
        description: 'A 2D platformer game developed in Unity for my A-Level Computer Science coursework.',
        tech: 'C#, Unity',
        date: 'Sep 2022 - Feb 2023',
        githubUrl: 'https://github.com/adamcounihan-dev/TheLandOfNasrin',
        image: nasrinImg,
    },
];
