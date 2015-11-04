class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.string :poster_url
      t.text :synopsis
      t.integer :year
    end
  end
end
