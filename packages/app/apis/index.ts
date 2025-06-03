import {Protofy} from 'protobase'
import discord_connect_botApi from "./discord_connect_bot";
import discord_command_helloApi from "./discord_command_hello";
import discord_delete_commandApi from "./discord_delete_command";

const autoApis = Protofy("apis", {
    discord_connect_bot: discord_connect_botApi,
    discord_command_hello: discord_command_helloApi,
    discord_delete_command: discord_delete_commandApi
})

export default (app, context) => {
    Object.keys(autoApis).forEach((k) => {
        autoApis[k](app, context)
    })
}