class Restaurant < ActiveRecord::Base
	validates :name, presence: true
	validates :category, presence: true

	#attr_accessible :category, :name, :tag_list
	acts_as_taggable # Alias for acts_as_taggable_on :tags
end
