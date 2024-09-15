import type { Schema, Attribute } from '@strapi/strapi';

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'check';
  };
  attributes: {
    name: Attribute.String;
    rating: Attribute.Integer;
  };
}

export interface ProjectsProjects extends Schema.Component {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'Projects';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    liveDemo: Attribute.Text;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'user';
  };
  attributes: {
    title: Attribute.String;
    companyName: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    workSummery: Attribute.Text;
  };
}

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
    description: '';
  };
  attributes: {
    universityName: Attribute.String;
    degree: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    summary: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'skills.skills': SkillsSkills;
      'projects.projects': ProjectsProjects;
      'experience.experience': ExperienceExperience;
      'education.education': EducationEducation;
    }
  }
}
