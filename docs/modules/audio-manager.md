# AudioManager

<Badge type="info" text="Not Creatable"/> <Badge type="info" text="Module"/> <Badge type="info" text="Oriented Object Programing"/>

AudioManager will store your audios in a module to optimize them. AudioManager is one of the first module where managing your audio hasn't been that easy. But why AudioManager? Audio Manager will:

- store your audio
- instant load your audios
- work for both sides
- one instance per audio (N times the same audio will create one instance.)
- oriented object programing

## Install the module

Go on [github](https://github.com/AmberDevelopmentTeam/AudioManager) then install the source code. After this, import it on roblox studio, preferally on ReplicatedStorage.
![Explorer](https://cdn.discordapp.com/attachments/1165770364903768147/1165770372231204994/image.png?ex=65480f43&is=65359a43&hm=7f9b8acf1883ba4a1c4a38b7edea6f9dc896c0548b721978b76eb9cc069bdb08&)

## Upload your audio

You will need to [upload an audio](https://create.roblox.com/dashboard/creations?activeTab=Audio) or [use an already existing one](https://create.roblox.com/marketplace/audio). This will be required for the future steps.

## Use the module

Create a script, (preferably a localscript but both work), you will need to require the script with a path. The path is where the instance is. For example if your module is on replicatedStorage, you can type `game:GetService("ReplicatedStorage").audioManager` if the module is on a folder named "Modules" which is on ReplicatedStorage then `game:GetService("ReplicatedStorage").Modules.audioManager`. Now that you know how to get an instance's path, you will need to create a variable and require() the module.

```lua
local module = require(path.to.module)
```

It's not harder than that. You can now create another variable with value `module.new()` to create an audio.

```lua
local module = require(path.to.module)
local myAudio = module.new()
```

## Use Properties

You will now have to use properties to change you audio settings. There are five properties in the module right now:

- soundId (default: 0 | must be changed)
- volume (default: 1 | can be changed)
- startPosition (default: 0 | can be changed)
- finishPosition (default: math.huge (infinite) | can be changed)
- soundGroup (default: nil | can be changed)

Here is an example of how to change every properties:

```lua
local module = require(path.to.module)
local myAudio = module.new()
myAudio.soundId = 12221967 -- button.wav soundId
myAudio.volume = 0.5
myAudio.startPosition = 0.1
myAudio.finishPosition = 0.2
myAudio.soundGroup = nil
```

Before doing anything, you will need to save the properties, you can use `myAudio:Update()` to save the properties.

## Use Methods

You can now use the module easily, there are 7 methods (including `myAudio:Update()`):

```lua
local module = require(path.to.module)
local myAudio = module.new()
myAudio.soundId = 12221967 -- button.wav soundId
myAudio.volume = 0.5
myAudio.startPosition = 0.1
myAudio.finishPosition = 0.2
myAudio.soundGroup = nil

myAudio:Update() -- update any properties
local audioInstance = myAudio:GetAudio() -- this will return you the audio instane.
myAudio:Play() -- this will start playing the sound at the position you chose in your properties
myAudio:Stop() -- this will stop the sound and return the time position to 0.
myAudio:Pause() -- this will stop the audio but wont change the time position.
myAudio:Continue() -- this will play/replay your sound at the position it's stopped (or 0)
myAudio:Destroy() -- destroy the audio. you can use myAudio:Update() it to recreate the audio.
```

## Conclusion

Now, you know everything on this module. Here is an example of this plugin:

```lua
local module = require(path.to.module)
local myAudio = module.new()
myAudio.soundId = 12221967
myAudio:Update()
task.wait(2) -- wait(2) but more optimized

myAudio:Play()
```

Here is a preview of the use of this module on a custom ui:

<iframe width="560" height="315" src="https://www.youtube.com/embed/dJSJBpx9DMk?si=p_SKxl-M6APVLuqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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
]
</script>

## Credits

Here is every user contributed on audioManager's documentation
<VPTeamMembers size="small" :members="members" />
