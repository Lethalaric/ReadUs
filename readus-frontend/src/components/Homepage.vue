<template>
  <div class="grid-container">

    <modal name="start-plan-form"> 
      <h2>hello world from "start you new plan" button!!!</h2>
      <div>
        <label for="fname">First name : </label>
        <input v-model="fname" type="text" id="fname" name="fname"><br><br>
      </div>
      <div>
        <label for="lname">Last name : </label>
        <input v-model="lname" type="text" id="lname" name="lname"><br><br>
      </div>
      <div>
        <input v-on:click="savePlan(fname,lname)" type="submit" value="Submit">
      </div>
      <button v-on:click="closePopup('start-plan-form')">click me please</button>
    </modal>

    <modal name="notification-list">
      <h2>hello world from "notification" button!!!</h2>
      <button v-on:click="closePopup('notification-list')">click me please</button>
    </modal>

    <modal name="detail-progress-form">
      <h2>hello world from "detail progress" item!!!</h2>
      <button v-on:click="closePopup('detail-progress-form')">click me please</button>
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
      <button v-on:click="addNewPlan" id="start-plan">Start you new plan</button>
    </div>
    <div></div>
    <div class="item">
      <p>Your reading progress : </p>
      <div align="center" class="scroll" >
        <div v-on:click="detailBook" class="book-item">
          <p>Book A</p>
          <div class="meter">
            <span style="width: 50%"></span>
          </div>
        </div>
        <div class="book-item">
          <p>Book B</p>
          <div class="meter">
            <span style="width: 25%"></span>
          </div>
        </div>
        <div class="book-item">
          <p>Book C</p>
          <div class="meter">
            <span style="width: 10%"></span>
          </div>
        </div>
        <div class="book-item">
          <p>Book D</p>
          <div class="meter">
            <span style="width: 90%"></span>
          </div>
        </div>
        <div class="book-item">
          <p>Book E</p>
          <div class="meter">
            <span style="width: 75%"></span>
          </div>
        </div>
        <div class="book-item">
          <p>Book F</p>
          <div class="meter">
            <span style="width: 25%"></span>
          </div>
        </div>
        <div class="book-item">
          <p>Book G</p>
          <div class="meter">
            <span style="width: 15%"></span>
          </div>
        </div>
        <div class="book-item">
          <p>Book H</p>
          <div class="meter">
            <span style="width: 0%"></span>
          </div>
        </div>
        <div class="book-item">
          <p>Book I</p>
          <div class="meter">
            <span style="width: 70%"></span>
          </div>
        </div>
        <div class="book-item">
          <p>Book J</p>
          <div class="meter">
            <span style="width: 45%"></span>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  datas: {
    fname: '',
    lname: ''
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
    savePlan(fname, lname) {
      console.log(fname, lname);
    },
    // on load page
    getAllProgress() {
      console.log('hello from get all progress');
    },
    // on click button
    updateProgress() {
      console.log('hello from updateProgress');
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
  }
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
  border: 1px solid black;
  margin-top: 10px;
  margin-left: 10px;
  margin:10px, 10px; 
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

.modal, .content {
  background: #fff;
  width: 80%;
  max-width: 480px;
  height: 200px;
  max-height: 250px;
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
}
</style>