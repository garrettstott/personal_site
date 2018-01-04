class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|

      t.string :name
      t.string :live_url
      t.string :github_url
      t.string :project_type

      t.references :experience, foreign_key: true

      t.timestamps
    end
  end
end
