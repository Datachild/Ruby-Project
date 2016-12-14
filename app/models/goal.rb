class Goal < ApplicationRecord
  belongs_to  :goal_scorer, :class_name => 'Player', :foreign_key => 'goal_scorer_id'
  belongs_to  :goal_assist1, optional:true, :class_name => 'Player', :foreign_key => 'goal_assist1_id'
  belongs_to  :goal_assist2, optional:true, :class_name => 'Player', :foreign_key => 'goal_assist2_id'
end
