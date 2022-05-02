<template>
  <div class="grid grid-cols-1 gap-4 p-5 overflow-x-hidden">
    <!--Start Page-->
    <button class="group flex items-center justify-start w-full rounded-md bg-gray-200 dark:bg-gray-700 p-2 focus:bg-blue-500 dark:focus:bg-blue-800">
      <computer-icon-component class="text-blue-500 group-focus:text-white w-4 h-4 mr-3"></computer-icon-component>
      <h1 class="group-focus:text-white w-full text-left text-xs">Start Page</h1>
      <view-grid-icon class="group-focus:text-white w-4 h-4"></view-grid-icon>
    </button>
    <!--Received Links-->
    <span class="text-xs text-gray-600 dark:text-gray-300">Received Links</span>
    <button class="group flex items-center justify-start w-full rounded-md active:bg-gray-200 dark:active:bg-gray-700 p-2 focus:bg-blue-500 dark:focus:bg-blue-800">
      <user-group-icon class="text-blue-500 group-focus:text-white w-4 h-4 mr-3"></user-group-icon>
      <h1 class="group-focus:text-white w-full text-left text-xs">Shared with You</h1>
    </button>
    <!--Collected Links-->
    <span class="text-xs text-gray-600 dark:text-gray-300">Collected Links</span>
    <button class="group flex items-center justify-start w-full rounded-md active:bg-gray-200 dark:active:bg-gray-700 p-2 focus:bg-blue-500 dark:focus:bg-blue-800">
      <bookmark-icon class="text-blue-500 group-focus:text-white w-4 h-4 mr-3"></bookmark-icon>
      <h1 class="group-focus:text-white w-full text-left text-xs">Bookmarks</h1>
    </button>
    <button class="group flex items-center justify-start w-full rounded-md active:bg-gray-200 dark:active:bg-gray-700 p-2 focus:bg-blue-500 dark:focus:bg-blue-800">
      <glasses-icon-component class="text-blue-500 group-focus:text-white w-4 h-4 mr-3"></glasses-icon-component>
      <h1 class="group-focus:text-white w-full text-left text-xs">Reading List</h1>
    </button>
  </div>
</template>

<script>
import ComputerIconComponent from '../../../../icons/ComputerIconComponent'
import GlassesIconComponent from '../../../../icons/GlassesIconComponent'
import { ViewGridIcon, UserGroupIcon, BookmarkIcon } from '@heroicons/vue/outline'

export default {
  name: 'SidebarSearchMeComponent',
  components: { ComputerIconComponent, ViewGridIcon, UserGroupIcon, BookmarkIcon, GlassesIconComponent }
}
</script>

<style scoped>

</style>
