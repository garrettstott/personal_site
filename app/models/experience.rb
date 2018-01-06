class Experience < ApplicationRecord

  validates_presence_of :company, :description, :location
  has_many :projects

  def as_json(options=nil)
    hash = super
    hash[:projects] = projects
    hash
  end
end
