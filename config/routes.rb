Rails.application.routes.draw do
  get 'app/home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'app#home'

  # REACT ROUTER
  get '*unmatched_route', to: 'app#home'

end
