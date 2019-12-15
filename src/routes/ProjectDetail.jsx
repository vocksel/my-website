import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HorizontalList from '../components/HorizontalList';
import NoMatch from './NoMatch';
import projects from 'projects';
import bulma from 'bulma.scss';
import style from './ProjectDetail.scss';

const getProjectLink = (index, text) => {
	const project = projects[index];
	if (project) {
		return <Link to={`/projects/${project.slug}`}>{text}</Link>;
	} else {
		return <span>{text}</span>;
	}
};

const ProjectDetail = () => {
	const { projectId } = useParams();

	const project = projects.find(project => project.slug == projectId);
	const index = projects.indexOf(project);

	if (!project) {
		return <NoMatch />;
	}

	return (
		<div className={bulma.section}>
			<Helmet>
				<title>{project.title} &mdash; David Minnerly</title>
			</Helmet>

			<div className={bulma.container}>
				<h1 className={style.title}>{project.title} <span className={style.date}> &mdash; {project.releaseDate.getFullYear()}</span></h1>
				<p className={style.subtitle}>{project.subtitle}</p>

				<a className={style.projectLink} href={project.url} title='Check out the project online'>
					<img src={project.thumbnail} alt="" />
				</a>

				<section>
					{project.description}
				</section>

				<HorizontalList isCentered>
					{getProjectLink(index-1, '< Prev')}
					<Link to="/">Home</Link>
					{getProjectLink(index+1, 'Next >')}
				</HorizontalList>
			</div>
		</div>
	);
};

export default ProjectDetail;
