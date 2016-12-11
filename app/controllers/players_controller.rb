class PlayersController < ApplicationController
  def index
      @players = Player.all
    end
  def destroy
      @player = Player.find(params[:id])
      @player.destroy
      head :no_content
    end
  def create
      @player = Player.new(player_params)

      if @player.save
        render json: @player
      else
        render json: @player.errors, status: :unprocessable_entity
      end
    end

    private
      def player_params
        params.require(:player).permit(:first_name, :last_name, :position, :card_type)
      end
end
