<template>
  <div class="grid-container">

    <modal name="start-plan-form" > 
      <h2>Start your planning now</h2>
      <div class="grid-container-popup">

        <div class="item-popup">
          <label for="bookName">Book name : </label>
          <input v-model="bookNameInput" type="text" id="bookName" name="bookName">
        </div>
        <div class="item-popup">
          <label for="totalPage">Total of the page : </label>
          <input v-model="totalPageInput" type="number" id="totalPage" name="totalPage">
        </div>
        <div class="item-popup">
          <label for="totalTime">How long it will take? : </label>
          <input v-model="totalTimeInput" type="number" id="totalTime" name="totalTime">
        </div>
        <div class="item-popup">
          <input id="save-button" v-on:click="savePlan(bookName,totalPage,totalTime)" type="submit" value="Submit">
        </div>
      </div>
    </modal>

    <modal name="notification-list">
      <h2>hello world from "notification" button!!!</h2>
      <button v-on:click="closePopup('notification-list')">click me please</button>
    </modal>

    <modal name="detail-progress-form" :height=500>
      <h2>Detail Progress</h2>
      <div class="item-popup">
        <p>Book name : {{ bookName }}</p>
        <p>Total pages : {{ totalPage }}</p>
        <p>Total days it take : {{ totalTime }}</p>
        <p>Days have been spent : {{ currentDate }}</p>
        <br>
        <p>Overall progress :</p>
        <progress-bar
          :options="options"
          :value="percentage"
        />
        <br>

        <div class="item-popup">
          <label for="currentNumberDate">Day : </label>
          <input v-model="currentNumberDate" type="number" id="currentNumberDate" name="currentNumberDate"><br><br>
          <label for="currentReadPageInput">Pages : </label>
          <input v-model="currentReadPageInput" type="number" id="currentReadPageInput" name="currentReadPageInput"><br><br>
        </div>
        <button id="save-button" v-on:click="updateProgress(currentReadPageInput,currentNumberDate)">Update Progress</button>
      </div>
    </modal>

    <div class="item">
      <h2>Hello, User</h2>
    </div>
    <div id="notificationDiv" class="item">
      <h2>Notification section</h2>
      <button v-on:click="notification" class="notification">
        <span>Inbox</span>
        <span class="badge">3</span>
      </button>
    </div>
    <div class="item">
      <button v-on:click="addNewPlan" id="start-plan">Start your new plan</button>
    </div>
    <div></div>
    <div class="item">
      <p>Your reading progress : </p>
      <div align="center" class="scroll" >
        <div v-on:click="detailBook" class="book-item">
          <p>Book A</p>
          <progress-bar
            :options="options"
            :value="percentage"
          />
        </div>
        <div class="book-item">
          <p>Book B</p>
          <progress-bar
            :options="options"
            :value="percentage"
          />
        </div>
        <div class="book-item">
          <p>Book C</p>
          <progress-bar
            :options="options"
            :value="percentage"
          />
        </div>
        <div class="book-item">
          <p>Book D</p>
          <progress-bar
            :options="options"
            :value="percentage"
          />
        </div>
        <div class="book-item">
          <p>Book E</p>
          <progress-bar
            :options="options"
            :value="percentage"
          />
        </div>
        <div class="book-item">
          <p>Book F</p>
          <progress-bar
            :options="options"
            :value="percentage"
          />
        </div>
        <div class="book-item">
          <p>Book G</p>
          <progress-bar
            :options="options"
            :value="percentage"
          />
        </div>
        <div class="book-item">
          <p>Book H</p>
          <progress-bar
            :options="options"
            :value="percentage"
          />
        </div>
        <div class="book-item">
          <p>Book I</p>
          <progress-bar
            :options="options"
            :value="percentage"
          />
        </div>
        <div class="book-item">
          <p>Book J</p>
          <progress-bar
            :options="options"
            :value="percentage"
          />
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // data from db
      bookName:'new book',
      totalPage: 0,
      totalTime: 0,
      currentDate: 0,
      percentage: 50,

      fromDB: null,

      // add plan form
      bookNameInput: '',
      totalPageInput: 0,
      totalTimeInput: 0,

      // update progress
      currentReadPageInput: 1,
      currentNumberDate: 1,

      // progress bar options
      options: {
          text: {
            color: '#FFFFFF',
            shadowEnable: true,
            shadowColor: '#000000',
            fontSize: 14,
            fontFamily: 'Helvetica',
            dynamicPosition: false,
            hideText: false
          },
          progress: {
            color: '#2dbd2d',
            backgroundColor: '#333333'
          },
          layout: {
            height: 35,
            width: 250,
            verticalTextAlign: 61,
            horizontalTextAlign: 43,
            zeroOffset: 0,
            strokeWidth: 30,
            progressPadding: 0,
            type: 'line'
          }
      }
    }
  },
  methods: {
    // websocket
    notification() {
      this.$modal.show('notification-list');
      console.log('hello from notification');
    },
    // on click button
    addNewPlan() {
      this.$modal.show('start-plan-form');
      console.log('hello from add new plan');
    },
    // on click button
    savePlan(bookNameInput, totalPageInput, totalTimeInput) {
      console.log(bookNameInput, totalPageInput, totalTimeInput);

      this.$modal.hide('start-plan-form');
    },
    // on load page
    getAllProgress() {
      console.log('hello from get all progress');
    },
    // on click button
    updateProgress(currentReadPageInput, currentNumberDate) {
      this.$http.get('backend:3000/ReadUs/backend/v1/progress').then(response => (this.fromDB = response))
      console.log(this.fromDB);
      console.log(currentReadPageInput, currentNumberDate);

      this.$modal.hide('detail-progress-form');
    },
    // on click item
    detailBook() {
      this.$modal.show('detail-progress-form');
      console.log('hello for detail book');
    },
    // close popup
    closePopup(name) {
      this.$modal.hide(name);
    }
  },
  // mounted() {

  // }
}
</script>


<style>
.grid-container {
  display: grid;
  grid-template: 150px / auto auto;
}

.grid-container-popup {
  display: grid;
  grid-gap: 1px;
  grid-template: 100px / auto auto;
}

.item {
  border: 1px solid black;
  margin-top: 10px;
  margin-left: 10px;
  margin:10px, 10px; 
  padding:10px; 
}

.item-popup {
  margin-top: 10px;
  margin-left: 10px;
  padding:10px; 
}

.book-item {
  border: 1px solid black;  
  padding:10px; 
  margin-top: 10px;
}

.scroll { 
  margin:0 auto; 
  padding:10px; 
  background-color: white;
  border: 1px solid black; 
  width: 50%; 
  height: 500px; 
  overflow-x: hidden; 
  overflow-x: auto; 
  text-align:justify; 
} 
.meter { 
	height: 20px;  /* Can be anything */
	position: relative;
	background: #555;
	-moz-border-radius: 15px;
	-webkit-border-radius: 15px;
	border-radius: 15px;
	padding: 5px;
	box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
}
.meter > span {
  display: block;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgb(43,194,83);
  background-image: linear-gradient(
    center bottom,
    rgb(43,194,83) 37%,
    rgb(84,240,84) 69%
  );
  box-shadow: 
    inset 0 2px 9px  rgba(255,255,255,0.3),
    inset 0 -2px 6px rgba(0,0,0,0.4);
  position: relative;
  overflow: hidden;
}
.notification {
  background-color: #555;
  color: white;
  text-decoration: none;
  padding: 15px 26px;
  position: relative;
  display: inline-block;
  border-radius: 50%;
}

.notification:hover {
  background: red;
}

.notification .badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background: red;
  color: white;
}

/* .modal, .content {
  background: #fff;
  width: 80%;
  max-width: 480px;
  height: 500px;
  max-height: 500px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  border: 1px solid darkslategray;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
} */

#start-plan {
  height: 100px;
  width: 50%;
  font-size: 25pt;
  font-weight: bold;
  background-color: chartreuse;
  border-radius: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

#save-button {
  background: chartreuse;
  width: 90%;
  height: 50px;
}

#close-button {
  background: rosybrown;
  width: 90%;
  height: 50px;
}
</style>