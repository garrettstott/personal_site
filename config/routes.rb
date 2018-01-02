Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'app#home'

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
    get '/admin', to: 'admin#index'

  end
  # REACT ROUTER
  get '*unmatched_route', to: 'app#home'

end
