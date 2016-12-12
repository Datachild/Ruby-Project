class Goal < ApplicationRecord
  belongs_to :goal_scorer, :class_name => 'Player'
  belongs_to :assist1, :goal_assist1 => 'Player'
  belongs_to :assist2, :goal_assist2 => 'Player'
end
