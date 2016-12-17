class FixUserIds < ActiveRecord::Migration[5.0]
  def change
    change_column :items, :user_id, :integer
    change_column :lists, :user_id, :integer
  end
end
