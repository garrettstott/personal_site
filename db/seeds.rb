# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


projects = [
  'Personal Project 1',
  'Personal Project 2',
  'Personal Project 3',
  'Personal Project 4',
  'Personal Project 5',
  'Personal Project 6',
  'Personal Project 7',
  'Personal Project 8',
  'Personal Project 9',

  'Professional Project 1',
  'Professional Project 2',
  'Professional Project 3',
  'Professional Project 4',
  'Professional Project 5',
]

experiences = [
  'personal',
  'lolo',
  'High West Digital Architects',
  'DevPoint Labs',
]

experiences.each do |e|
  experience = Experience.new
  experience.company = e
  experience.location = 'Salt Lake City, UT'
  experience.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat. Cras a rhoncus nisi, in ultrices justo. Maecenas maximus augue rhoncus leo auctor, eget tincidunt dui pharetra. Nulla volutpat a urna at feugiat. Nunc luctus egestas metus eget pretium. Nunc ante turpis, suscipit ut diam sed, consequat consectetur ligula. Donec accumsan, enim id luctus finibus, odio.'
  if experience.save
    puts '*'*10
    puts "#{e} saved"
    puts '*'*10
  else
    puts experience.errors.full_messages.to_sentence
  end
end

projects.each do |p|
  project = Project.new
  project.name = p
  project.live_url = 'https://www.google.com'
  project.github_url = 'https://www.github.com'
  project.project_type = p.split(' ').first.downcase
  project.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat. Cras a rhoncus nisi, in ultrices justo. Maecenas maximus augue rhoncus leo auctor, eget tincidunt dui pharetra. Nulla volutpat a urna at feugiat. Nunc luctus egestas metus eget pretium. Nunc ante turpis, suscipit ut diam sed, consequat consectetur ligula. Donec accumsan, enim id luctus finibus, odio.'
  project.experience_id = 1
  if project.save
    puts '*'*10
    puts "#{p} saved"
    puts '*'*10
  else
    puts project.errors.full_messages.to_sentence
  end
end

p = Profile.new
p.bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat. Cras a rhoncus nisi, in ultrices justo. Maecenas maximus augue rhoncus leo auctor, eget tincidunt dui pharetra. Nulla volutpat a urna at feugiat. Nunc luctus egestas metus eget pretium. Nunc ante turpis, suscipit ut diam sed, consequat consectetur ligula. Donec accumsan, enim id luctus finibus, odio.'
if p.save
  puts '*'*10
  puts 'profile saved'
  puts '*'*10
end
