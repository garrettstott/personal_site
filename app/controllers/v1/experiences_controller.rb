class V1::ExperiencesController < ApplicationController

  def all_experiences
    render json: Experience.where.not(company: 'personal')
  end

end
