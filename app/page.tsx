'use client';
import Link from 'next/link';
import { RefObject, useEffect, useRef, useState } from 'react';

export default function Home() {

  const projects = [
    {
      name: 'Active Husky fitness App and Admin site',
      links: [
        { label: 'App Store', url: 'https://apps.apple.com/us/app/active-husky/id6743634894' },
        { label: 'PlayStore', url: 'https://play.google.com/store/apps/details?id=com.mnadim.RecreationApp' },
      ],
      description: [
        'A cross-platform fitness app for group fitness programs, with class schedules, resources, and program management for users and admins.',
        'Built with React Native/Expo, a Node.js/Express/MongoDB backend, and a Next.js + Tailwind admin dashboard.',
      ],
      images: [
        'active_husky/1.png',
        'active_husky/2.png',
        'active_husky/3.png',
        'active_husky/4.png',
        'active_husky/5.png',
      ],
      imageLayout: 'row',
    },
    {
      name: 'Japanese to Mongolian Dictionary Parser',
      links: [
        { label: 'Japanese to Mongolian Dictionary Parser', url: 'https://github.com/TheHighGroundWins/Japanese-to-Mon-Scanner' },
      ],
      description: [
        'An automated pipeline that turns scanned Japanese textbook pages into Japanese-to-Mongolian Anki flashcards.',
        'Uses OCR with language-specific filtering and spatial text alignment to correctly match definitions across scripts.',
      ],
      images: ['kana_raw.png', 'kana_result.png', 'mon_raw.png', 'mon_result.png'],
      imageLayout: 'grid',
    },
    {
      name: 'Finance Beat Predictor',
      links: [
        { label: 'Finance Beat Predictor', url: 'https://github.com/TheHighGroundWins/Beat-Predictor' },
      ],
      description: [
        'A machine learning project exploring the use of deep neural networks to predict future earnings beat performance from historical financial data.',
        'Built with PyTorch using financial metrics from SimFin, the model analyzes key company fundamentals including gross margin, operating margin, net margin, debt-to-equity ratio, and current ratio.',
        'Model performance and prediction accuracy are evaluated and visualized using Matplotlib.',
      ],
      images: ['BeatPredictor.png'],
      imageLayout: 'row',
    },
    {
      name: 'Task Scheduler',
      links: [
        { label: 'Task Scheduler', url: 'https://github.com/TheHighGroundWins/Task-Scheduler' },
      ],
      description: [
        'A full stack webapp for creating and organizing your tasks',
        'Using Next.js, React, Tailwind CSS, and typescript for frontend, Node.js for backend, PostgreSQL for database, and AWS for deployment.',
        'RDS used for SQL data matching, EC2 for backend hosting and Amplify for frontend deployment',
      ],
      images: ['TaskScheduler.png'],
      imageLayout: 'row',
    },
    {
      name: 'Box Office Record predictor',
      links: [],
      description: [
        'A Python project to predict a movie\'s success by its Box Office records and genre',
        'with Linear Regression and Linear Perceptron using Numpy, Scikit Learn, Matplot lib and Plotly Express',
      ],
      images: [
        'boxOfficeSlideShow/Linear Regression LOB.png',
        'boxOfficeSlideShow/Linear Regression Accuracy.png',
        'boxOfficeSlideShow/Linear Perceptron.png',
      ],
      imageLayout: 'grid',
    },
    {
      name: 'Naadam: Horse Jump (Game)',
      links: [
        { label: 'Naadam: Horse Jump (Game)', url: 'https://play.google.com/store/apps/details?id=com.HighGroundGames.NaadamHorseJump' },
      ],
      description: ['3D endless runner with a Mongolian theme made in Unity.'],
      images: ['slideshow/menu.jpg', 'slideshow/game.png', 'slideshow/store.png', 'slideshow/restart.png'],
      imageLayout: 'row',
    },
    {
      name: 'Judenrat: Choiceless Choices (Made by the Jewish Council)',
      links: [
        { label: 'Judenrat: Choiceless Choices (Made by the Jewish Council)', url: 'https://highgroundwins.itch.io/judenrat-choicesless-choices' },
      ],
      description: ['Document based empathy game set in the Jewish ghettos of WW2 Poland'],
      images: ['judenratSlideshow/menu.png', 'judenratSlideshow/midGame.png', 'judenratSlideshow/pausemenu.png'],
      imageLayout: 'grid',
    },
  ];

  function useInView(): [RefObject<HTMLDivElement | null>, boolean] {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.2 },
      );
      if (ref.current) observer.observe(ref.current);

      function handleScroll() {
        if (window.scrollY <= 0) {
          setIsVisible(false); // reset once user scrolls back to the very top
        }
      }
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return [ref, isVisible];
  }

  return (
    <main>
      <div className="min-h-screen
      [background-image:radial-gradient(circle_at_8%_16%,rgba(44,13,246,0.5)_0%,hsla(237,46%,12%,1)_20%,transparent_40%),radial-gradient(circle_at_50%_70%,rgba(214,0,255,0.5)_0%,hsla(237,46%,12%,1)_20%,transparent_30%),radial-gradient(circle_at_89%_19%,rgba(175,0,209,0.5)_0%,hsla(237,46%,12%,1)_20%,transparent_90%)]
       bg-[#0f0f2c]">
        <div className="flex flex-col text-center p-30 pt-60 space-y-20 justify-center text-white">
          <h1 className="text-6xl font-bold">Welcome to Juan's website</h1>
          <div className="flex flex-col gap-5">
            <img src={'faceTransp.png'} width="200" className="m-auto"/>
            
            <p className="mx-90 text-left">I'm a senior at the Khoury College of Sciences at Northeastern University
              majoring in Computer Science, and minoring in Supply Chain management. I have experience in full stack development, app development, AI/ML programming and am a fast learner capable of learning the needed tools for the task required.</p>
          </div>
        </div>
        <div className="flex flex-col w-screen text-white text-center">
          <div className="flex flex-col py-20 gap-10">
            <div className="flex flex-col gap-5">
              <h3 className="text-4xl font-bold pb-5">Programming languages and frameworks:</h3>
              <div className="flex flex-wrap space-x-10 justify-center mx-80">
                <div>
                  <img width={50} src="devicons/nextjs-plain.svg"/>
                  <p>Next.js</p>
                </div>
                <div>
                  <img width={50} src="devicons/nodejs-original.svg"/>
                  <p>Node.js</p>
                </div>
                <div>
                  <img width={50} src="devicons/html5-plain.svg"/>
                  <p>HTML</p>
                </div>
                <div>
                  <img width={50} src="devicons/python-original.svg"/>
                  <p>Python</p>
                </div>
                <div>
                  <img width={50} src="devicons/tailwindcss-original.svg"/>
                  <p>Tailwind CSS</p>
                </div>
                <div>
                  <img width={50} src="devicons/react-original.svg"/>
                  <p>React</p>
                </div>
                <div>
                  <img width={50} src="devicons/c-plain.svg"/>
                  <p>C</p>
                </div>
                <div>
                  <img width={50} src="devicons/cplusplus-plain.svg"/>
                  <p>C++</p>
                </div>
                <div>
                  <img width={50} src="devicons/csharp-plain.svg"/>
                  <p>C#</p>
                </div>
                <div>
                  <img width={50} src="devicons/git-plain.svg"/>
                  <p>Git</p>
                </div>
                <div>
                  <img width={50} src="devicons/css3-plain.svg"/>
                  <p>CSS</p>
                </div>
                <div>
                  <img width={50} src="devicons/javascript-plain.svg"/>
                  <p>Javascript</p>
                </div>
                <div>
                  <img width={50} src="devicons/typescript-plain.svg"/>
                  <p>Typescript</p>
                </div>
                <div>
                  <img width={50} src="devicons/java-plain.svg"/>
                  <p>Java</p>
                </div>
                <div>
                  <img width={50} src="devicons/numpy-plain.svg"/>
                  <p>Numpy</p>
                </div>
                <div>
                  <img width={50} src="devicons/java-plain.svg"/>
                  <p>Java Swing</p>
                </div>
                <div>
                  <img width={50} src="devicons/sqldeveloper-plain.svg"/>
                  <p>SQL</p>
                </div>
                <div>
                  <img width={50} src="devicons/react-original.svg"/>
                  <p>React Native</p>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold">Links</h1>
              <div className="flex space-x-10 justify-center">
                <div className="flex">
                  <img width={25} src={'InBug-White.png'}></img>
                  <Link href="https://www.linkedin.com/in/juan-carlos-carlos-alberto/">LinkedIn</Link>
                </div>
                <div className="flex">
                  <img width={25} src={'github-mark-white.png'}></img>
                  <Link href="https://github.com/TheHighGroundWins/">Github</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-25 text-white justify-center items-center flex flex-col gap-20 px-20">
          <h3 className="text-4xl font-bold" id="projects"  style={{ scrollMarginTop: '100px' }}>
            Projects
          </h3>
          <div className="grid grid-cols-2 gap-10 items-start">
            {projects.map((project) => {
              const [ref, isVisible] = useInView();
              return (
                <div
                  ref={ref}
                  key={project.name}
                  className={`flex flex-col gap-5 transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="flex flex-row space-x-10 items-center">
                    <div className="text-3xl">{project.name}</div>
                    {project.links.map((link) => (
                      <Link key={link.url} href={link.url} className="text-3xl text-blue-500">
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col w-full">
                    {project.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="h-auto w-200 flex overflow-hidden">
                    <div className={project.imageLayout === 'row' ? 'flex flex-row' : 'grid grid-cols-2 gap-2'}>
                      {project.images.map((img) => (
                        <img
                          key={img}
                          src={img}
                          alt={project.name}
                          className="w-full h-[300px] object-contain object-left-top"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
