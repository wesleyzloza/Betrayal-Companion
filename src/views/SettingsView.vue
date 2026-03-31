<template>
  <div>
    <div class="modal" id="settings_dialog">
      <div class="row">
        <!-- Bugfix for odd dialog behavior. https://bugs.jqueryui.com/ticket/6006 -->
        <button style="display: none" autofocus>Bugfix</button>
        <div style="margin: -1em -1em 0em -1em">
          <img class="img" :src="BaHHWW" />
        </div>
        <br />
        <h2>Widow's Walk - An Expansion</h2>
        <form id="game_expansion">
          <div class="radio_btn">
            <input
              id="expansion_off"
              type="radio"
              name="game_expansion"
              value="exp_off"
              checked
            />
            <label for="expansion_off">Disabled <i>(Coming Soon)</i></label>
          </div>
        </form>

        <div style="margin: 0em -1em 0em -1em">
          <img class="img" :src="BaHH" />
        </div>
        <br />
        <h2>Betrayal at House on the Hill - Base Game</h2>
        <form id="game_edition">
          <div class="radio_btn">
            <input id="sec_ed" type="radio" name="game_edition" value="2ed" checked />
            <label for="sec_ed">2<sup>nd</sup> Edition</label>
          </div>
          <div class="radio_btn">
            <input id="first_ed" type="radio" name="game_edition" value="1ed" />
            <label for="first_ed">1<sup>st</sup> Edition</label>
          </div>
        </form>
        <p>
          <i
            >The 2<sup>nd</sup> edition of the game is recommended and is loaded by default. The
            1<sup>st</sup> edition of the game is known to have issues with clarity and should be
            used cautiously.</i
          >
        </p>

        <h2>Features</h2>
        <form>
          <div class="checkbox">
            <input id="flip_card" type="checkbox" name="settings" value="flip" checked />
            <label for="flip_card">Flipping Character Cards (Sync Characters)</label>
          </div>
        </form>

        <h2>Dying Animation</h2>
        <form>
          <div class="checkbox">
            <input
              id="die_animation"
              type="checkbox"
              name="settings"
              value="animate"
              checked
            />
            <label for="die_animation">Play Animation</label>
          </div>
          <div class="checkbox">
            <input id="die_sound" type="checkbox" name="settings" value="sound"
              checked />
            <label for="die_sound">Play Sound</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaHHWW from '../images/BaHHWW.png';
import BaHH from '../images/BaHH.png';
</script>

<style scoped></style>
