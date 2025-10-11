import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
      <div className="bg-[#0f0f2c] text-white">
        <div className='flex flex-col pt-40 p-30'>
        <h1 className="text-4xl font-bold pb-10">Projects</h1>
        <div className="flex flex-col space-y-20">
          <div>
            <Link href="https://main.d10gr8eauv9ac7.amplifyapp.com/" className="text-3xl text-blue-500">Task Scheduler</Link>
            <p>A full stack webapp for creating and organizing your tasks</p>
            <p>Using Next.js, React, Tailwind CSS, and typescript for frontend, Node.js for backend, PostgreSQL for database, and AWS for deployment.</p>
            <p>RDS used for SQL data matching, EC2 for backend hosting and Amplify for frontend deployment</p>
            <div className="h-80 w-200 flex">
              <img src={"TaskScheduler.png"} alt='task' className='w-full h-auto'></img>
            </div>
            </div>
            <div>
            <h1 className="text-3xl text-blue-500">Box Office Record predictor</h1>
            <p>A Python project to predict a movie's success by its Box Office records and genre</p>
            <p> with Linear Regression and Linear Perceptron using Numpy, Scikit Learn, Matplot lib and Plotly Express</p>
            <div className="size-80 flex">
              <img src={"boxOfficeSlideShow/Linear Regression LOB.png"}></img>
              <img src={"boxOfficeSlideShow/Linear Regression Accuracy.png"}></img>
              <img src={"boxOfficeSlideShow/Linear Perceptron.png"}></img>
            </div>
            </div>
          <div>
            <Link className="text-3xl text-blue-500"
            href="https://play.google.com/store/apps/details?id=com.HighGroundGames.NaadamHorseJump">Naadam: Horse Jump (Game)</Link>
            <p>3D endless runner with a Mongolian theme made in Unity.</p>
            <div className="size-80 flex">
              <img src={"slideshow/menu.jpg"}></img>
              <img src={"slideshow/game.png"}></img>
              <img src={"slideshow/store.png"}></img>
              <img src={"slideshow/restart.png"}></img>
            </div>
            </div>
            <div>
            <Link className="text-3xl text-blue-500"
            href="https://highgroundwins.itch.io/judenrat-choicesless-choices">Judenrat: Choiceless Choices (Made by the Jewish Council)</Link>
            <p>Document based empathy game set in the Jewish ghettos of WW2 Poland</p>
            <div className="h-70 flex">
              <img src={"judenratSlideshow/menu.png"}></img>
              <img src={"judenratSlideshow/midGame.png"}></img>
              <img src={"judenratSlideshow/pausemenu.png"}></img>
            </div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Projects