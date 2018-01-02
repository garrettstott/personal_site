class V1::AdminController < ApplicationController

  before_action :authenticate_admin!

  def index
    render json: current_admin
  end
end
