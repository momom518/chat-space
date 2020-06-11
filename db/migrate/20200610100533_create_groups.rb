class CreateGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
      t.string :group, null: false
      t.string :index, unique: true
      t.timestamps
    end
  end
end
