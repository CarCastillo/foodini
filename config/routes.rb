Rails.application.routes.draw do

	get 'home/index'
	#get	'home/results'
	root 'home#index'

	#resources :restaurants

	get 'tags/:tag', to: 'restaurants#index', as: :tag
	resources :restaurants do
		collection do
			get :search
		end		
	end

end
