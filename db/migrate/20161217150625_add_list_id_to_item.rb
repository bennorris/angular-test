class AddListIdToItem < ActiveRecord::Migration[5.0]
  def up
    add_column :items, :list_id, :integer
  end

  def down
    remove_column :items, :list_id
  end
end
