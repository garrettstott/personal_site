class Project < ApplicationRecord

  belongs_to :experience

  def image_path
    ActionController::Base.helpers.image_path("#{self.name.gsub(' ', '_')}.png")
  end

  def as_json(options=nil)
    hash = super
    hash[:image_path] = image_path
    hash
  end
end
