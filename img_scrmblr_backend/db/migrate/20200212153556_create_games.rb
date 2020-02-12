class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :username
      t.integer :moves
      t.string :time

      t.timestamps
    end
  end
end
