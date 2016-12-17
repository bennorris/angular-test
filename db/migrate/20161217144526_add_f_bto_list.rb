class AddFBtoList < ActiveRecord::Migration[5.0]
  def change
    add_column :lists, :facebook, :string
  end
end
