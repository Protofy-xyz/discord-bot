import {Protofy} from 'protobase'
import discord_connect_botApi from "./discord_connect_bot";
import discord_command_helloApi from "./discord_command_hello";

const autoApis = Protofy("apis", {
    discord_connect_bot: discord_connect_botApi,
    discord_command_hello: discord_command_helloApi
})

export default (app, context) => {
    Object.keys(autoApis).forEach((k) => {
        autoApis[k](app, context)
    })
}