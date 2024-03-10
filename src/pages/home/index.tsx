import { Social } from '../../components/social'

import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'


export function Home() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl text-3xl text-white font-bold mt-20">Página de Links</h1>
      <span className="text-gray-50 mb-5 mt-5">Veja meus links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a>
            <p className="text-base md:text-lg">
              Canal no youtube
            </p>
          </a>
        </section>
        
        <footer className="flex justify-center gap-3 my-4">
          {/* <Social url="https://www.facebook.com/jean.c.leal.7/"> */}
          <Social url="/login">
            <FaFacebook size={35} color='#1877F2' />
          </Social>

          <Social url="https://www.linkedin.com/in/jean-leal/">
            <FaLinkedin size={36} color='#0e76a8' />            
          </Social>

          <Social url="https://github.com/Jeanll7">
            <FaGithub size={34} color='#fff' />
          </Social>
        </footer>

      </main>

    </div>
  )
}