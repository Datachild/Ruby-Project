json.goals @goals do |goal|
  json.period goal.period
  json.goal_type goal.goal_type

  json.goal_scorer goal.goal_scorer
end
