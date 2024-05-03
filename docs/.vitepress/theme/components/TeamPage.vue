<script lang="ts" setup>
  import { VPTeamMembers, VPTeamPage } from 'vitepress/theme'

  const members = [
    {
      avatar: 'https://avatars.githubusercontent.com/Colourlessglow',
      name: 'Colourlessglow',
      title: 'Author',
      desc: '希儿天下第一',
      links: [
        {
          icon: 'github',
          link: 'https://github.com/Colourlessglow',
        },
      ],
    },
  ]
</script>
<template>
  <VPTeamPage class="mt-20px">
    <VPTeamMembers size="small" :members="members" />
  </VPTeamPage>
</template>
