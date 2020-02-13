class Api::V1::GamesController < ApplicationController

    def index
        #for the leaderboard. currently sorts by number of moves.
        #could look in to sorting by time (currently a string)
        @gameLeaderboard = Game.all.sort_by { |game| game.moves }.slice(0, 5)
        render json: @gameLeaderboard, except: [:created_at, :updated_at]
    end 

    def create
        @game = Game.create(gameParams)
        render json: @game
    end

    private

    def gameParams
        params.require(:game).permit(:username, :time, :moves)
    end 

end
