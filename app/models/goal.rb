class Goal < ApplicationRecord
  belongs_to  :goal_scorer,
              :class_name => 'Player',
              :foreign_key => 'goal_scorer'
  belongs_to  :goal_assist1,
              :class_name => 'Player',
              :foreign_key => 'goal_assist1'
  belongs_to  :goal_assist2,
              :class_name => 'Player',
              :foreign_key => 'goal_assist2'
end
