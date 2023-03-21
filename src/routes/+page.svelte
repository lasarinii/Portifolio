<script lang="ts">
     let dot: string

     function addDot() {
          if (dot == '...') {
               dot = ''
          } else {
               dot.concat('.')
          }
     }
     setInterval(addDot, 1000)
</script>

<section id="home" class="hero min-h-screen bg-base-200">
     <div class="hero-content text-center">
          <div class="max-w-md">
               <h1 class="text-5xl font-bold">Hello there</h1>
               <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
     </div>
</section>

<section class="hero min-h-screen">
     <div class="hero-content text-center">
          <div class="max-w-md">
               <h1 class="text-3xl font-bold">Under development{ dot }</h1>
          </div>
     </div>
</section>
