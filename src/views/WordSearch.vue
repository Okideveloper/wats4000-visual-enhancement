<template>
  <div>
    <div class="messages">
      
      <message-container v-bind:messages="messages"></message-container>
    </div>
    <div class="word-search">
      <form v-on:submit.prevent="findWords">
        <p>
          <label>
            Find synonyms for
            <input type="text" v-model="phrase" placeholder="word or phrase"> that:
          </label>
        </p>
        <ul>
          <li>
            <label>
              sounds like
              <input type="text" v-model="soundsLike" placeholder="word or phrase">
            </label>
          </li>
          <li>
            <label>
              start with the letter
              <input
                type="text"
                v-model="startLetter"
                placeholder="single letter"
              >
            </label>
          </li>
          <li>
            <label>
              end with the letter
              <input type="text" v-model="endLetter" placeholder="single letter">
            </label>
          </li>
        </ul>
        <p>
          <button type="submit">Search</button>
        </p>
      </form>
    </div>
    <div class="word-list-container">
      <h2>Word List</h2>
      <ul class="word-list">
        <!-- TODO: Add transition-group around the list item here to animate items in the word list. -->
        <transition-group name="slideRight" tag="div" appear>
          <li v-for="word in wordList" v-bind:key="word">
            {{ word }}&nbsp;
            <button v-on:click="removeWord(word)" class="remove-word">x</button>
          </li>
        </transition-group>
        <li v-for="word in wordList" :key="word">
          {{ word }}&nbsp;
          <button v-on:click="removeWord(word)" class="remove-word">x</button>
        </li>
      </ul>
    </div>
    <div class="results-container">
      <!-- Adding the spinner below will show when search is in progress. -->
      <spinner v-if="showSpinner"></spinner>
      <h2 v-if="results && results.length > 0">{{ results.length }} Words Found</h2>
      <ul v-if="results && results.length > 0" class="results">
        <!-- Adding the animate affects to the result list -->
        <transition-group name="bounce" tag="div" appear>
          <li v-for="item in results" class="item" :key="item.word">
            <p class="result-word">{{ item.word }}</p>
            <p>
              <button v-on:click="addWord(item.word)" class="add-word">Add to WordList</button>
            </p>
          </li>
        </transition-group>
      </ul>

      <div v-else-if="results && results.length === 0" class="no-results">
        <h2>No Words Found</h2>
        <p class="results">Please adjust your search to find more words.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// Note: vue2-animate is added using the require statement because it is a CSS file
require("vue2-animate/dist/vue2-animate.min.css");
import CubeSpinner from "@/components/CubeSpinner";
import MessageContainer from "@/components/MessageContainer";

export default {
  name: "WordSearch",
  components: {
    //spinner: CubeSpinner
    // TODO: Define child components here.
  },
  data() {
    return {
      results: null,
      wordList: [],
      messages: [],
      phrase: "",
      soundsLike: "",
      startLetter: "",
      endLetter: "",
      showSpinner: false
    };
  },
  methods: {
    addWord: function(word) {
      if (this.wordList.indexOf(word) === -1) {
        this.wordList.push(word);
        console.log(`Added ${word} to wordList.`);
        // adding a message to the array.
        this.messages.push({
          type: "success",
          text: `${word} added to Wordlist`
        });
      } else {
        console.log("Word is already on wordlist.");

        this.messages.push({
          type: "info",
          text: `${word} is already in the Wordlist`
        });
      }
    },
    removeWord: function(word) {
      this.wordList.splice(this.wordList.indexOf(word), 1);

      this.messages.push({
        type: "success",
        text: `${word} removed`
      });
    },
    findWords: function() {
      this.showSpinner = true;
      this.results = null;
      axios
        .get("https://api.datamuse.com/words", {
          params: {
            ml: this.phrase,
            sl: this.soundsLike,
            sp:
              this.startLetter === "" && this.endLetter === ""
                ? ""
                : `${this.startLetter}*${this.endLetter}`
          }
        })
        .then(response => {
          this.showSpinner = false;
          this.results = response.data;
        })
        .catch(error => {
          this.showSpinner = false;

          this.messages.push({
            type: "error",
            text: error.message
          });
        });
    }
  },
  components: {
    spinner: CubeSpinner,
    "message-container": MessageContainer
  }
};
</script>

<style scoped>
.word-search {
  font-size: 1.5rem;
  white-space: nowrap;
  display: inline-block;
  width: 70%;
}
.word-list-container {
  display: inline-block;
  width: 25%;
  background: #793030;
  padding: 0.5rem;
}
.results-container {
  clear: both;
}

.results{
  text-align: center;
}
input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.2rem;
  color: #080808;
  font-size: 23px;
  font-weight: 400;
  background: rgba(182, 163, 163, 0.02);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  border-radius: 0;
}
button.add-word {
  background: #2db1bb;
  color: rgb(17, 1, 1);
  font-size: 0.8rem;
}
button.add-word:hover {
  background: #7ef57a;
}
button.remove-word {
  font-size: 2rem;
  padding: 1px;
  display: inline-block;
  color: rgb(9, 116, 238);
  background: none;
}
button.remove-word:hover {
  background: #8be279;
  color: #fde300;
}
h1,
h2 {
  font-weight: normal;
  text-align: center;
}
ul.results,
ul.word-list {
  text-align: center;
  list-style-type: none;
  padding: 0;
}
.word-list li {
  margin: 5px 0;
  padding: 5px 0;
  border-bottom: 1px solid #333;
}
.results li {
  text-align: center;
  display: inline-block;
  margin: 10px;
  border: solid 1px rgb(10, 10, 10);
  padding: 0.5rem;
  width: 100px;
  min-height: 100px;
  color: rgb(253, 244, 244);
  font-weight: 300;
  font-size: 1.2rem;
  background: rgba(46, 19, 58, 0.7);
}
ul.errors {
  list-style-type: auto;
}
.errors li {
  border: 1px solid rgb(228, 18, 106);
  color: rgb(238, 128, 128);
  padding: 0.5rem;
  width: 100px;
  margin: 10px 0;
}

a {
  color: #42b983;
}
</style>
