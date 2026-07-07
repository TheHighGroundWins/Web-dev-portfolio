import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
      <div className="bg-[#0f0f2c] text-white">
        <div className='flex flex-col pt-40 p-30'>
        <h1 className="text-4xl font-bold pb-10">Projects</h1>
        <div className="flex flex-col space-y-20">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row space-x-10">
          <div className="text-3xl">Active Husky fitness App and Admin site</div>
          <Link href="https://apps.apple.com/us/app/active-husky/id6743634894" className="text-3xl text-blue-500">App Store</Link>
          <Link href="https://play.google.com/store/apps/details?id=com.mnadim.RecreationApp" className="text-3xl text-blue-500">PlayStore</Link>
          </div>
          <div className="flex flex-col w-300">
            <p>Active Husky is a cross-platform fitness application designed to support group fitness programs by providing users with access to class schedules, fitness resources, and streamlined program management.</p>
<p>The application was built for iOS and Android using React Native and Expo, with a supporting backend infrastructure designed to handle user activity, scheduling, and core application operations.</p>
<p>The system includes a scalable backend built with Node.js, Express.js, and MongoDB, along with an administrative dashboard developed using React, Next.js, and Tailwind CSS for managing application content and fitness program operations.</p>
<p>The project focuses on creating a reliable and efficient platform that improves the organization, accessibility, and management of group fitness services.</p>
</div>

            <div className="h-auto w-200 flex overflow-hidden">
              <div className="flex flex-row">
                            <img src={"active_husky/1.png"} alt='beat' className='w-full h-[300px] object-cover object-top'></img>
              <img src={"active_husky/2.png"} alt='beat' className='w-full h-[300px] object-cover object-top'></img>
              <img src={"active_husky/3.png"} alt='beat' className='w-full h-[300px] object-cover object-top'></img>
              <img src={"active_husky/4.png"} alt='beat' className='w-full h-[300px] object-cover object-top'></img>
              <img src={"active_husky/5.png"} alt='beat' className='w-full h-[300px] object-cover object-top'></img>

              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
          <Link href="https://github.com/TheHighGroundWins/Japanese-to-Mon-Scanner" className="text-3xl text-blue-500">Japanese to Mongolian Dictionary Parser</Link>
          <div className="flex flex-col w-300">
            <p>This project focused on building an automated pipeline for creating Japanese-to-Mongolian vocabulary flashcards from scanned learning materials.</p>
<p>The system processes cropped textbook images, extracts multilingual text through OCR, and organizes the results into structured data suitable for Anki import.</p>
<p>To address challenges with multilingual OCR, the pipeline separates text by language and writing system, applies Unicode-based filtering to improve extraction quality, and uses spatial information such as Y-axis positioning to correctly associate definitions across different languages.</p>
<p>The final output is a collection of automatically generated Anki flashcards, reducing the manual effort required to create vocabulary study materials.</p>
</div>
            <div className="h-150 w-200 flex overflow-hidden">
              <div className="flex flex-row">
              <div className="flex flex-col">
              <img src={"kana_raw.png"} alt='beat' className='w-full h-[300px] object-cover object-top'></img>
              <img src={"kana_result.png"} alt='beat' className='w-full h-auto'></img>
              </div>
              <div className="flex flex-col">
              <img src={"mon_raw.png"} alt='beat' className='w-full h-[300px] object-cover object-top'></img>
              <img src={"mon_result.png"} alt='beat' className='w-full h-auto'></img>
              </div>
              </div>
            </div>
          </div>
          <div>
          <Link href="https://github.com/TheHighGroundWins/Beat-Predictor" className="text-3xl text-blue-500">Finance Beat Predictor</Link>
          <div className="flex flex-col w-300">
            <p>A machine learning project exploring the use of deep neural networks to predict future earnings beat performance from historical financial data.</p>
            <p>Built with PyTorch using financial metrics from SimFin, the model analyzes key company fundamentals including gross margin, operating margin, net margin, debt-to-equity ratio, and current ratio.</p>
            <p>Model performance and prediction accuracy are evaluated and visualized using Matplotlib.</p>
            </div>
            <div className="h-80 w-200 flex">
              <img src={"BeatPredictor.png"} alt='beat' className='w-full h-auto'></img>
            </div>
          </div>
          <div>
            <Link href="https://github.com/TheHighGroundWins/Task-Scheduler" className="text-3xl text-blue-500">Task Scheduler</Link>
            <p>A full stack webapp for creating and organizing your tasks</p>
            <p>Using Next.js, React, Tailwind CSS, and typescript for frontend, Node.js for backend, PostgreSQL for database, and AWS for deployment.</p>
            <p>RDS used for SQL data matching, EC2 for backend hosting and Amplify for frontend deployment</p>
            <div className="h-80 w-200 flex">
              <img src={"TaskScheduler.png"} alt='task' className='w-full h-auto'></img>
            </div>
            </div>
            <div>
            <h1 className="text-3xl">Box Office Record predictor</h1>
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