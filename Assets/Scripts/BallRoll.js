#pragma strict

/*function Start () {

}*/

var rotationSpeed = 600;
var RotationSpeed = 600;
var jumpHeight = 12;

var hit01 : AudioClip;

var distToGround : float;

function Start () {
	//Getting the distance from the center to the ground
	distToGround = collider.bounds.extents.y;
}

function Update () {

	//Handle rotation ball.
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	var Rotation : float = Input.GetAxis ("Vertical") * RotationSpeed;
	rotation *= Time.deltaTime;
	Rotation *= Time.deltaTime;
	rigidbody.AddForce(Vector3.right * rotation);
	rigidbody.AddForce(Vector3.forward * Rotation);

	if (Input.GetKeyDown(KeyCode.Space) && IsGrounded()) {
		rigidbody.velocity.y = jumpHeight;
	}
}

function IsGrounded () : boolean {
	return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
}

//only horizontal movement
/*	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	rotation *= Time.deltaTime;
	rigidbody.AddRelativeTorque (Vector3.back * rotation * 600);
	
	if ((Input.GetKeyDown(KeyCode.W) || Input.GetKeyDown(KeyCode.UpArrow)) && isFalling == false) {
		rigidbody.velocity.y = jumpHeight;
	}
	isFalling = true;
}*/

function OnCollisionEnter () {
	audio.clip = hit01;
	audio.volume = 1;
	audio.pitch = Random.Range(0.9, 1.1);
	audio.Play();
}