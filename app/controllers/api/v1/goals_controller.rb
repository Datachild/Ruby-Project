class Api::V1::GoalsController < Api::V1::BaseController
  def index
    @goals = Goal.all
  end

  def show
    respond_with Goal.find(params["id"])
  end

  def create
    @goal = Goal.create(goal_params)
  end

  def destroy
    respond_with :api, :v1, Goal.destroy(params[:id])
  end

  def update
    goal = Goal.find(params["id"])
    goal.update_attributes(goal_params)
    respond_with goal, json: goal
  end
  private
  def goal_params
    params.require(:goal).permit(:goal_scorer_id, :goal_assist1_id, :goal_assist2_id, :period, :goal_type)
  end
end
