<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const developers = [
  {
    avatar: 'https://cdn.discordapp.com/attachments/1165770364903768147/1165788147062415520/Pcoi94ProfilPhoto.png?ex=65481fd1&is=6535aad1&hm=f2a372c6b9426f5ccb6ca47395fd1d28941a8707d229152d3196663c517fe788&',
    name: 'Pcoi94',
    title: 'Owner, Main Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Pcoi94' },
      { icon: 'discord', link: 'https://pcoiscript.xyz/discord/' }
    ]
  },
]

const testers = [
  {
    avatar: 'https://cdn.discordapp.com/attachments/1098339231451074670/1166142324695380079/5fda323289ad8d521aa5c6a6e3ea938b.jpg?ex=654969ac&is=6536f4ac&hm=3814ab4c5b7585d68ab15eb9070dcabad19ca740e1386e84d07bc90e762a06e0&',
    name: 'Natzu',
    title: 'Main Tester',
    links: [
      { icon: 'youtube', link: 'https://www.youtube.com/@NatzuOff/videos' },
      { icon: 'discord', link: 'https://discord.com/users/614752212752793610' }
    ]
  },
]
</script>

# Credits

Thanks for every developers & testers that helped Magic Modules!

## Developers

<VPTeamMembers size="small" :members="developers" />

## Testers

<VPTeamMembers size="small" :members="testers" />
C
