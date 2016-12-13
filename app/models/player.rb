class Player < ApplicationRecord
  # has_many  :goals, :class_name => 'Goal', :foreign_key => 'goal_scorer'
  # has_many  :assists1, :class_name => 'Goal', :foreign_key => 'goal_assist1'
  # has_many  :assists2, :class_name => 'Goal', :foreign_key => 'goal_assist2'
  has_many  :goals
end
