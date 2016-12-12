class Api::V1::PlayersController < Api::V1::BaseController
  def index
    respond_with Player.all
  end

  def create
    respond_with :api, :v1, Player.create(player_params)
    # @player = Player.new(player_params)
    #
    # if @player.save
    #   render json: @player
    # else
    #   render json: @player.errors, status: :unprocessable_entity
    # end
  end

  def destroy
    respond_with :api, :v1, Player.destroy(params[:id])
    # @player = Player.find(params[:id])
    # @player.destroy
    # head :no_content
  end

  def update
    @player = Player.find(params[:id])
    player.update_attributes(player_params)
    respond_with player, json: player
    # if @player.update(player_params)
    #   render json: @player
    # else
    #   render json: @player.errors, status: :unprocessable_entity
    # end
  end
  private
  def player_params
    params.require(:player).permit(:id, :first_name, :last_name, :position, :card_type)
  end
end
