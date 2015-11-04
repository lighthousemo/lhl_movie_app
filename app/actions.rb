# Movie REST API namespaced under /api

# Retrieve all movies
get '/api/movies' do
  content_type :json
  Movie.all.to_json
end

# Create a new movie
post '/api/movies' do
  movie = Movie.create(params[:movie])
  if movie.persisted?
    status 200
    movie.to_json
  else
    # set http response status to 422 - Unprocessable Entity
    status 422
    # return validation errors
    {message: "Could not save movie", validation_errors: movie.errors}.to_json
  end
end

# Retrieve a movie by id
get '/api/movies/:id' do
  begin
    movie = Movie.find(params[:id])
  rescue ActiveRecord::RecordNotFound => e
    status 401
    # Forward the error message that ActiveRecord gives us back to the user
    # Ex: Couldn't find Movie with 'id'=10
    return {message: e.message}.to_json
  end

  status 200
  movie.to_json
end

# Update an existing movie
put '/api/movies/:id' do
  begin
    movie = Movie.find(params[:id])
  rescue ActiveRecord::RecordNotFound => e
    status 401
    # Forward the error message that ActiveRecord gives us back to the user
    # Ex: Couldn't find Movie with 'id'=10
    return {message: e.message}.to_json
  end

  if movie.update_attributes(params[:movie])
    status 200
    movie.to_json
  else
    # set http response status to 422 - Unprocessable Entity
    status 422
    # return validation errors
    {message: "Could not save movie", validation_errors: movie.errors}.to_json
  end
end

# Delete a movie
delete '/api/movies/:id' do
  begin
    movie = Movie.find(params[:id])
  rescue ActiveRecord::RecordNotFound => e
    status 401
    # Forward the error message that ActiveRecord gives us back to the user
    # Ex: Couldn't find Movie with 'id'=10
    return {message: e.message}.to_json
  end

  movie.destroy
  status 201
  {}.to_json
end

