import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <main className="bg-gray-50">
        <section className="bg-gray-500 py-8 w-screen bg-hero-pattern bg-cover bg-fixed">
          <header className="flex flex-col justify-center items-center h-full  text-gray-50">
            <div className="divide-y  flex flex-col justify-center items-center gap-5">
              <h1 className="text-4xl md:text-8xl">RABBITCON</h1>
              <p className="pt-5 w-3/4 text-center">
                'm baby retro YOLO yr direct trade, brooklyn scenester coloring
                book selvage messenger bag. Meh prism taxidermy austin brunch
                ethical. Pabst mlkshk polaroid shaman bushwick vexillologist
                fingerstache. Try-hard church-key fingerstache tote bag
                gastropub 8-bit etsy readymade.
              </p>
            </div>
            <button className="mt-10 bg-pink-600 rounded py-2 w-40 font-light shadow hover:bg-pink-200 hover:text-gray-700">
              Reserve Today
            </button>
          </header>
        </section>
      </main>
    </Layout>
  )
}
