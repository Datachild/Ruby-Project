json.goals @goals do |goal|
  json.id goal.id
  json.created_at goal.created_at
  json.period goal.period
  json.goal_type goal.goal_type
  json.goal_scorer_id goal.goal_scorer_id
  json.goal_assist1_id goal.goal_assist1_id
  json.goal_assist2_id goal.goal_assist2_id
  json.goal_scorer goal.goal_scorer
  json.goal_assist1 goal.goal_assist1
  json.goal_assist2 goal.goal_assist2
end
