<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  export let calories = 0;
  let gender = Number((<HTMLSelectElement>document.getElementById('gender')).value);
  if (gender == 1){
    //(10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) + 5

  }
  else{
    //Для женщин: (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) − 161

  }
</script>

<main>
  <div class="main-container">
    <div class="input">
      <div class = "height">
        <p>Рост</p>
        <input type="float">
      </div>
  
      <div class = "weight">
        <p>Вес</p>
        <input type="float">
      </div>
  
      <div class = "age">
        <p>Возраст</p>
        <input type="float">
      </div>
    </div>

    <div class="select">

      <div class="gender">
        <p>Пол</p>
        <select name="gender" id="gender">
          <option value="1">Мужской </option>
          <option value="2">Женский</option>
        </select>
      </div>

      <div class="activity">
        <p>Пол</p>
        <select name="activity" id="activity">
          <option value="1.2">1 раз в неделю</option>
          <option value="1.25">2 раза в неделю</option>
          <option value="1.375">3 раза в неделю</option>
          <option value="1.55">4 раза в неделю</option>
          <option value="1.6">5 раз в неделю</option>
          <option value="1.7">6 раз в неделю</option>
          <option value="1.8">каждый день</option>
          <option value="1.9">2 раза в день</option>
        </select>
      </div>

    </div>
    <div class="final">
      <label for="calories">
        {calories} Ккал 
      </label>
    </div>
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
