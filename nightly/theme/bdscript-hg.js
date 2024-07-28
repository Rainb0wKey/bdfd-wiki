cb = document.getElementsByClassName("bdscript");
arr = cb[0].textContent

keys = [  [
    "$addButton",
    "$addCmdReactions",
    "$addEmoji",
    "$addField",
    "$addMessageReactions",
    "$addReactions",
    "$addSelectMenuOption",
    "$addTextInput",
    "$addTimestamp",
    "$aiQuota",
    "$ai",
    "$allMembersCount",
    "$allowMention",
    "$allowRoleMentions",
    "$allowUserMentions",
    "$alternativeParsing",
    "$and",
    "$appendOptionSuggestion",
    "$argCount",
    "$argsCheck",
    "$async",
    "$authorAvatar",
    "$authorID",
    "$authorIcon",
    "$authorOfMessage",
    "$authorURL",
    "$author",
    "$autoCompleteOptionName",
    "$autoCompleteOptionValue",
    "$awaitFunc",
    "$awaitReactions",
    "$await",
    "$ban",
    "$banID",
    "$blackListIDs",
    "$blackListRolesIDs",
    "$blackListRoles",
    "$blackListServers",
    "$blackListUsers",
    "$boostCount",
    "$botCommands",
    "$botID",
    "$botLeave",
    "$botListDescription",
    "$botListHide",
    "$botNode",
    "$botOwnerID",
    "$botTyping",
    "$c",
    "$calculate@,
    "$catch",
    "$categoryChannels@,
    "$categoryCount",
    "$categoryID",
    "$changeCooldownTime",
    "$changeUsernameWithID",
    "$changeUsername",
    "$channelCount",
    "$channelExists",
    "$channelID",
    "$channelIDFromName",
    "$channelName",
    "$channelNames",
    "$channelPosition",
    "$channelSendMessage",
    "$channelTopic",
    "$channelType",
    "$charCount",
    "$checkCondition",
    "$checkContains",
    "$checkUserPerms",
    "$clear",
    "$clearReactions",
    "$closeTicket",
    "$colorRole",
    "$color",
    "$commandsCount",
    "$cooldown",
    "$createChannel",
    "$createRole",
    "$creationDate",
    "$cropText",
    "$customEmoji",
    "$customID",
    "$customImage",
    "$date",
    "$day",
    "$defer",
    "$deleteChannelsByName",
    "$deleteChannels",
    "$deleteIn",
    "$deleteMessage",
    "$deleteRole",
    "$deletecommand",
    "$description",
    "$disableInnerSpaceRemoval",
    "$disableSpecialEscaping",
    "$discriminator",
    "$displayName",
    "$divide",
    "$dm",
    "$dmChannelID",
    "$dm",
    "$editButton",
    "$editChannelPerms",
    "$editEmbedIn",
    "$editIn",
    "$editMessage",
    "$editSelectMenuOption",
    "$editSelectMenu",
    "$editSplitText",
    "$editThread",
    "$else",
    "$elseif",
    "$embedSuppressErrors",
    "$embeddedURL",
    "$emoteCount",
    "$enableDecimals",
    "$enabled",
    "$endasync",
    "$endif",
    "$endtry",
    "$ephemeral",
    "$error",
    "$eval",
    "$executionTime",
    "$findChannel",
    "$findRole",
    "$findUser",
    "$footerIcon",
    "$footer",
    "$getBanReason",
    "$getBotInvite",
    "$getChannelVar",
    "$getCooldown",
    "$getCustomStatus",
    "$getEmbedData",
    "$getInviteInfo",
    "$getLeaderboardPosition",
    "$getLeaderboardValue",
    "$getMessage",
    "$getReactions",
    "$getRoleColor",
    "$getServerInvite",
    "$getServerVar",
    "$getTextSplitLength",
    "$getTimestamp",
    "$getUserStatus",
    "$getUserVar",
    "$getVar",
    "$giveRole",
    "$globalCooldown",
    "$globalUserLeaderboard",
    "$guildExists",
    "$guildID",
    "$hasRole",
    "$highestRole",
    "$highestRoleWithPerms",
    "$hostingExpireTime",
    "$hour",
    "$httpAddHeader",
    "$httpDelete",
    "$httpGetHeader",
    "$httpGet",
    "$httpPatch",
    "$httpPost",
    "$httpPut",
    "$httpRemoveHeader",
    "$httpResult",
    "$httpStatus",
    "$hypesquad",
    "$if",
    "$ignoreChannels",
    "$ignoreLinks",
    "$ignoreTriggerCase",
    "$image",
    "$input",
    "$isAdmin",
    "$isBanned",
    "$isBoolean",
    "$isBooster",
    "$isBot",
    "$isHoisted",
    "$isMentionable",
    "$isNSFW",
    "$isNumber",
    "$isSlash",
    "$isTicket",
    "$isTimedOut",
    "$isUserDMEnabled",
    "$isValidHex",
    "$joinSplitText",
    "$jsonArrayAppend",
    "$jsonArrayCount",
    "$jsonArrayIndex",
    "$jsonArrayPop",
    "$jsonArrayReverse",
    "$jsonArrayShift",
    "$jsonArraySort",
    "$jsonArrayUnshift",
    "$jsonArray",
    "$jsonClear",
    "$jsonExists",
    "$jsonJoinArray",
    "$jsonParse",
    "$jsonPretty",
    "$jsonSetString",
    "$jsonSet",
    "$jsonStringify",
    "$jsonUnset",
    "$json",
    "$kick",
    "$kickMention",
    "$lowestRole",
    "$lowestRoleWithPerms",
    "$max",
    "$membersCount",
    "$mentionedChannels",
    "$mentionedRoles",
    "$mentioned",
    "$message",
    "$messageID",
    "$min",
    "$minute",
    "$modifyChannelPerms",
    "$modifyChannel",
    "$modifyRolePerms",
    "$modifyRole",
    "$modulo",
    "$month",
    "$multi",
    "$mute",
    "$newModal",
    "$newSelectMenu",
    "$newTicket[]",
    "$nickname",
    "$noMentionMessage",
    "$nodeVersion",
    "$nomention",
    "$numberSeparator",
    "$onlyAdmin",
    "$onlyBotChannelPerms",
    "$onlyBotPerms",
    "$onlyForCategories",
    "$onlyForChannels",
    "$onlyForIDs",
    "$onlyForRoleIDs",
    "$onlyForRoles",
    "$onlyForServers",
    "$onlyForUsers",
    "$onlyIfMessageContains",
    "$onlyIf",
    "$onlyNSFW",
    "$onlyPerms",
    "$optOff",
    "$or",
    "$parentID",
    "$pinMessage",
    "$ping",
    "$premiumExpireTime",
    "$publishMessage",
    "$random",
    "$randomCategoryID",
    "$randomChannelID",
    "$randomGuildID",
    "$randomMention",
    "$randomRoleID",
    "$randomString",
    "$randomText",
    "$randomUser",
    "$randomUserID",
    "$registerGuildCommands",
    "$removeAllComponents",
    "$removeButtons",
    "$removeComponent",
    "$removeContains",
    "$removeEmoji",
    "$removeLinks",
    "$removeSplitTextElement",
    "$repeatMessage",
    "$replaceText",
    "$repliedMessageID",
    "$reply",
    "$replyIn",
    "$resetChannelVar",
    "$resetServerVar",
    "$resetUserVar",
    "$roleCount",
    "$roleExists",
    "$roleGrant",
    "$roleID",
    "$roleInfo",
    "$roleName",
    "$roleNames",
    "$rolePosition",
    "$round",
    "$scriptLanguage",
    "$second",
    "$sendEmbedMessage",
    "$sendMessage",
    "$sendNotification",
    "$serverChannelExists",
    "$serverCooldown",
    "$serverCount",
    "$serverDescription",
    "$serverEmojis",
    "$serverIcon",
    "$serverIcon[]",
    "$serverLeaderboard",
    "$serverName[]",
    "$serverNames",
    "$serverNames[]",
    "$serverOwner",
    "$serverRegion",
    "$serverVerificationLvl",
    "$setChannelVar",
    "$setServerVar",
    "$setUserRoles",
    "$setUserVar",
    "$setVar[]",
    "$shardID",
    "$slashCommandsCount",
    "$slashID",
    "$slowmode",
    "$sort",
    "$splitText",
    "$startThread",
    "$stop",
    "$sub",
    "$sum",
    "$suppressErrors",
    "$takeRole",
    "$textSplit",
    "$threadAddMember",
    "$threadRemoveMember",
    "$thumbnail",
    "$time",
    "$timeout",
    "$title",
    "$toLowercase",
    "$toTitleCase",
    "$toUppercase",
    "$trimContent",
    "$try",
    "$tts",
    "$unban",
    "$unbanID",
    "$unescape",
    "$unmute",
    "$unpinMessage",
    "$unregisterGuildCommands",
    "$untimeout",
    "$uptime",
    "$url",
    "$useChannel",
    "$usedEmoji",
    "$userAvatar",
    "$userBadges",
    "$userBannerColor",
    "$userBanner",
    "$userExists",
    "$userID",
    "$userInfo",
    "$userJoinedDiscord",
    "$userJoined",
    "$userLeaderboard",
    "$userPerms",
    "$userReacted",
    "$userRoles",
    "$userServerAvatar",
    "$username",
    "$varExistError",
    "$varExists",
    "$var",
    "$variablesCount",
    "$webhookAvatarURL",
    "$webhookColor",
    "$webhookContent",
    "$webhookCreate",
    "$webhookDelete",
    "$webhookDescription",
    "$webhookFooter",
    "$webhookSend",
    "$webhookTitle",
    "$webhookUsername",
    "$year"
];

for (b = 0; b < cb.length; b++) {
for (i = 0; i < keys.length; i++) {
arr = arr.replaceAll(keys[i], '<span style="color: #FFF;">' + keys[i] + '</span>');
};

arr = arr.replaceAll("$if", '<span style="color: #FFF;">' + "$if" + '</span>');
arr = arr.replaceAll("$endif", '<span style="color: #FFF;">' + "$endif" + '</span>');
arr = arr.replaceAll("$else", '<span style="color: #FFF;">' + "$else" + '</span>');
arr = arr.replaceAll("$elseif", '<span style="color: #FFF;">' + "$elseif" + '</span>');

arr = arr.replaceAll("[", '<span style="color: #FFF;">' + "[" + '</span>');
arr = arr.replaceAll("]", '<span style="color: #FFF;">' + "]" + '</span>');
arr = arr.replaceAll("\;/", '<span style="color: #FFF;">' + ";" + '</span>');

cb[b].innerHTML = arr; 
try {
  arr = cb[b + 1].textContent;
} catch (error) { console.log("highlight success") };
};
