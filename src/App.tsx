import React from 'react'
import tw from 'twin.macro'
import logo from './assets/images/logo.png'

/*
import { Button, Logo } from './components'
const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}
*/

const App = () => (
  <>
    {/* header */}
    <div tw="w-full h-10 flex items-center justify-center relative">

      {/* logo */}
      <div tw="bg-blue-900 h-full w-10 flex items-center justify-center absolute left-0">
        <img src={logo} tw="w-4 h-4" />
      </div>

      <div tw="max-w-5xl w-full h-full flex items-center">
        {/* brand name and app version*/}
        <div tw="text-sm font-medium text-blue-900">
          Pomodoro <span tw="text-blue-400">21.0</span>
        </div>
      </div>

    </div>

    {/* main */}
    {/* quote and instruction section */}
    <div tw="bg-gray-100 w-full h-screen max-h-40 flex justify-center items-center">
      <div tw="max-w-5xl w-full flex">

        {/* hr */}
        <div tw="border-l-2 border-blue-400 h-4 mt-2"></div>

        <div tw="pl-2 w-1/2">
          {/* call to action */}
          <div tw="text-blue-900 font-medium text-lg">You can break today’s plan into small steps and take the first step right away.</div>
          {/* inspired by author */}
          <div tw="text-gray-300 text-xs font-light pt-2">Inspired by Indira Gandhi</div>
        </div>

      </div>
    </div>

    {/* tasks section */}
    <div tw="w-full h-screen max-h-96 flex justify-center pt-10 relative"
      style={{ backgroundImage: "linear-gradient(to bottom, rgba(208, 230, 255, 0.9), rgba(223, 238, 255, 0.9)), url('https://i.pinimg.com/originals/3b/7f/57/3b7f574e1e03b7bb3d4c7144763678da.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
      <div tw="max-w-5xl w-full flex flex-wrap -ml-20">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div tw="absolute right-16 bottom-0 text-xs bg-blue-400 text-white py-2 w-48 text-center">
        12 pomodoro / 3.5 hrs planned
      </div>
    </div>

    {/* icons and start button */}
    <div tw="bg-white w-full flex justify-center items-center relative">
      <div tw="max-w-5xl w-full flex pt-2 text-xs">
        <div>notifications</div>
        <div tw="ml-4">sound</div>
      </div>
      <div tw="absolute right-16 top-0 bg-blue-900 text-white text-xs py-2 w-48 text-center">
        start work
      </div>
    </div>

    {/* footer */}

  </>
)

const Card = (): JSX.Element => {
  const randomTask = tasks[Math.floor(Math.random() * tasks.length)]
  return (
    <div tw="w-44 h-36 ml-10 shadow">
      <div style={{ backgroundImage: `url(${randomTask.photo})`, backgroundSize: "cover", backgroundPosition: "center center" }} tw="h-2/3 w-full" />
      <div tw="bg-blue-400 px-3 text-xs text-white h-1/3 relative flex items-center">
        <div tw="w-7 h-7 bg-gray-100 absolute rounded-full text-blue-400 flex items-center justify-center font-semibold -top-3 -left-3">{randomTask.pomodoros}</div>
        {randomTask.description}
      </div>
    </div>
  )
}

export default App
// "background-image:linear-gradient(rgba(135, 80, 156, 0.9), rgba(135, 80, 156, 0.9)), url(https://img.freepik.com/free-photo/hand-hold-magnifying-glass-orange-light-ray_23911-308.jpg?size=626&ext=jpg)"
// linear-gradient(176deg, rgba(78,88,106,1) 0%, rgba(172,190,222,1) 100%)
// linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url('https://i.pinimg.com/originals/3b/7f/57/3b7f574e1e03b7bb3d4c7144763678da.jpg')

/*
 <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
*/


const tasks = [
  {
    photo: "https://miro.medium.com/max/4000/1*9eMyWLYOqU5aqBtVoFoi3Q.jpeg",
    description: "Invat despre Typescript",
    pomodoros: 2
  },
  {
    photo: "https://cms-assets.tutsplus.com/uploads/users/30/posts/33545/preview_image/tailwind-pre.png",
    description: "Invat despre Tailwind chestiuni avansate",
    pomodoros: 2
  },
  {
    photo: "https://worldfinancialreview.com/wp-content/uploads/2020/02/growth-hacking-2.jpg",
    description: "Ma ocup de partea de growth hacking / recruiting",
    pomodoros: 2
  },
  {
    photo: "https://images.newscientist.com/wp-content/uploads/2019/05/20111917/frank-bienewald-alamy-stock-photo.png",
    description: "Programez la BravoBee",
    pomodoros: 3
  },
  {
    photo: "https://www.metro.ro/~/media/RO-Metro/image/corporate-image/despre-metro-wide.jpg?h=400&la=ro-RO&w=940",
    description: "Lucrez la proiectul MMetrics",
    pomodoros: 12
  },
]
