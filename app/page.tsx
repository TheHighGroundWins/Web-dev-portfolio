import Link from "next/link";

<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" /> 

export default function Home() {
  return (
    <main>
      <div className="h-screen
      [background-image:radial-gradient(circle_at_8%_16%,rgba(44,13,246,0.5)_0%,hsla(237,46%,12%,1)_20%,transparent_40%),radial-gradient(circle_at_50%_70%,rgba(214,0,255,0.5)_0%,hsla(237,46%,12%,1)_20%,transparent_30%),radial-gradient(circle_at_89%_19%,rgba(175,0,209,0.5)_0%,hsla(237,46%,12%,1)_20%,transparent_90%)]
       bg-[#0f0f2c]">
        <div className="flex flex-col text-center p-30 pt-60 space-y-20 justify-center text-white">
            <h1 className="text-6xl font-bold">Welcome to Juan's website</h1>
            <img width="400" className="m-auto" src={"/rocket-ship.png"}/>
          </div>
      </div>
      <div className="space-y-20">
      <div className="flex flex-col w-screen h-[500px] bg-[#0f0f2c] text-white text-center">
        <img src={"/faceTransp.png"} width="200" className="m-auto"/>
        <div className="flex flex-col space-y-60 py-20 bg-[#0f0f2c]">
          <div>
        <h2 className="text-5xl font-bold pb-5">About me</h2>
      <p className="mx-90 text-left">I'm a junior at the Khourt College of Sciences at Northeastern University
           majoring in Computer Science, and minoring in Supply Chain management. I am interested in working as a web dev
           and am a fast learner capable of learning the needed tools for the task required.</p>
           </div>
      <div>
      <h3 className="text-4xl font-bold pb-5">Programming languages and frameworks:</h3>
      <div className="flex flex-wrap space-x-10 justify-center mx-80">
        <div>
         <img width={50} src="/devicons/nextjs-plain.svg"/>
        <p>Next.js</p>
        </div>
        <div>
         <img width={50} src="/devicons/html5-plain.svg"/>
        <p>HTML</p>
        </div>
        <div>
         <img width={50} src="/devicons/python-original.svg"/>
        <p>Python</p>
        </div>
        <div>
         <img width={50} src="/devicons/tailwindcss-original.svg"/>
        <p>Tailwind CSS</p>
        </div>
        <div>
         <img width={50} src="/devicons/react-original.svg"/>
        <p>React</p>
        </div>
        <div>
         <img width={50} src="/devicons/c-plain.svg"/>
        <p>C</p>
        </div>
        <div>
         <img width={50} src="/devicons/cplusplus-plain.svg"/>
        <p>C++</p>
        </div>
        <div>
         <img width={50} src="/devicons/csharp-plain.svg"/>
        <p>C#</p>
        </div>
        <div>
         <img width={50} src="/devicons/git-plain.svg"/>
        <p>Git</p>
        </div>
        <div>
         <img width={50} src="/devicons/css3-plain.svg"/>
        <p>CSS</p>
        </div>
        <div>
         <img width={50} src="/devicons/javascript-plain.svg"/>
        <p>Javascript</p>
        </div>
        <div>
         <img width={50} src="/devicons/typescript-plain.svg"/>
        <p>Typescript</p>
        </div>
        <div>
         <img width={50} src="/devicons/java-plain.svg"/>
        <p>Java</p>
        </div>
        <div>
         <img width={50} src="/devicons/numpy-plain.svg"/>
        <p>Numpy</p>
        </div>
        <div>
         <img width={50} src="/devicons/java-plain.svg"/>
        <p>Java Swing</p>
        </div>
        <div>
         <img width={50} src="/devicons/sqldeveloper-plain.svg"/>
        <p>SQL</p>
        </div>
        <div>
         <img width={50} src="/devicons/react-original.svg"/>
        <p>React Native</p>
        </div>
      </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-4xl font-bold">Links</h1>
        <div className="flex space-x-10 justify-center">
          <div className="flex">
              <img width={25} src={"/InBug-White.png"}></img>
            <Link href="https://www.linkedin.com/in/juan-carlos-carlos-alberto/">LinkedIn</Link>
            </div>
            <div className="flex">
              <img width={25} src={"/github-mark-white.png"}></img>
            <Link href="https://github.com/TheHighGroundWins/">Github</Link>
            </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </main>
  );
}
