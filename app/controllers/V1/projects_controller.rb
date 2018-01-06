class V1::ProjectsController < ApplicationController

  def recent_projects
    render json: Project.where(project_type: 'professional').order(rank: 'desc').limit(3)
  end

  def all_projects
    projects = Project.all
    personal = projects.where(project_type: 'personal')
    professional = projects.where(project_type: 'professional')
    render json: { personal: personal, professional: professional }
  end

end
