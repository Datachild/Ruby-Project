json.goals @goals do |goal|
  json.period goal.period
  json.goal_type goal.goal_type

  json.goal_scorer goal.goal_scorer do |goal_scorer|
    json.first_name goal_scorer.first_name
    json.last_name goal_scorer.last_name
    json.id goal_scorer.id
  end
end
