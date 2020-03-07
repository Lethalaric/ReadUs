<template>
  <div class="grid-container">

    <modal name="start-plan-form" > 
      <h2>Start your planning now</h2>
      <div class="grid-container-popup">

        <div class="item-popup">
          <label for="bookNameInput">Book name : </label>
          <input v-model="bookNameInput" type="text" id="bookNameInput" name="bookNameInput">
        </div>
        <div class="item-popup">
          <label for="totalPageInput">Total of the page : </label>
          <input v-model="totalPageInput" type="number" id="totalPageInput" name="totalPageInput">
        </div>
        <div class="item-popup">
          <label for="totalTimeInput">How long it will take? : </label>
          <input v-model="totalTimeInput" type="number" id="totalTimeInput" name="totalTimeInput">
        </div>
        <div class="item-popup">
          <input id="save-button" v-on:click="savePlan(bookNameInput,totalPageInput,totalTimeInput)" type="submit" value="Submit">
        </div>
      </div>
    </modal>

    <modal name="notification-list">
      <h2>hello world from "notification" button!!!</h2>
      <button v-on:click="closePopup('notification-list')">click me please</button>
    </modal>

    <modal name="detail-progress-form" :height=550>
      <h2>Detail Progress</h2>
      <div class="item-popup">
        <p>Book name : {{ bookDetail.bookName }}</p>
        <p>Total pages : {{ bookDetail.totalPage }}</p>
        <p>Total days it take : {{ bookDetail.totalTime }}</p>
        <p>Days have been spent : 10 days </p>
        <p>Total read pages : {{ bookDetail.currentPage }}</p>
        <br>
        <p>Overall progress :</p>
        <progress-bar
          :options="options"
          :value="bookDetail.percentage"
        />
        <br>

        <div class="item-popup">
          <label for="currentNumberDate">Day : </label>
          <input v-model="currentNumberDate" type="number" id="currentNumberDate" name="currentNumberDate"><br><br>
          <label for="currentReadPageInput">Pages : </label>
          <input v-model="currentReadPageInput" type="number" id="currentReadPageInput" name="currentReadPageInput"><br><br>
        </div>
        <button id="save-button" v-on:click="updateProgress(bookDetail.id, currentReadPageInput,currentNumberDate)">Update Progress</button>
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
    <div class="item" >
      <p>Your reading progress : </p>
      <div align="center" class="scroll" >
        <div v-for="(progress, index) in allProgress" :key="index" >
          <div v-on:click="detailBook(progress.id, progress.percentage)" class="book-item">
            <p>{{progress.bookName}}</p>
            <progress-bar
              :options="options"
              :value="progress.percentage"
            />
          </div>
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
      // bookName:'new book',
      // totalPage: 0,
      // totalTime: 0,
      // currentDate: 0,
      percentage: 50,

      allProgress: null,
      bookDetail: null,
      errorStatus: null,
      url: '',

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
      
      this.axios.post(this.urlBackend+'/ReadUs/backend/v1/addPlan', {
        headers:{
          'Content-type' : 'application/json'
        },
        "bookName":bookNameInput,
        "totalPage":totalPageInput,
        "totalTime":totalTimeInput
      }).then(response => {
        console.log('my response : ',response);
      }).catch(error => {
        if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;

        }
        console.log(this.errorStatus);
      });

      this.$modal.hide('start-plan-form');
    },
    // on load page
    getAllProgress() {
      console.log('hello from get all progress');
      console.log('url for getAllProgress : ',this.urlBackend);
      this.axios.get(this.urlBackend+'/ReadUs/backend/v1/progress').then(response => {
        this.allProgress = response.data.books;
        console.log('my response : ',response);
        console.log('my db : ',this.allProgress);
      }).catch(error => {
        if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;

        }

        console.log(this.errorStatus);
      })
    },
    // on click button
    updateProgress(id, currentReadPageInput, currentNumberDate) {
      console.log('current page : ', currentReadPageInput);
      console.log('current date : ', currentNumberDate);
      
      this.axios.put(this.urlBackend+'/ReadUs/backend/v1/editProgress', {
        headers:{
          'Content-type' : 'application/json'
        },
        "id":id,
        "currentPage":currentReadPageInput,
        "currentTime":currentNumberDate
      }).then(response => {
        console.log('my response : ',response);
      }).catch(error => {
        if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;

        }
        console.log(this.errorStatus);
      });
      this.$modal.hide('detail-progress-form');
    },
    // on click item
    detailBook(id, percentage) {
      console.log(id);
      this.axios.get(this.urlBackend+'/ReadUs/backend/v1/getDetail', {
        params: {
          id:id
        }
      }).then(response => {
        this.bookDetail = response.data.book;
        this.$set(this.bookDetail, "percentage", percentage);
        console.log('my response : ',response);
        console.log('my db : ',this.bookDetail);
      }).catch(error => {
        if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;

        }

        console.log(this.errorStatus);
      });
      this.$modal.show('detail-progress-form');
      console.log('hello for detail book');
    },
    // close popup
    closePopup(name) {
      this.$modal.hide(name);
    },
    bookDetailInitValue() {
      if (null == this.bookDetail) {
        this.bookDetail = {
          bookName:'',
          totalPage:0,
          totalTime:0,
          currentPage:0,
          currentTime:0
        }
      }
    }
  },
  beforeMount() {
    this.getAllProgress(),
    this.bookDetailInitValue()
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
