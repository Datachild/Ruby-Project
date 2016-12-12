class CreateGoals < ActiveRecord::Migration[5.0]
  def change
    create_table :goals do |t|
      t.references :goal_scorer
      t.references :goal_assist1
      t.references :goal_assist2
      t.integer :period
      t.string :goal_type

      t.timestamps
    end
  end
end
