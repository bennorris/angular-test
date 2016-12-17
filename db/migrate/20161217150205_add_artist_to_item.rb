class AddArtistToItem < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :artist, :string
  end
end
