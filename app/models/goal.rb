class Goal < ApplicationRecord
  belongs_to :goal_scorer, :class_name => 'Player'
  belongs_to :goal_assist1, :class_name => 'Player'
  belongs_to :goal_assist2, :class_name => 'Player'
end
