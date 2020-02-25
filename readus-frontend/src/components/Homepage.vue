<template>
  <div class="grid-container">
    <div class="item">
      <h2>Hello, User</h2>
    </div>
    <div class="item">
      <h2>Notification section</h2>
      <a href="#" class="notification">
        <span>Inbox</span>
        <span class="badge">3</span>
      </a>
    </div>
    <div class="item">
      <button id="start-plan">Start you new plan</button>
    </div>
    <div></div>
    <div class="item">
      <p>Your reading progress : </p>
      <div align="center" class="scroll" >
        <div class="book-item">
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


<style>
.grid-container {
  display: grid;
  grid-template: 150px / auto auto;
}

#start-plan {
  height: 100px;
  width: 50%;
  font-size: 25pt;
  font-weight: bold;
  background-color: chartreuse;
  border-radius: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.item {
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
</style>