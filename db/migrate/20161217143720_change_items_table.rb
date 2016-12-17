class ChangeItemsTable < ActiveRecord::Migration[5.0]
  def change
    change_column :items, :user_id, :string
  end
end
