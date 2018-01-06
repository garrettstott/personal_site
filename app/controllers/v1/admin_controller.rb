class V1::AdminController < ApplicationController

  before_action :authenticate_admin!

  def index
    render json: current_admin
  end

  def projects
    personal = Project.where(project_type: 'personal')
    professional = Project.where(project_type: 'professional')
    render json: { personal: personal, professional: professional }
  end

  def project
    render json: Project.find(params[:id])
  end

  def update_project
    project = Project.find(params[:id])
    if project.update(project_params)
      render json: { success: true }
    else
      render json: { success: false, message: project.errors.full_messages.to_sentence }
    end
  end

  def delete_project
    project = Project.find(params[:id])
    if project.destroy
      render json: { success: true }
    else
      render json: { success: false, message: project.errors.full_messages.to_sentence }
    end
  end

  def experiences
    render json: Experience.all
  end

  def experience
    render json: Experience.find(params[:id])
  end

  def update_experience
    experience = Experience.find(params[:id])
    if experience.update(experience_params)
      render json: { success: true }
    else
      render json: { success: false, message: experience.errors.full_messages.to_sentence }
    end
  end

  def delete_experience
    experience = Experience.find(params[:id])
    if experience.destroy
      render json: { success: true }
    else
      render json: { success: false, message: experience.errors.full_messages.to_sentence }
    end
  end

  def profile
    render json: Profile.last
  end

  def update_profile
    profile = Profile.find(params[:id])
    if profile.update(profile_params)
      render json: { success: true }
    else
      render json: { success: false, message: profile.errors.full_messages.to_sentence }
    end
  end

  private

  def project_params
    params
      .require(:project)
      .permit(
        :name,
        :description,
        :experience_id,
        :live_url,
        :github_url,
        :project_type,
        :rank
      )
  end

  def experience_params
    params
      .require(:experience)
      .permit(
        :company,
        :location,
        :description
      )
  end

  def profile_params
    params
      .require(:profile)
      .permit(
        :bio
      )
  end
end
