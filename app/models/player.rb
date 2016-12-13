class Player < ApplicationRecord
  has_many  :goal_scorer, :class_name => 'Goal', :foreign_key => 'goal_scorer_id'
  has_many  :goal_assist1, :class_name => 'Goal', :foreign_key => 'goal_assist1_id'
  has_many  :goal_assist2, :class_name => 'Goal', :foreign_key => 'goal_assist2_id'
end
