'use client'
import MainGameComponent from './components/main-game-component';
import useScreenSize from './hooks/use-screen-size';

export default function Home() {
  const screenSize = useScreenSize();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <MainGameComponent width={screenSize.width} height={screenSize.height} />
    </div>
  )
}