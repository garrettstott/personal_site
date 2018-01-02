class V1::ProfileController < ApplicationController

  def bio_preview
    bio = Profile.last.bio
    n = 32
    preview = bio[/(\S+\s+){#{n}}/].strip
    render json: preview
  end

end
