class Restaurant < ActiveRecord::Base
	validates :name, presence: true
	validates :category, presence: true
end
