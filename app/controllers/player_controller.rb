class PlayerController < ApplicationController
  def index
    @records = Record.all
  end
end
