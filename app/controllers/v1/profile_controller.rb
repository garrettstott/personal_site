class V1::ProfileController < ApplicationController

  def bio_preview
    bio = Profile.last.bio
    n = 127
    preview = bio[/(\S+\s+){#{n}}/].strip
    render json: preview
  end

  def about
    render json: { bio: Profile.last.bio }
  end

end
