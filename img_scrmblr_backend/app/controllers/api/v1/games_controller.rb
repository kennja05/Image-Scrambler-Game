class Api::V1::GamesController < ApplicationController

    def index
        @gameLeaderboard = Game.all.sort_by { |game| game.moves }.slice(0,10) 
        render json: @gameLeaderboard
    end 

end
