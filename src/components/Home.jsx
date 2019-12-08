import React from 'react';
import classNames from 'classnames';
import Experience from './Experience';
import HorizontalList from './HorizontalList';
import Keyword from './Keyword';
import ProjectTile from './ProjectTile';
import bulma from 'bulma.scss';
import { ProjectType } from 'types';
import getAge from 'getAge';
import experiences from 'experiences';
import projects from 'projects';
import boy from 'boy.jpg';

export default class Home extends React.Component {
	getFreelanceProjects() {
		const freelance = projects.filter(project => project.type === ProjectType.Game);

		return freelance.map(project =>
			<ProjectTile key={project.slug} project={project} />);
	}

	getCodeProjects() {
		const code = projects.filter(project => project.type === ProjectType.Code);

		// Need a new component to return. Should be just be a list of my code projects
		return code.map(project =>
			<ProjectTile key={project.slug} project={project} />);
	}

	render() {
		return (
			<React.Fragment>
				<section className={classNames(bulma.section, bulma.columns)}>
					<div className={bulma.column}>
						<h1>About</h1>

						<p>I'm <Keyword>David Minnerly</Keyword>&mdash;a {getAge()} year old freelance programmer and 3D modeler that loves creating new experiences through artistic mediums. 💖</p>

						<HorizontalList>
							<a href="https://twitter.com/vocksel_" title="Follow on Twitter for updates">Twitter</a>
							<a href="https://github.com/vocksel" title="Check out my code on GitHub">GitHub</a>
							<a href="https://www.linkedin.com/in/david-minnerly-916809149/" title="Connect with me on LinkedIn">LinkedIn</a>
							<a href="mailto:voxeldavid@gmail.com" title="Shoot me an email">Email</a>
						</HorizontalList>
					</div>

					<div className={classNames(bulma.column, bulma['is-narrow'])}>
						<img className={bulma.image} src={boy} alt="" />
					</div>
				</section>

				<section className={bulma.section}>
					<h1>Experience</h1>

					{experiences.map(exp => <Experience exp={exp} />)}
				</section>

				<section className={bulma.section}>
					<h1>Projects</h1>

					<div className={bulma.columns}>
						{this.getFreelanceProjects()}

						{this.getCodeProjects()}
					</div>
				</section>
			</React.Fragment>
		);
	}
}
