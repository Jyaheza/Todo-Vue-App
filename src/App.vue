<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Log In</router-link>|
      <router-link to="/add">Add</router-link>|
      <router-link to="/list">Lists</router-link>|
    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



body {
	background : #D8D8D8;
	font-family: Ariel, sans-serif;
}

h2 {
	background : #585858;
	color : white;
	text-align:center;
	padding: 10px;
	
}
table {
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
    padding : 10px;
    text-align: left;
}
th {
	background-color: black;
    color: white;
}
input[type="text"] {
    font-size:14px;
}
button, input[type=button], input[type=submit] {
    background-color: #A4A4A4;
    border: none;
    color: black;
    font-size: 1.1em;
    padding: 10px 16px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
}
button:hover, input[type=button]:hover, input[type=submit]:hover {
	background-color: #585858;
	color: white;
}
.block-center {
	margin : auto 0;
	text-align:center;

	
}
table.center {
    margin-left:auto; 
    margin-right:auto;
  }
  
form {
	text-align : left;
	margin: auto 0;
	display: inline-block;
}
form.inline {
	display: inline-block;
}
.error,.error-head {
    color: #FF0000;
}


body {
	background : #D8D8D8;
	font-family: Ariel, sans-serif;
}

h2 {
	background : #585858;
	color : white;
	text-align:center;
	padding: 10px;
	
}
table {
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
    padding : 10px;
    text-align: left;
}
th {
	background-color: black;
    color: white;
}
input[type="text"] {
    font-size:14px;
}
button, input[type=button], input[type=submit] {
    background-color: #A4A4A4;
    border: none;
    color: black;
    font-size: 1.1em;
    padding: 10px 16px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
}
button:hover, input[type=button]:hover, input[type=submit]:hover {
	background-color: #585858;
	color: white;
}
.block-center {
	margin : auto 0;
	text-align:center;

	
}
table.center {
    margin-left:auto; 
    margin-right:auto;
  }
  
form {
	text-align : left;
	margin: auto 0;
	display: inline-block;
}
form.inline {
	display: inline-block;
}
.error,.error-head {
    color: #FF0000;
}



</style>