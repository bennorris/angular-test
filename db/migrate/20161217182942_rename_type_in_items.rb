class RenameTypeInItems < ActiveRecord::Migration[5.0]
  def change
    remove_column :items, :type, :string
    add_column :items, :medium, :string
  end
end
