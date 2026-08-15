import Card from "../ui/Card";

export function About() {
  return (
    <section id="about" className="font-inter flex flex-col items-center justify-between bg-dominant transition-colors duration-300 gap-16">
      <Card header="@PNW" text="Hey there! I’m Dylan, an incoming CS student @ UW exploring the field of Computer Science. Some of my favorite spots around Lower WA and OR include Lacamas Lake (Camas), Pacific City (West OR), and the Columbia River Gorge."/>
      <Card header="Pathway" text="I started my journey on Scratch 2.0. I’ve mainly built in Java, Python, JS since then, spending some time with open-source software like Google’s MediaPipe and recreating games like Machi Koro in the digital space. Recently, I've been learning React, Tailwind, and TypeScript, using them to build this website."/>
      <Card header="Present" text={"I love creating simulations of real world mechanisms. Some of my creations can be found further down (Portfolio).\nI’m interested in and actively exploring Cybersecurity, Data Science, and AI."}/>
    </section>
  )
}