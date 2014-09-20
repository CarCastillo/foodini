json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :name, :category, :lat, :lon
  json.url restaurant_url(restaurant, format: :json)
end
