extends CharacterBody2D
 
var speed = 300
var click_position = Vector2()
var target_position = Vector2()
 
func _ready():
 
	# Set the click position to the player's current position
	click_position = position
 
func _physics_process(delta):
 
	# This input will need to be created in the input map
	click_position = get_global_mouse_position()
		
	# Check if the player is in a 3px range of the click position, if not move to the target position
	if position.distance_to(click_position) > 3:
		target_position = (click_position - position).normalized()
		velocity = target_position * speed
		move_and_slide()
