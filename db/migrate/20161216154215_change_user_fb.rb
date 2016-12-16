class ChangeUserFb < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :facebook, :string
  end
end
