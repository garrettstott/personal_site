class Experience < ApplicationRecord

  validates_presence_of :company, :description, :location
  has_many :projects
end
