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
          <Social url="https://www.linkedin.com/in/jean-leal/">
            <FaFacebook size={35} color='fff' />
          </Social>
        </footer>

      </main>

    </div>
  )
}