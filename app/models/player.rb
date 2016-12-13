class Player < ApplicationRecord
  has_many  :goals, :class_name => 'Goal', :foreign_key => 'goal_scorer_id'
  has_many  :assists1, :class_name => 'Goal', :foreign_key => 'goal_assist1_id'
  has_many  :assists2, :class_name => 'Goal', :foreign_key => 'goal_assist2_id'
end
