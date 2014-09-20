class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :category
      t.string :lat
      t.string :lon

      t.timestamps
    end
  end
end
