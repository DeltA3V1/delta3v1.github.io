import './App.css'

function App() {
  const projects = [
    { title: 'Personal Website', status: 'Coming Soon' },
    { title: 'NLC Data Science & AI', status: 'Coming Soon' }
  ]

  return (
    <>
      <section id="center">
        <h1>Under Construction</h1>
        <p>More coming soon</p>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="projects">
          <h2>Projects</h2>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <strong>{project.title}</strong> {project.status}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
