import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to My Website
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This is a sample landing page using our beautiful navbar component.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900">Feature 1</h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900">Feature 2</h2>
            <p className="mt-4 text-gray-600">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900">Feature 3</h2>
            <p className="mt-4 text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </main>
      <Footer/>
    
    </>
  )
}

export default App
