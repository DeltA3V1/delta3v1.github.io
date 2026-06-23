const projects = [
  { title: 'Personal Website', status: 'Coming Soon' },
  { title: 'NLC Data Science & AI', status: 'Coming Soon' },
]

const root = document.getElementById('root')

if (!root) {
  throw new Error('Missing root element')
}

const centerSection = document.createElement('section')
centerSection.id = 'center'

const heading = document.createElement('h1')
heading.textContent = 'Under Construction'

const subtitle = document.createElement('p')
subtitle.textContent = 'More coming soon'

centerSection.append(heading, subtitle)

const firstTicks = document.createElement('div')
firstTicks.className = 'ticks'

const nextSteps = document.createElement('section')
nextSteps.id = 'next-steps'

const projectsPanel = document.createElement('div')
projectsPanel.id = 'projects'

const projectsHeading = document.createElement('h2')
projectsHeading.textContent = 'Projects'

const projectList = document.createElement('ul')

for (const project of projects) {
  const item = document.createElement('li')
  const title = document.createElement('strong')
  title.textContent = project.title

  item.append(title, ` ${project.status}`)
  projectList.append(item)
}

projectsPanel.append(projectsHeading, projectList)
nextSteps.append(projectsPanel)

const secondTicks = document.createElement('div')
secondTicks.className = 'ticks'

const spacer = document.createElement('section')
spacer.id = 'spacer'

root.replaceChildren(centerSection, firstTicks, nextSteps, secondTicks, spacer)