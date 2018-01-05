# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


projects =
  [
    {
      name: 'Personal Site',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'personal',
      live_url: 'https://www.garrettstott.com/',
      github_url: 'https://github.com/garrettstott/personal_site',
      experience_id: 1,
      rank: 1,
    },
    {
      name: 'Saas Project Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'personal',
      live_url: 'https://aegrescovitaesaas.herokuapp.com/',
      github_url: 'https://github.com/garrettstott/saas-project',
      experience_id: 1,
      rank: 2,
    },
    { name: 'Stock Tracker',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'personal',
      live_url: 'https://aegrescovitaestocktracker.herokuapp.com',
      github_url: 'https://github.com/garrettstott/finance-tracker',
      experience_id: 1,
      rank: 2,
    },
    {
      name: 'Blecher',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'personal',
      live_url: 'https://belcher.herokuapp.com/',
      github_url: 'https://github.com/justinewalt/belcher',
      experience_id: 1,
      rank: 2,
    },
    {
      name: 'Recipes App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'personal',
      live_url: 'https://aegrescovitaerecipes.herokuapp.com/',
      github_url: 'https://github.com/garrettstott/myRecipes',
      experience_id: 1,
      rank: 3,
    },
    {
      name: 'Photo App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'personal',
      live_url: 'https://aegrescovitaephotoapp.herokuapp.com/',
      github_url: 'https://github.com/garrettstott/photo_app',
      experience_id: 1,
      rank: 4,
    },







    {
      name: 'Yes! Fitness Music',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'professional',
      live_url: 'http://www.yesfitnessmusic.com/',
      github_url: nil,
      experience_id: 1,
      rank: 2,
    },
    {
      name: 'Unleash The Beats',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'professional',
      live_url: 'http://www.unleashthebeats.com/',
      github_url: nil,
      experience_id: 1,
      rank: 3,
    },
    {
      name: 'Clementune',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'professional',
      live_url: 'http://clementune.yesfitnessmusic.com/',
      github_url: nil,
      experience_id: 1,
      rank: 4,
    },
    {
      name: 'Yes!Go',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'professional',
      live_url: 'https://www.getyesgo.com/',
      github_url: nil,
      experience_id: 1,
      rank: 2,
    },
    {
      name: 'Jillian Michaels',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'professional',
      live_url: 'https://www.jillianmichaels.com/',
      github_url: nil,
      experience_id: 1,
      rank: 1,
    },
    {
      name: 'Jillian Michaels API',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'professional',
      live_url: 'https://www.jillianmichaels.com/app',
      github_url: nil,
      experience_id: 1,
      rank: 1,
    },
    {
      name: 'Performance Auto',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'professional',
      live_url: 'https://www.performanceut.com/',
      github_url: nil,
      experience_id: 1,
      rank: 5,
    },
    {
      name: 'DevPoint Labs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      project_type: 'professional',
      live_url: 'http://devpointlabs.com/',
      github_url: nil,
      experience_id: 5,
    },
  ]

experiences =
  [
    {
      company: 'personal',
      location: 'Salt Lake City, UT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
    },
    { company: 'lolo',
      location: 'Salt Lake City, UT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
    },
    {
      company: 'High West Digital Architects',
      location: 'Salt Lake City, UT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
    },
    {
      company: 'DevPoint Labs',
      location: 'Salt Lake City, UT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
    }
  ]

experiences.each do |e|
  e = OpenStruct.new(e)
  experience = Experience.new
  experience.company = e.company
  experience.location = e.location
  experience.description = e.description
  if experience.save
    puts experience.company
  else
    puts experience.errors.full_messages.to_sentence
  end
end


projects.each do |p|
  p = OpenStruct.new(p)
  project = Project.new
  project.name = p.name
  project.description = p.description
  project.project_type = p.project_type
  project.live_url = p.live_url
  project.github_url = p.github_url
  project.experience_id = p.experience_id
  project.rank = p.rank
  if project.save
    puts "#{ project.name } saved"
  else
    puts project.errors.full_messages.to_sentence
  end
end

p = Profile.create(
 bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat. Cras a rhoncus nisi, in ultrices justo. Maecenas maximus augue rhoncus leo auctor, eget tincidunt dui pharetra. Nulla volutpat a urna at feugiat. Nunc luctus egestas metus eget pretium. Nunc ante turpis, suscipit ut diam sed, consequat consectetur ligula. Donec accumsan, enim id luctus finibus, odio.'
)

puts p.id ? 'Profile saved' : 'Profile not saved'

a = Admin.create(
  email: 'garrettstott@gmail.com',
  password:'password'
)

puts a.id ? 'Admin saved' : 'Admin not saved'
