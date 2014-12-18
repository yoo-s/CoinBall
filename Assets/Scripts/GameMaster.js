#pragma strict

static var currentScore: int = 0;

var offsetY : float = 10;
var sizeX : float = 100;
var sizeY : float = 30;

function Start () {
	currentScore = 0;
}

function OnGUI () {
	GUI.Box (new Rect (Screen.width - 120, offsetY, sizeX, sizeY), "Score: " + currentScore);
}