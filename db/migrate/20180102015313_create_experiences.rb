class CreateExperiences < ActiveRecord::Migration[5.1]
  def change
    create_table :experiences do |t|

      t.string :company
      t.string :location
      t.string :description
      t.text   :job_title
      t.string :dates

      t.timestamps
    end
  end
end
