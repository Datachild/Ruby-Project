class CreateGoals < ActiveRecord::Migration[5.0]
  def change
    create_table :goals do |t|
      t.references :goal, foreign_key: true
      t.references :assist1, foreign_key: true
      t.references :assist2, foreign_key: true
      t.integer :period
      t.string :goal_type

      t.timestamps
    end
  end
end
