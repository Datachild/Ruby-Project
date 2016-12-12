class Api::V1::GoalsController < Api::V1::BaseController
  def index
    respond_with Goal.all
  end

  def create
    respond_with :api, :v1, Goal.create(player_params)
    # @player = Player.new(player_params)
    #
    # if @player.save
    #   render json: @player
    # else
    #   render json: @player.errors, status: :unprocessable_entity
    # end
  end

  def destroy
    respond_with :api, :v1, Goal.destroy(params[:id])
    # @player = Player.find(params[:id])
    # @player.destroy
    # head :no_content
  end

  def update
    goal = Goal.find(params["id"])
    goal.update_attributes(goal_params)
    respond_with goal, json: goal
    # if @player.update(player_params)
    #   render json: @player
    # else
    #   render json: @player.errors, status: :unprocessable_entity
    # end
  end
  private
  def goal_params
    params.require(:goal).permit(:id, :goal_scorer, :goal_assist1, :goal_assist2, :period, :goal_type)
  end
end
