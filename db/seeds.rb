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
      project_type: 'personal',
      live_url: 'https://www.garrettstott.com/',
      github_url: 'https://github.com/garrettstott/personal_site',
      experience_id: 1,
      rank: 1,
    },
    {
      name: 'Saas Project Manager',
      project_type: 'personal',
      live_url: 'https://aegrescovitaesaas.herokuapp.com/',
      github_url: 'https://github.com/garrettstott/saas-project',
      experience_id: 1,
      rank: 2,
    },
    { name: 'Stock Tracker',
      project_type: 'personal',
      live_url: 'https://aegrescovitaestocktracker.herokuapp.com',
      github_url: 'https://github.com/garrettstott/finance-tracker',
      experience_id: 1,
      rank: 2,
    },
    {
      name: 'Belcher',
      project_type: 'personal',
      live_url: 'https://belcher.herokuapp.com/',
      github_url: 'https://github.com/justinewalt/belcher',
      experience_id: 1,
      rank: 2,
    },
    {
      name: 'Recipes App',
      project_type: 'personal',
      live_url: 'https://aegrescovitaerecipes.herokuapp.com/',
      github_url: 'https://github.com/garrettstott/myRecipes',
      experience_id: 1,
      rank: 3,
    },
    {
      name: 'Photo App',
      project_type: 'personal',
      live_url: 'https://aegrescovitaephotoapp.herokuapp.com/',
      github_url: 'https://github.com/garrettstott/photo_app',
      experience_id: 1,
      rank: 4,
    },







    {
      name: 'Yes! Fitness Music',
      project_type: 'professional',
      live_url: 'http://www.yesfitnessmusic.com/',
      github_url: nil,
      experience_id: 2,
      rank: 3,
    },
    {
      name: 'Unleash The Beats',
      project_type: 'professional',
      live_url: 'http://www.unleashthebeats.com/',
      github_url: nil,
      experience_id: 2,
      rank: 4,
    },
    {
      name: 'Clementune',
      project_type: 'professional',
      live_url: 'http://clementune.yesfitnessmusic.com/',
      github_url: nil,
      experience_id: 2,
      rank: 5,
    },
    {
      name: 'Yes!Go',
      project_type: 'professional',
      live_url: 'https://www.getyesgo.com/',
      github_url: nil,
      experience_id: 2,
      rank: 4,
    },
    {
      name: 'Jillian Michaels',
      project_type: 'professional',
      live_url: 'https://www.jillianmichaels.com/',
      github_url: nil,
      experience_id: 2,
      rank: 1,
    },
    {
      name: 'Jillian Michaels API',
      project_type: 'professional',
      live_url: 'https://www.jillianmichaels.com/app',
      github_url: nil,
      experience_id: 2,
      rank: 2,
    },
    {
      name: 'Performance Auto',
      project_type: 'professional',
      live_url: 'https://www.performanceut.com/',
      github_url: nil,
      experience_id: 3,
      rank: 6,
    },
    {
      name: 'DevPoint Labs',
      project_type: 'professional',
      live_url: 'http://devpointlabs.com/',
      github_url: nil,
      experience_id: 4,
      rank: 6,
    },
  ]

experiences =
  [
    {
      company: 'personal',
      location: 'Salt Lake City, UT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat.',
      dates: '',
      job_title: 'Software Developer',
    },
    { company: 'lolo',
      location: 'Salt Lake City, UT',
      description: "At lolo, I develop features for multiple projects, primarily in Ruby on Rails and React JS. The products I work on include the website, back-end engine,
                    and client front-end for a fitness platform in web/iOS/Android (Rails 4 / React); a music distribution platform (Rails 4 / React) and a music royalties
                    management platform (Rails 2). With the breadth of technologies used in lolo's products, a big part of my job is working in a multitude of frameworks and
                    implementing interconnectivity between them. I am currently upgrading <a href='www.yesfitnessmusic.com' target='_blank'><b>Yes Fitness Music</b></a> from rails 2
                    and RJS to Rails 5 and React.",
      dates: 'October 2016 - Present',
      job_title: 'Software Developer',
    },
    {
      company: 'High West Digital Architects',
      location: 'Salt Lake City, UT',
      description: 'At High West Digital Architects, I develop features for a single project, primarily in Ruby on Rails and JS. I work on both the front-end and back-end on this project (Rails 4 / JS) a multi dealership, inventory management, shop and for sale by owner website.',
      dates: 'July 2016 - Present',
      job_title: 'Software Developer',
    },
    {
      company: 'DevPoint Labs',
      location: 'Salt Lake City, UT',
      description: 'At DevPoint Labs I applied my knowledge of Ruby on Rails, Javascript, React, HTML & CSS, and other concepts presented in the DevPoint Labs Full-Stack program to solidify the concepts with students during lecture and projects.',
      dates: 'April 2016 - April 2017',
      job_title: 'Software Developer',
    }
  ]

experiences.each do |e|
  e = OpenStruct.new(e)
  experience = Experience.new
  experience.company = e.company
  experience.location = e.location
  experience.description = e.description
  experience.dates = e.dates
  experience.job_title = e.job_title
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
 bio: "<p>I've always had a love for all things computery. I have been building computers since I received my first job. For over 15 years I have been building, repairing and been general IT for friends and family. A year ago, after tinkering with basic HTML, CSS and a little bit of JavaScript, I discovered a new passion in my life. I decided to change my career and life forever. I found a great web development Bootcamp, paid off most of my debts, and set my life up to be able to afford to take 3 months of my life and put them into the intense world, at DevPoint Labs.</p>
       <p>Prior to the Bootcamp, I spent a year studying. I spent a lot of time online using free courses, such as CodeCademy. I also utilized Udemy. I finished many courses ranging from JavaScript, building full Rails apps, BDD and TDD, and other web development courses covering many topics. During the 3 months at DevPoint Labs, we put a lot of focus on Ruby, Rails, PostgreSQL, JavaScript, and everything web development. It was a great learning experience. I learned that being in the web development world, I will forever be a student, constantly learning new technologies.</p>
       <p>I am currently a software developer at <a href='http://www.lolofit.com' target='_blank'><b>lolo</b></a>.</p>"
)

puts p.id ? 'Profile saved' : 'Profile not saved'

a = Admin.create(
  email: 'garrettstott@gmail.com',
  password:'password'
)

puts a.id ? 'Admin saved' : 'Admin not saved'
