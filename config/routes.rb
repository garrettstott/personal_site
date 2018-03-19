Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'app#home'

  get '/.well-known/.well-known/pki-validation/07EAFF373C560DCCD308D97D705FFF13.txt'

  devise_for :admin, controllers: {
    sessions: 'admin/sessions',
    registrations: 'admin/registrations'
  }

  devise_scope :admin do
    post '/admin/sign_out', to: 'devise/sessions#destroy'
  end

  # V1 API
  namespace :v1 do
    # GET
    get '/recent_projects', to: 'projects#recent_projects'
    get '/bio_preview', to: 'profile#bio_preview'
    get '/projects', to: 'projects#all_projects'
    get '/about', to: 'profile#about'
    get '/experiences', to: 'experiences#all_experiences'

    # ADMIN
    get '/admin', to: 'admin#index'
    get '/admin/projects', to: 'admin#projects'
    get '/admin/project/:id', to: 'admin#project'
    get '/admin/experiences', to: 'admin#experiences'
    get '/admin/experience/:id', to: 'admin#experience'
    get '/admin/profile', to: 'admin#profile'

    post '/admin/project/:id', to: 'admin#update_project'
    post '/admin/project/:id/delete', to: 'admin#delete_project'
    post '/admin/experience/:id', to: 'admin#update_experience'
    post '/admin/experience/:id/delete', to: 'admin#delete_experience'
    post '/admin/profile/:id', to: 'admin#update_profile'

  end
  # REACT ROUTER
  get '*unmatched_route', to: 'app#home'

end
