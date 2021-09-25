import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    clientId: {
        type: String,
        required: true
    },
    players: Array,
    winner: Array
})

const  GameModel = mongoose.model('games', GameSchema)

export default GameModel;