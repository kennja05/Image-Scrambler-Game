class Game < ApplicationRecord
    before_create :default_values
    
    def default_values
        if self.username == nil || self.username == ""
            self.username = 'A girl has no name'
        end 
    end

end
