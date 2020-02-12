class Api::V1::GamesController < ApplicationController

    def index
        #for the leaderboard. currently sorts by number of moves.
        #could look in to sorting by time (currently a string)
        @gameLeaderboard = Game.all.sort_by { |game| game.moves }
        render json: @gameLeaderboard
    end 

    def create
        
    end

end
