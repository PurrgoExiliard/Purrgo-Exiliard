import discord from "../assets/socials/discord.png";
import instagram from "../assets/socials/Instagram.png";
import telegram from "../assets/socials/telegram.png";
import youtube from "../assets/socials/youtube.png";
import barq from "../assets/socials/barq.png";



const socialsData = {
    folder: "Purrgo-Exiliard/src/assets/socials/",
    container : "socials_container",
    template : "icon.html",
    data : [
        {
            link: "https://discord.gg/BXq6DATg7z",
            img : discord,
            alt : "Discord Server link",
            text : "Discord",
        },
        {
            link: "https://www.instagram.com/purrgo_exiliard/",
            img : instagram,
            alt : "Instagram link",
            text : "Instagram",
        },
        {
            link: "https://youtube.com/@purrgo_exiliard",
            img : youtube,
            alt : "Youtube link",
            text : "Youtube",
        },
        {
            link: "https://t.me/purrgo_exiliard#",
            img : telegram,
            alt : "Telegram link",
            text : "Telegram",
        },
        {
            link: "https://barq.app/@purrgo_exiliard",
            img :  barq,
            alt : "Barq link",
            text : "BARQ!",
            cssClass : "barq",
        }
    ]
};
export default socialsData;