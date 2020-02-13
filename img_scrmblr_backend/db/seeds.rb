# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Game.destroy_all

game1 = Game.create(username: "Jacob", moves: 433, time: "00 : 06 : 53")
game2 = Game.create(username: "Alisher", moves: 323, time: "00 : 56 : 14")
game3 = Game.create(username: "Tyler Florence", moves: 344, time: "00 : 10 : 42")
game4 = Game.create(username: "Allton Brown", moves: 109, time: "00 : 18 : 09")
game5 = Game.create(username: "Martha Spewart", moves: 567, time: "00 : 10 : 01")
game6 = Game.create(username: "Giada Digaurantis", moves: 1200, time: "01 : 55 : 22")
game7 = Game.create(username: "Forehead Ramsey", moves: 322, time: "00 : 14 : 44")
game8 = Game.create(username: "Guy Fieri", moves: 421, time: "00 : 17 : 31")
game9 = Game.create(username: "Ida Garten", moves: 698, time: "00 : 09 : 32")
game10 = Game.create(username: "Prejudice Dean", moves: 57, time: "00 : 22 : 19")
game11 = Game.create(username: "Bearfoot Contessa", moves: 5411, time: "00 : 45 : 12")
game12 = Game.create(username: "Jamie Oliver", moves: 900, time: "00 : 22 : 07")
game13 = Game.create(username: "David Chang", moves: 578, time: "00 : 33 : 00")
game14 = Game.create(username: "Christina Tossie", moves: 789, time: "00 : 11 : 13")