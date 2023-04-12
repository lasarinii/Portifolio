<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ users } = data);
</script>

<section class="hero min-h-screen bg-base-200">
  <div class="overflow-x-auto">
    <table class="table table-zebra w-full">
      <!-- head -->
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Email</th>
          <th>
            <a href="/login" class="btn btn-ghost">Login</a>
          </th>
        </tr>
      </thead>
      <tbody>
        {#each users as user}
          <tr>
            <th>{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <form action="?/deleteUser&id={user.id}" method="post">
                <button class="btn" type="submit">delete</button>
              </form>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
