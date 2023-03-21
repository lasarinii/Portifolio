<script lang="ts">
     let theme: string

     $: if (typeof document !== 'undefined') {
          if (theme != '') {
               document.documentElement.setAttribute('data-theme', theme)
          } else {
               document.documentElement.setAttribute('data-theme', 'default')
          }
     }
</script>

<nav class="navbar bg-base-100 fixed z-50 font-extrabold">
     <div class="navbar-start">
          <div class="dropdown">
               <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#home">Home</a></li>
                    <li><a>Sobre</a></li>
                    <li><a href="#footer">Contato</a></li>
               </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl" href="/">daisyUI</a>
     </div>
     <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
               <li><a href="#home">Home</a></li>
               <li><a>Sobre</a></li>
               <li><a href="#footer">Contato</a></li>
          </ul>
     </div>
     <div class="navbar-end">
          <ul class="menu menu-horizontal px-1">
               <li tabindex="0">
                    <button>Theme
                         <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </button>
                    <ul class="p-2">
                         <li><button on:click={() => { theme = 'light' }}>Light</button></li>
                         <li><button on:click={() => { theme = 'dark' }}>Dark</button></li>
                         <li><button on:click={() => { theme = 'retro' }}>Retro</button></li>
                         <li><button on:click={() => { theme = 'valentine' }}>Valentine</button></li>
                         <li><button on:click={() => { theme = 'aqua' }}>Aqua</button></li>
                         <li><button on:click={() => { theme = 'lemonade' }}>Lemonade</button></li>
                         <li><button on:click={() => { theme = 'coffee' }}>Coffee</button></li>
                         <li><button on:click={() => { theme = 'luxury' }}>Luxury</button></li>
                         <li><button on:click={() => { theme = 'synthwave' }}>Synthwave</button></li>
                         <li><button on:click={() => { theme = 'default' }}>None</button></li>
                    </ul>
               </li>
          </ul>
     </div>
</nav>
