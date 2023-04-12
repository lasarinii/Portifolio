<section class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login</h1>
      <p class="py-6">
        Digite nome e email, após ser redirecionado a tabela de usuários,
        sinta-se a vontade para remover seu cadastro. Preste atenção na URL para
        entender o que acontece.
      </p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form action="?/createUser" method="post" class="card-body">
        <div class="form-control">
          <label for="name" class="label">
            <span class="label-text">Nome</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label for="email" class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            name="email"
            type="text"
            placeholder="example@email.com"
            class="input input-bordered"
          />
        </div>
        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</section>

