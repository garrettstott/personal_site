class Project < ApplicationRecord

  belongs_to :experience

  validates_presence_of :name, :experience_id, :live_url,
                        :rank, :project_type

  default_scope { order('rank asc') }

  def image_path
    ActionController::Base.helpers.image_path("#{self.name.downcase.gsub(' ', '_')}")
  rescue
    Rails.logger.info("Can't find image #{self.name.downcase}")
  end

  def as_json(options=nil)
    hash = super
    hash[:image_path] = image_path
    hash[:experience_company] = experience.company
    hash
  end
end
