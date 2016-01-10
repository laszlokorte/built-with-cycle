import {Observable} from 'rx';
import {div, a, h2, h3, img, hr} from '@cycle/dom';

import projects from '../data/projects';

const INSTRUCTIONS = `
Submit a new project by making a pull request or issue against this <a href="https://github.com/Widdershin/built-with-cycle">project's repository</a>.
`;

function renderSidebar () {
  return (
    div('.sidebar', [

      a({href: 'http://cycle.js.org', target: '_blank'}, [
        img({src: 'assets/cyclejs_logo.svg', alt: 'Cycle.js'})
      ]),

      h2('Built with Cycle.js'),

      hr(),

      div('.instructions', {innerHTML: INSTRUCTIONS}),

      hr(),

      div('.credit', [
        'Built by ',
        a({href: 'https://github.com/Widdershin'}, 'Widdershin'),
        ' with the help of ',
        a({href: 'https://github.com/Widdershin/graphs/contributors'}, "Cycle's community"),
        '.'
      ]),
      hr(),
    ])
  );
}

function renderProject (project) {
  return (
    div('.project', [
      div('.project-header', [
        a('.homepage', {href: project.homepage, target: '_blank'}, [
          h3('.name', project.name)
        ]),

        a('.repo', {href: project.repository, target: '_blank'}, [
          img('.repo-img', {src: 'assets/github.svg', alt: project.name})
        ])
      ]),

      div('.description', project.description),

      a('.homepage', {href: project.homepage, target: '_blank'}, [
        img('.screenshot', {src: project.screenshot, alt: project.name})
      ]),

      hr()
    ])
  );
}

function renderProjects (projects) {
  return (
    div('.projects', projects.map(renderProject))
  );
}

export default function App ({DOM}) {
  return {
    DOM: Observable.just(
      div('.built-with-cycle', [
        renderSidebar(),
        renderProjects(projects)
      ])
    )
  };
}
