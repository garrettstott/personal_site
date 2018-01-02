Rails.application.routes.draw do
  get 'app/home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'app#home'

  # V1 API
  namespace :v1 do
    # GET
    get '/recent_projects', to: 'projects#recent_projects'
    get '/bio_preview', to: 'profile#bio_preview'

  end
  # REACT ROUTER
  get '*unmatched_route', to: 'app#home'

end
