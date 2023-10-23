# Randomizer

<Badge type="info" text="Not Creatable"/> <Badge type="info" text="Module"/> <Badge type="info" text="Math"/>

Randomizer can randomize anything. It has:

- can return any function, basically anything that can be return
- change in decimal
- MaxPercentage to anything you want
- easy to use

## Install the module

Go on [github](https://github.com/AmberDevelopmentTeam/Randomizer) then install the source code. After this, import it on roblox studio, preferally on ReplicatedStorage.
![Explorer](https://cdn.discordapp.com/attachments/1098339231451074670/1166146609592148098/image.png?ex=65496da9&is=6536f8a9&hm=5875e48d976296f5c7b492fcfb9b933d463b874722876d2b53fe9c7e5448b021&)

## Use the module

Create a script, (preferably a localscript but both work), you will need to require the script with a path. The path is where the instance is. For example if your module is on replicatedStorage, you can type `game:GetService("ReplicatedStorage").audioManager` if the module is on a folder named "Modules" which is on ReplicatedStorage then `game:GetService("ReplicatedStorage").Modules.audioManager`. Now that you know how to get an instance's path, you will need to create a variable and require() the module.

```lua
local module = require(path.to.module)
```

It's not harder than that. You can now create another variable with value `module()` to create a random function.

```lua
local module = require(path.to.module)
local random = module()
```

## Mehod Parameters

You will need to create a parameter to create a custom random. First create a table inside `module()`. This mean this will looks like this:

```lua
local module = require(path.to.module)
local random = module({})
```

Then in this table. You can create any random thing you want. To create one, recreate an other table `module({{}})` in this table, you have two option that must be used: `percentage` & `callback`. Percentage is the chance to return the callback. You can create multiple one, like this:

```lua
local module = require(path.to.module)
  local random = module({
    {percentage = 50, callback = "It return option A!"};
    {percentage = 50, callback = "It return option B!"};
  })
print(random)
```

This will print a random thing between "It return option A!" & "It return option B!". You can also create function:

```lua
local module = require(path.to.module)
  local random = module({
    {percentage = 50, callback = function() print("It return option A!") end};
    {percentage = 50, callback = function() print("It return option B!") end};
  })
random
```

Here is an example of printing 10 times random:
![Example](https://cdn.discordapp.com/attachments/1098339231451074670/1166160542889685012/image.png?ex=65497aa3&is=653705a3&hm=470cf564411aa3594f9ca7c4343b2634f4ea363f1177829d3faa5a117133aab6&)

## Credit

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.discordapp.com/attachments/1165770364903768147/1165788147062415520/Pcoi94ProfilPhoto.png?ex=65481fd1&is=6535aad1&hm=f2a372c6b9426f5ccb6ca47395fd1d28941a8707d229152d3196663c517fe788&',
    name: 'Pcoi94',
    title: 'Owner',
    links: [
      { icon: 'github', link: 'https://github.com/Pcoi94' },
      { icon: 'discord', link: 'https://pcoiscript.xyz/discord/' }
    ]
  },

    {
    avatar: 'https://cdn.discordapp.com/attachments/1098339231451074670/1166142324695380079/5fda323289ad8d521aa5c6a6e3ea938b.jpg?ex=654969ac&is=6536f4ac&hm=3814ab4c5b7585d68ab15eb9070dcabad19ca740e1386e84d07bc90e762a06e0&',
    name: 'Natzu',
    title: 'Cabaye (Documentation Tester)',
    links: [
      { icon: 'youtube', link: 'https://www.youtube.com/@NatzuOff/videos' },
      { icon: 'discord', link: 'https://discord.com/users/614752212752793610' }
    ]
  },
]
</script>

## Credits

Here is every user contributed on audioManager's documentation
<VPTeamMembers size="small" :members="members" />
