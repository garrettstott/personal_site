class V1::ProjectsController < ApplicationController

  def recent_projects
    render json: Project.order(created_at: 'desc').limit(3)
  end

end
