class AddItemsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.integer :user_id
      t.string :content
      t.string :type
      t.timestamps
    end
  end
end
