class ChangeListTable < ActiveRecord::Migration[5.0]
  def change
    change_column :lists, :user_id, :string
  end
end
