<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div class="main-container">
    <div class="input">
      <div class = "height">
        <p>Рост</p>
        <input type="number" id = "height">
      </div>
  
      <div class = "weight">
        <p>Вес</p>
        <input type="number" id = "weight">
      </div>
  
      <div class = "age">
        <p>Возраст</p>
        <input type="number" id = "age">
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

      <div class="Diet">
        <p>Диета</p>
        <select name="Diet" id="Diet">
          <option value="1">Чтобы вес не менялся </option>
          <option value="2">Для похудения</option>
          <option value="3">Для набора мышечной массы</option>
        </select>
      </div>

<script lang="ts">
  function myFunction() {
    let gender = Number((<HTMLSelectElement>document.getElementById('gender')).value);
    let activity = Number((<HTMLSelectElement>document.getElementById('activity')).value);
    let diet = Number((<HTMLSelectElement>document.getElementById('Diet')).value);
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var age = document.getElementById("age").value

    if (gender == 1){
      calories = ((10*weight) + (6,25 * height) - (5*age) + 5);
      calories = calories * activity;
      calories = calories / 2;
      calories = calories - 1000;
      if (diet == 2)
      {
        calories = calories - 400;
      }
      if (diet == 3)
      {
        calories = calories + 400;
      }

    }
    else{

      calories = (10*weight) + (6,25 * height) - (5*age);
      calories = calories - 165;
      calories = calories * activity;
      calories = calories / 2;
      calories = calories - 1000;
      if (diet == 2)
      {
        calories = calories - 400;
      }
      if (diet == 3)
      {
        calories = calories + 400;
      }
    }
    document.getElementById('calories').innerHTML=calories + "Ккал";
};
</script>
    </div>
    <div class="final">
      <button value="Сколько нужно калорий в день" onclick="myFunction()"> Сколько нужно калорий в день </button>
      <p id= "calories">
      </p>
    </div>
  </div>
</main>

<style>
</style>
