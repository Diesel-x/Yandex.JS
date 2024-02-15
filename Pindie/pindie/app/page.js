import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
   return <main>
        <body>
    <header>
      <div class="container">
        <h1 class="page-heading">Heroes Dance Battle 💃</h1>
      </div>
    </header>
    <main class="container">
      <div class="game-zones">
        <section class="form-wrapper">
          <form id="heroForm" class="form">
            <label class="radio-label-title">Класс</label>

            <div class="radio-row">
              <!--    Получи значение выбранного инпута класса   -->
              <input
                class="radio-input"
                name="class"
                type="radio"
                id="classMage"
                value="Mage"
                checked
              />
              <label class="radio-label-text" for="classMage">Маг 🔮</label>

              <input
                class="radio-input"
                type="radio"
                id="classKnight"
                name="class"
                value="Knight"
              />
              <label class="radio-label-text" for="classKnight">Рыцарь 🗡</label>
            </div>
            <!--    Получи значение инпута имени    -->
            <input
              class="form-input"
              type="text"
              id="name"
              name="name"
              maxlength="24"
              placeholder="Имя героя"
            />
            <!--    Получи значение инпута уровня    -->
            <input
              class="form-input"
              type="number"
              id="level"
              min="1"
              max="10"
              name="level"
              placeholder="Уровень"
            />

            <div class="form-parameters">
              <!--    Получи значение инпутов параметров уровня    -->
              <input
                class="form-input parameter-input"
                type="number"
                min="1"
                max="99"
                id="strength"
                name="strength"
                placeholder="Сила"
              />
              <input
                class="form-input parameter-input"
                type="number"
                min="1"
                max="99"
                id="intelligence"
                name="intelligence"
                placeholder="Интеллект"
              />
              <input
                class="form-input parameter-input"
                type="number"
                min="1"
                max="99"
                id="agility"
                name="agility"
                placeholder="Ловкость"
              />
              <input
                class="form-input parameter-input"
                type="number"
                id="additionalStat"
                min="1"
                name="additionalStat"
                placeholder="Мана / Энергия"
              />
            </div>
            <label class="radio-label-title" id="additionalAbilityText"
              >Есть зелье для тектоника? / Танцует танго на коне?</label
            >
            <div class="radio-row">
              <input
                class="radio-input"
                type="radio"
                id="additionalAbilityTrue"
                name="additionalAbility"
                value="true"
                checked
              />
              <label class="radio-label-text" for="additionalAbilityTrue"
                >Да</label
              >

              <input
                class="radio-input"
                type="radio"
                id="additionalAbilityFalse"
                name="additionalAbility"
                value="false"
              />
              <label class="radio-label-text" for="additionalAbilityFalse"
                >Нет</label
              >
            </div>
            <button class="form-button" id="sendToBattleButton" type="button">
              Отправить на танцпол
            </button>
          </form>
        </section>

        <section class="battle-zone">
          <div class="cards">
            <div class="card-wrapper">
              <h2 class="card-heading">Ваш герой</h2>
              <div class="card">
                <div class="card-title">
                  <h2 id="playerHeroClass" class="card-class">Класс</h2>
                  <h2 id="playerHeroName" class="card-title-text">Имя героя</h2>
                </div>
                <div class="card-description">
                  <h3 class="card-level">
                    Уровень:
                    <span id="playerHeroLevel" class="hero-level-amount"
                      >--</span
                    >
                  </h3>
                  <p class="card-parameters-heading">Характеристики:</p>
                  <div class="card-parameters">
                    <div class="card-parameter">
                      <p class="card-parameter-title">STR</p>
                      <span id="playerHeroStrength" class="card-parameter-value"
                        >--</span
                      >
                    </div>
                    <div class="card-parameter">
                      <p class="card-parameter-title">AGI</p>
                      <span id="playerHeroAgility" class="card-parameter-value"
                        >--</span
                      >
                    </div>
                    <div class="card-parameter">
                      <p class="card-parameter-title">HP</p>
                      <span id="playerHeroHp" class="card-parameter-value"
                        >--</span
                      >
                    </div>
                    <div class="card-parameter">
                      <p class="card-parameter-title">INT</p>
                      <span
                        id="playerHeroIntelligence"
                        class="card-parameter-value"
                        >--</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <button id="doSkillButton" class="card-button" disabled>
                Дополнительное умение
              </button>
            </div>
            <div class="card-wrapper">
              <h2 class="card-heading">Герой оппонента</h2>
              <div class="card">
                <div class="card-title">
                  <h2 id="enemyHeroClass" class="card-class">Класс</h2>
                  <h2 id="enemyHeroName" class="card-title-text">Имя героя</h2>
                </div>
                <div class="card-description">
                  <h3 class="card-level">
                    Уровень:
                    <span id="enemyHeroLevel" class="hero-level-amount"
                      >--</span
                    >
                  </h3>
                  <p class="card-parameters-heading">Характеристики:</p>
                  <div class="card-parameters">
                    <div class="card-parameter">
                      <p class="card-parameter-title">STR</p>
                      <span id="enemyHeroStrength" class="card-parameter-value"
                        >--</span
                      >
                    </div>
                    <div class="card-parameter">
                      <p class="card-parameter-title">AGI</p>
                      <span id="enemyHeroAgility" class="card-parameter-value"
                        >--</span
                      >
                    </div>
                    <div class="card-parameter">
                      <p class="card-parameter-title">HP</p>
                      <span id="enemyHeroHp" class="card-parameter-value"
                        >--</span
                      >
                    </div>
                    <div class="card-parameter">
                      <p class="card-parameter-title">INT</p>
                      <span
                        id="enemyHeroIntelligence"
                        class="card-parameter-value"
                        >--</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <button id="getEnemyButton" class="card-button" disabled>
                Получить героя
              </button>
            </div>
          </div>
          <button id="startBattleButton" class="battle-zone-button" disabled>
            Начать баттл!
          </button>
        </section>
      </div>
    </main>
    <script src="classes.js"></script>
    <script src="script.js"></script>
  </body>
   </main>;
}
