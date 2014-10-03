class Restaurant < ActiveRecord::Base
	validates :name, presence: true
	validates :category, presence: true

	#attr_accessible :category, :name, :tag_list
	acts_as_taggable # Alias for acts_as_taggable_on :tags

    has_attached_file :logo, :styles => { :medium => "180x180>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
    validates_attachment_content_type :logo, :content_type => /\Aimage\/.*\Z/
end
