<script lang="ts">
     let dot: string

     if (typeof dot === 'undefined') {
          dot = ' '
     }

     function addDot() {
          if (dot == ' ...') {
               dot = ' '
          } else {
               dot = dot + '.'
          }
     }

     setInterval(addDot, 800)
</script>

<section id="home" class="hero min-h-screen bg-base-200">
     <div class="hero-content text-left">
          <div class="max-w-md">
               <p class="p-1 text-xl font-bold">Pedro Lasarini,</p>
               <h1 class="text-5xl py-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-primary-focus to-secondary-focus">Estudante de Programação</h1>
               <p class="py-6">Com 20 anos, curso Engenharia de Computação na <abbr title="Universidade Virtual do Estado de São Paulo">Univesp</abbr> e tenho amplo interesse na área de Tecnologia da Informação.</p>
          </div>
     </div>
</section>

<section id="sobre" class="hero min-h-screen">
     <div class="hero-content text-center">
          <div class="max-w-md">
               <h1 class="text-3xl font-bold">Under development{ dot }</h1>
          </div>
     </div>
</section>
