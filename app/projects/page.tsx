import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
      <div className="bg-[#0f0f2c] text-white">
        <div className='flex flex-col pt-40 p-30'>
        <h1 className="text-4xl font-bold pb-10">Projects</h1>
        <div className="flex flex-col space-y-20">
          <div>
            <Link className="text-3xl text-blue-500"
            href="https://play.google.com/store/apps/details?id=com.HighGroundGames.NaadamHorseJump">Naadam: Horse Jump (Game)</Link>
            <p>3D endless runner with a Mongolian theme made in Unity.</p>
            <div className="size-80 flex">
              <img src={"/slideshow/menu.jpg"}></img>
              <img src={"/slideshow/game.png"}></img>
              <img src={"/slideshow/store.png"}></img>
              <img src={"/slideshow/restart.png"}></img>
            </div>
            </div>
            <div>
            <Link className="text-3xl text-blue-500"
            href="https://highgroundwins.itch.io/judenrat-choicesless-choices">Judenrat: Choiceless Choices (Made by the Jewish Council)</Link>
            <p>Document based empathy game set in the Jewish ghettos of WW2 Poland</p>
            <div className="size-80 flex">
              <img src={"/judenratSlideshow/menu.png"}></img>
              <img src={"/judenratSlideshow/midGame.png"}></img>
              <img src={"/judenratSlideshow/pausemenu.png"}></img>
            </div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Projects