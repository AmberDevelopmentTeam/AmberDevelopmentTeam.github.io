# LayoutOrder

<Badge type="info" text="Module"/> <Badge type="info" text="Oriented Object Programing"/>

Create a layout order using an attribute easily.

## Install the module

Go on [github](https://github.com/AmberDevelopmentTeam/Randomizer) then install the source code. After this, import it on roblox studio, preferally on ReplicatedStorage.
![Explorer](https://cdn.discordapp.com/attachments/1165770364903768147/1167442877673119835/image.png?ex=654e24e8&is=653bafe8&hm=5efa6127ee526436913d8d35e0f98e6d64c35d8d2e5c30409adb8591a22db25b&)

## Use the module

Create a script, (preferably a localscript but both work), you will need to require the script with a path. The path is where the instance is. For example if your module is on replicatedStorage, you can type `game:GetService("ReplicatedStorage").LayoutOrder` if the module is on a folder named "Modules" which is on ReplicatedStorage then `game:GetService("ReplicatedStorage").Modules.LayoutOrder`. Now that you know how to get an instance's path, you will need to create a variable and require() the module.

```lua
local module = require(path.to.module)
```

It's not harder than that. You can now create another variable with value `module.new()` to create an audio.

```lua
local module = require(path.to.module)
local layout = module.new()
```

## Properties

there are 2 main properties:

- layout
- attributeName
  both are required. `layout` must be a UIListLayout or UIGridLayout & attributeName must be a string.

now you can add whatever properties you want. for example

```lua
local module = require(path.to.module)
local layout = module.new()

layout.layout = path.to.layout
layout.attributeName = "rarity"

layout.COMMON = 1
layout.RARE = 2
layout.EPIC = 3
layout.LEGENDARY = 4
layout.EXCLUSIVE = 5
```

as you can see, `COMMON`, `RARE`, `...` are not autocompleting. This is because you can create your own order. The index (`COMMON`, `RARE`, `...`) is the attribute value & the value (1, 2, `...`) are the order to give.

# Method

Now that you gave every info you add, you can do `layout:Order()` to order every child of layout parent which are guielements.

# Example

```lua
local module = require(path.to.module)
local layout = module.new()

layout.layout = path.to.layout
layout.attributeName = "rarity"

layout.COMMON = 1
layout.RARE = 2
layout.EPIC = 3
layout.LEGENDARY = 4
layout.EXCLUSIVE = 5

layout:Order()
```

## Credits

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

Here is every user contributed on audioManager's documentation
<VPTeamMembers size="small" :members="members" />
